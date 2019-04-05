import React from 'react';

const MeetUp = props => {
    return (
        <div>
            <p className="friend-description">{props.friends.email}</p>
        </div>
    );
}

export default MeetUp;