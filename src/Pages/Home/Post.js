import React from "react";
import { FaThumbsUp, FaCommentAlt } from "react-icons/fa";

const Post = ({ post }) => {
  const { name, profilepic } = post;
  return (
    <div class="post card max-w-3xl w-full bg-white shadow-xl mt-5">
      <div class="card-body">
        <div className="post-header flex items-center">
          <img
            className="rounded-full w-11"
            src={profilepic}
            alt=""
          />
          <div className="post-header-info flex flex-col ml-2">
            <h4 className="font-semibold">{name}</h4>
            <span className="text-xs link-hover cursor-pointer text-gray-400">
              1h
            </span>
          </div>
        </div>

        <div className="post-content py-1">
          <img
            className="rounded-lg"
            src="https://i.ibb.co/jbsRGzF/photo-2022-07-22-17-45-42.jpg"
            alt=""
          />
        </div>
        <hr />
        <div className="flex justify-around">
          <button className="hover:bg-gray-300 rounded-lg w-full transition-all duration-200 py-1 font-semibold">
            <FaThumbsUp className="inline" />
            <span className="ml-1">Like</span>
          </button>
          <button className="hover:bg-gray-300 rounded-lg w-full transition-all duration-200 py-1 font-semibold">
            <FaCommentAlt className="inline" />
            <span className="ml-1">Comment</span>
          </button>
        </div>
        <hr />

        <div className="comment-section">
          <div className="comment flex">
            <img
              className="w-12 rounded-full"
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt=""
            />
            <input
              type="text"
              placeholder="Write a comment..."
              class="input w-full ml-2 bg-gray-200 rounded-full"
            />
          </div>
          {/* All comments */}
          <div className="comments flex mt-2">
            <div className="commenter-img">
              <img
                className="w-12 rounded-full"
                src="https://randomuser.me/api/portraits/men/43.jpg"
                alt=""
              />
            </div>
            <div className="comment-info bg-gray-200 rounded-2xl py-2 px-3 ml-2">
              <div className="commenter-name">
                <h5 className="font-semibold link-hover cursor-pointer">
                  John Doe
                </h5>
              </div>
              <div className="comment-text">
                <p>Very good. Go ahead.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
