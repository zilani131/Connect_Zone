import React from 'react';

const LatestPost = () => {
    return (
        <div className='w-1/4 h-scroll bg-slate-200 ps-8 py-8 right-0 rounded-lg' >
        <h1 className='text-center text-3xl font-semibold mb-5'>Latest Post</h1>
      <ul className='list-disc ml-10' >
        <li className=' text-start text-xl font-medium'>Recent Post</li>
        <li className=' text-start text-xl font-medium'>Top post </li>
      </ul>
    </div>
    );
};

export default LatestPost;