import React from 'react';

const Newsfeed = () => {
    return (
        <div className='w-1/4 h-screen bg-primary px-8 py-8' >
            <h1 className='text-center text-3xl font-semibold mb-5'>News Feed</h1>
          <ul className='list-disc' >
            <li className=' text-start text-xl font-medium'>Recent Post</li>
            <li className=' text-start text-xl font-medium'>Top post </li>
          </ul>
        </div>
    );
};

export default Newsfeed;