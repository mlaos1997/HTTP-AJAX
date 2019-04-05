import React from 'react';

const Home = props => {
    const routeToFriends = e => {
        e.preventDefault();
        props.history.push('/friends');
    }

    return (
        <div className="home-wrapper">
            <img src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg" alt="Home Page" />
        <button onClick={routeToFriends} className="md-button friend-button">Find Friends!</button>
        </div>
    )
};

export default Home;