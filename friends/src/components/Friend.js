import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import FriendDescription from './FriendDescription';
import MeetUp from './MeetUp';

const Friend = props => {
    const friend = props
        .friends
        .find(friend => `${friend.id}` === props.match.params.id);
        console.log(friend);

    if (!props.friends.length || !friend) {
        return <h2>Loading friend...</h2>
    }

    return (
        <div className="friend-wrapper">
            <div onClick={props.deleteFriend(friend.id)} className="friend-header">
                <div className="friend-title-wrapper">
                    <h2>{friend.name}</h2>
                    <h4>{friend.age}</h4>
                </div>
            </div>
            <nav className="friend-sub-nav">
                <NavLink exact to={`/friends/${friend.id}`}>
                    Bio
                </NavLink>
                <NavLink to={`/friends/${friend.id}/meetup`}>
                    Meetup
                </NavLink>
            </nav>
            <Route
                exact
                path="/friends/:id"
                render={props => <FriendDescription {...props} friend={friend}/>}/>
            <Route
                path="/friends/:id/meetup"
                render={props => <MeetUp {...props} friends={friend}/>}/>
        </div>
    );
}

export default Friend;