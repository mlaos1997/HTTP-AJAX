import React from 'react';
import axios from 'axios';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: "",
                email: "",
                age: "",
                imageUrl: ""
            }
        }
    }

    handleChange = e => {
        e.persist();
        let value = e.target.value;
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: value
            }
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/friends', this.state.friend)
            .then(res => {
                this
                    .props
                    .updateFriend(res.data);
                this
                    .props
                    .history
                    .push('/friends');
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <h2>Add New Friend!</h2>
                <form onSubmit={this.handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        placeholder="name"
                        value={this.state.friend.name}/>

                    <div className="baseline"/>

                    <input
                        type="text"
                        name="email"
                        onChange={this.handleChange}
                        placeholder="example@email.com..."
                        value={this.state.friend.email}/>

                    <div className="baseline"/>

                    <input
                        type="number"
                        name="age"
                        onChange={this.handleChange}
                        placeholder="age..."
                        value={this.state.friend.age}/>

                    <input
                        type="string"
                        name="imageUrl"
                        onChange={this.handleChange}
                        placeholder="Image URL here..."
                        value={this.state.friend.imageUrl}/>

                    <div className="baseline"/>

                    <button type="submit">
                        Add New Friend
                    </button>

                </form>
            </div>
        )
    }
};

export default FriendForm;