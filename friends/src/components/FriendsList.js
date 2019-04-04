import React from 'react';

const FriendsList = props => {
    return (
        <div className="friend-card">
            <h2>{props.friend.name}</h2>
            <p>{props.friend.email}</p>
            <p>{props.friend.age}</p>
        </div>
    )
}

export default FriendsList;