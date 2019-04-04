import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import FriendsList from './components/FriendsList';


class App extends Component {

  // Inside your React application, create a component to display the list of friends coming from the server.

  state = {
    friends: []
  }

  componentDidMount() {
    // http://localhost:3333 is address to the server doorstep
    // items is the endpoint
    axios.get('http://localhost:5000/friends')
    .then(res => this.setState({ friends: res.data }))
    .catch(err => console.log(err))
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
           {this.state.friends.map(friend => <FriendsList friend={friend}/>)}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
