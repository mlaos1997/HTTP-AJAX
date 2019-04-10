import React from 'react';

const FriendDescription = props => {
    return (
        <div>
            <p className="friend-description">{props.friend.age}</p>
        </div>
    );
};

export default FriendDescription;