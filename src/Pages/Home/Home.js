import React from 'react';
import LatestPost from './LatestPost';
import Newsfeed from './Newsfeed';
import Post from './Post';

const Home = () => {
    return (
        <div>
            <Newsfeed></Newsfeed>
            <LatestPost></LatestPost>
            <Post></Post>
        </div>
    );
};

export default Home;