import React from 'react';
import LatestPost from './LatestPost';
import Newsfeed from './Newsfeed';

const Home = () => {
    return (
        <div>
            <Newsfeed></Newsfeed>
            <LatestPost></LatestPost>
        </div>
    );
};

export default Home;