import React from 'react';

const FriendsList = props => {

    const routeToItem = (e, friend) => {
        e.preventDefault();
        props.history.push(`/friends/${friend.id}`)
    }
    
    return (
        <div className="friend-list-wrapper">
        {props.friends.map(friend => (
        console.log(friend),
            <div 
            onClick={e => routeToItem(e, friend)}
            className="friend-card"
            key={friend.id}
            > 
            <p>{friend.name}</p>           
            </div>
        ))}
        </div>
    )
}

export default FriendsList;