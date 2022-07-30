import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Post from "./Post";
import ContentLoader from "react-content-loader";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    setPostsLoading(true);
    fetch("https://tranquil-plains-69980.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setPostsLoading(false);
      });
  }, []);

  if (postsLoading) {
    return (
      <div>
        <div className="mt-5">
          <SkeletonTheme baseColor="#cdd3d4" highlightColor="#f5f7f7">
            <Skeleton
              className="h-12 mr-4"
              width="7%"
              borderRadius="50%"
              inline={true}
            />
            <div className="inline">
              <Skeleton width="50%" />
            </div>
          </SkeletonTheme>
          <SkeletonTheme baseColor="#cdd3d4" highlightColor="#f5f7f7">
            <Skeleton />
            <Skeleton />
            <Skeleton className="h-60" />
            <Skeleton />
            <Skeleton />
          </SkeletonTheme>
        </div>
        <div className="mt-5">
          <SkeletonTheme baseColor="#cdd3d4" highlightColor="#f5f7f7">
            <Skeleton
              className="h-12 mr-4"
              width="7%"
              borderRadius="50%"
              inline={true}
            />
            <div className="inline">
              <Skeleton width="50%" />
            </div>
          </SkeletonTheme>
          <SkeletonTheme baseColor="#cdd3d4" highlightColor="#f5f7f7">
            <Skeleton />
            <Skeleton />
            <Skeleton className="h-60" />
            <Skeleton />
            <Skeleton />
          </SkeletonTheme>
        </div>
      </div>
    );
  }

  console.log(postsLoading);

  return (
    <div className="posts">
      {posts ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <h1>No posts</h1>
      )}
    </div>
  );
};

export default Posts;
