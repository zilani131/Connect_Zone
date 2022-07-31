import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaCommentAlt, FaThumbsUp } from "react-icons/fa";
import auth from "../../firebase.init";
import axios from "axios";
import { useForm } from "react-hook-form";
import Comments from "./Comments";

const Post = ({ post }) => {
  const { _id, userName, userImage, time, postCaption, postImages, postLikes } =
    post;
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({});
  const [isCommented, setIsCommented] = useState(false);
  const [isLiked, setIsLiked] = useState(true);
  const [open, setOpen] = useState(false);

  axios
    .get(`http://localhost:5000/user/${user.email}`)
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
    await axios.post(`http://localhost:5000/comment`, comment).then((res) => {
      if (res.status === 200) {
        e.target.reset();
        setIsCommented(!isCommented);
      }
    });
  };

  const updateLike = async (id) => {
    setIsLiked(!isLiked);
    await axios.put(`http://localhost:5000/like/${id}`, {
      postLikes: isLiked ? postLikes + 1 : postLikes - 1,
    });
    console.log(isLiked);
  };

  return (
    <div className="post card max-w-3xl w-full bg-white shadow-xl mt-5">
      <div className="card-body">
        <div className="post-header flex items-center">
          <img
            className="w-10 bg-[#0B0F2C] p-2 rounded-full"
            src={userImage}
            alt=""
          />
          <div className="post-header-info flex flex-col ml-2">
            <h4 className="font-semibold">{userName}</h4>
            <span className="text-xs link-hover cursor-pointer text-gray-400">
              {time}
            </span>
          </div>
        </div>

        <div className="post-content py-1">
          <p className="mb-2 ml-2">{postCaption}</p>
          {postImages?.map((image, index) => {
            return (
              <img
                key={index}
                className="w-full rounded-lg"
                src={image}
                alt=""
              />
            );
          })}
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
      </div>
    </div>
  );
};

export default Post;
