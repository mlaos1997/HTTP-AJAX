import React from 'react';
import {Route, NavLink} from 'react-router-dom';

import FriendDescription from './FriendDescription';
import MeetUp from './MeetUp';

const Friend = props => {
    const friend = props
        .friends
        .find(friend => `${friend.id}` === props.match.params.id);

    const routeToFriendsPage = props => {
        props.history.push('/friends');
    }

    if (!props.friends.length || !friend) {
        return <h2>Loading friend...</h2>
    }

    return (
        <div className="friend-wrapper">
            <div className="friend-header">
                <div className="friend-title-wrapper">
                    <h2>{friend.name}</h2>
                    <img className="friend-list-image" src={friend.imageUrl} alt="yeah"/>
                    <div className="button-wrapper">
                    <button onClick={props.deleteFriend(friend.id)}>Delete</button>
                    </div>
                </div>
            </div>
            <nav className="friend-sub-nav">
                <NavLink exact to={`/friends/${friend.id}`}>
                    Age
                </NavLink>
                <NavLink to={`/friends/${friend.id}/meetup`}>
                    Email
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