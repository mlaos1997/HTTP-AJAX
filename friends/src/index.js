import React, {Component} from 'react';
import ReactDOM from "react-dom";
import './index.css';
import axios from 'axios';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import Home from './components/Home';
import Friend from './components/Friend';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {

    // Inside your React application, create a component to display the list of
    // friends coming from the server.

    constructor() {
        super();
        this.state= {
            friends: []
        }
    }

    updateFriend = newFriend => {
        this.setState({ friends: newFriend })
    }

    deleteFriend = ( id, props ) => {
        return () => {
            axios.delete(`http://localhost:5000/friends/${id}`)
            .then( res => this.setState({ friends: res.data }))
            .catch(err => console.log(err));
        }
    }

 
    

    componentDidMount() {
        // http://localhost:3333 is address to the server doorstep items is the endpoint
        axios
            .get('http://localhost:5000/friends')
            .then(res => this.setState({friends: res.data}))
            .catch(err => console.log(err))

    }

    render() {
        return (
            <div className="App">
                <nav>
                    <h1 className="home-header">Make a Friend</h1>
                    <div className="nav-links">
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                        <NavLink exact to="/friends">Friends</NavLink>
                        <NavLink to="/friend-form">Friend Form</NavLink>
                    </div>
                </nav>

                <Route exact path="/" component={Home}/>
                <Route
                    exact
                    path="/friends"
                    render={props => (<FriendsList {...props} friends={this.state.friends}/>)}/>
                <Route
                    path="/friends/:id"
                    render={props => (<Friend {...props} deleteFriend={this.deleteFriend} friends={this.state.friends}/>)}/>
                <Route
                    path="/friend-form"
                    render={props => (<FriendForm {...props} updateFriend={this.updateFriend}/>)}/>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Router>
    <App/>
</Router>, rootElement);
