import React from 'react';
import LatestPost from './LatestPost';
import Newsfeed from './Newsfeed';
import Post from './Post';

const Home = () => {
    return (
        <div className='flex flex-row pt-20 gap-4'>
            <Newsfeed></Newsfeed>
            <Post></Post>
            <LatestPost></LatestPost>
        </div>
    );
};

export default Home;