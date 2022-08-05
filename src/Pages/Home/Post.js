import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaCommentAlt, FaThumbsUp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Comments from "./Comments";

const Post = ({ post }) => {
  const {
    _id,
    userName,
    userEmail,
    userImage,
    time,
    postCaption,
    postImages,
    postLikes,
    reason,
  } = post;
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({});
  const [isCommented, setIsCommented] = useState(false);
  const [isLiked, setIsLiked] = useState(true);
  const [open, setOpen] = useState(false);
  const { email } = useParams();

  axios
    .get(
      `https://tranquil-plains-69980.herokuapp.com/user/${
        user ? user.email : email
      }`
    )
    .then((res) => setUserData(res.data));
  const { img } = userData;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    const comment = {
      postId: _id,
      commentUserName: user.displayName,
      commentUserImage: img,
      commentUserEmail: user.email,
      commentText: data.commentText,
    };
    await axios
      .post(`https://tranquil-plains-69980.herokuapp.com/comment`, comment)
      .then((res) => {
        if (res.status === 200) {
          e.target.reset();
          setIsCommented(!isCommented);
        }
      });
  };

  const updateLike = async (id) => {
    setIsLiked(!isLiked);
    await axios.put(`https://tranquil-plains-69980.herokuapp.com/like/${id}`, {
      postLikes: isLiked ? postLikes + 1 : postLikes - 1,
    });
    console.log(isLiked);
  };

  return (
    <div className="post card max-w-3xl w-full bg-white shadow-xl mt-5 mx-auto">
      <div className="card-body">
        <div className="post-header flex items-center">
          <Link to={`/user/${userEmail}`}>
            <img
              className="w-10 h-10 object-cover rounded-full hover:border-gray-400 hover:border-2"
              src={userImage}
              alt=""
            />
          </Link>
          <div className="post-header-info flex flex-col ml-2">
            <Link
              to={`/user/${userEmail}`}
              className="font-semibold link-hover"
            >
              {userName}
            </Link>
            <span className="text-xs link-hover cursor-pointer text-gray-400">
              {time}
            </span>
          </div>
        </div>

        <div className="post-content py-1">
          <p className="mb-2 ml-2">{postCaption}</p>
          <div className="grid grid-cols-2 justify-center">
            {postImages?.map((image, index) => {
              return (
                <img
                  key={index}
                  className={
                    reason === "profilePicture"
                      ? "w-[60%] object-cover mx-auto rounded-full col-span-2"
                      : "rounded-lg w-[95%] m-2 object-cover"
                  }
                  src={image}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <hr />
        <div className="flex justify-around">
          <button
            className={`${
              isLiked
                ? "hover:bg-gray-300 rounded-lg w-full transition-all duration-200 py-1 font-semibold"
                : "hover:bg-gray-300 rounded-lg w-full transition-all duration-200 py-1 font-semibold text-blue-600"
            }`}
            onClick={() => updateLike(_id)}
          >
            <FaThumbsUp className="inline" />
            <span className="ml-1">Like</span>
            {/* <span className="ml-1">{postLikes}</span> */}
          </button>

          <button
            className="hover:bg-gray-300 rounded-lg w-full transition-all duration-200 py-1 font-semibold"
            onClick={() => setOpen(!open)}
          >
            <FaCommentAlt className="inline" />
            <span className="ml-1">Comment</span>
          </button>
        </div>
        <hr />

        {user ? (
          <div className={open ? "comment-section" : "hidden"}>
            <form className="comment flex" onSubmit={handleSubmit(onSubmit)}>
              <img
                className="w-12 bg-[#0B0F2C] p-2 rounded-full"
                src={img}
                alt=""
              />
              <input
                type="text"
                placeholder="Write a comment..."
                className="input w-full ml-2 bg-gray-200 rounded-full"
                style={errors.commentText && { borderColor: "red" }}
                {...register("commentText", {
                  required: true,
                })}
              />
            </form>
            {/* All comments */}
            <Comments isCommented={isCommented} _id={_id} />
          </div>
        ) : (
          <p>Please login to comment</p>
        )}
      </div>
    </div>
  );
};

export default Post;
