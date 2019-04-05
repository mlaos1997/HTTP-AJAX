import React from 'react';

const Home = props => {
    const routeToFriends = e => {
        e.preventDefault();
        props.history.push('/friends');
    }

    return (
        <div className="home-wrapper">
            <img className="home-image" src="https://i.ytimg.com/vi/gFKE0XA6RKU/maxresdefault.jpg" alt="Home Page" />
        <button onClick={routeToFriends} className="md-button friend-button">Find Friends!</button>
        </div>
    )
};

export default Home;