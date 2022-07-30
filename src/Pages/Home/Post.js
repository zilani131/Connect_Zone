import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaCommentAlt, FaThumbsUp } from "react-icons/fa";
import auth from "../../firebase.init";

const Post = ({ post }) => {
  const { userName, userImage, time, postCaption, postImages } = post;
  const [user] = useAuthState(auth);
  const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
  return (
    <div className="post card max-w-3xl w-full bg-white shadow-xl mt-5">
      <div className="card-body">
        <div className="post-header flex items-center">
          <img
            className="rounded-full w-11"
            src={userImage}
            alt=""
          />
          <div className="post-header-info flex flex-col ml-2">
            <h4 className="font-semibold">{userName}</h4>
            <span className="text-xs link-hover cursor-pointer text-gray-400">
              {"Just now"}
            </span>
          </div>
        </div>

        <div className="post-content py-1">
          <p className="mb-2 ml-2">{postCaption}</p>
          {
            postImages.map((image, index) => {
              return (
                <img
                  key={index}
                  className="w-full rounded-lg"
                  src={image}
                  alt=""
                />
              );
            }
            )
          }
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
              src={user.photoURL}
              alt=""
            />
            <input
              type="text"
              placeholder="Write a comment..."
              className="input w-full ml-2 bg-gray-200 rounded-full"
            />
          </div>
          {/* All comments */}
          {/* <div className="comments flex mt-2">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
