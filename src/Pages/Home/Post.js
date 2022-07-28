import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';


const Post = () => {
  /*  const {
        isLoading,
        error,
        data: news,
        refetch,
      } = useQuery("news", () =>
        fetch(`http://localhost:5000/news`).then((res) => res.json())
      );
      if(isLoading){
        return <h1>Loading ....</h1>
      }*/
      const [news,setNews]=useState([]);

      useEffect(() => {
        fetch("https://tranquil-plains-69980.herokuapp.com/news")
          .then((res) =>  res.json())
          .then((data) => setNews(data));
      }, []);
      // let {name}=news;
    // console.log(news);
    return (
        <div className='grid gap-4'>
    { news.map(n=> <PostCard n={n} key={n._id}></PostCard>)}
        </div>
    );
};

export default Post;