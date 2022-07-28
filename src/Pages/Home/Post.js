import React from "react";
import { FaThumbsUp, FaCommentAlt } from "react-icons/fa";

const Post = () => {
  const openFileDialog = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_this) => {
      let files = Array.from(input.files);
      console.log(files);
    };
    input.click();
  };
  return (
    <div className="p-5 m-auto rounded-lg mt-20">
      <div className="post-form bg-white flex justify-center rounded-xl py-10 px-10 shadow-sm">
        <img
          className="rounded-full w-12"
          src="https://randomuser.me/api/portraits/men/43.jpg"
          alt=""
        />
        <label
          for="my-modal"
          class="cursor-pointer pl-5 relative bg-gray-200 rounded-full w-full ml-4 modal-button"
        >
          <span className="absolute top-1/4">What are you thinking, John?</span>
        </label>
      </div>

      <div class="post card max-w-3xl w-full bg-white shadow-xl mt-5">
        <div class="card-body">
          <div className="post-header flex items-center">
            <img
              className="rounded-full w-11"
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt=""
            />
            <div className="post-header-info flex flex-col ml-2">
              <h4 className="font-semibold">John Doe</h4>
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

      <div class="post card max-w-3xl w-full bg-white shadow-xl mt-5">
        <div class="card-body">
          <div className="post-header flex items-center">
            <img
              className="rounded-full w-11"
              src="https://randomuser.me/api/portraits/men/43.jpg"
              alt=""
            />
            <div className="post-header-info flex flex-col ml-2">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs link-hover cursor-pointer text-gray-400">
                1h
              </span>
            </div>
          </div>

          <div className="post-content py-1">
            বর্তমান সময়ে রিডাক্স কেন গুরুত্বপূর্ণ এবং রিডাক্স আসলে কোন ক্ষেত্রে
            কাজে লাগে এসব নিয়ে একটি বিস্তারিত আলোচনা হবে আজ ঝংকার ভাই এর সাথে।
            ফেসবুক লাইভ সেশনটি আজ রাত ১০ টায় শুরু হবে। লাইভ এর লিঙ্ক লাইভের ঠিক
            আগে এই গ্রুপেই দেয়া হবে। দেখা হচ্ছে আজকের লাইভে।
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

      {/* Modal code */}
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 class="font-bold text-lg text-center mb-2">Create post</h3>
          <hr />
          <textarea
            class="textarea w-full placeholder:text-2xl"
            placeholder="What are you thinking, John?"
            rows="8"
          ></textarea>
          <div className="addExtra border rounded-lg flex justify-between items-center py-4 px-3">
            <p>Add to your post</p>
            <img
              onClick={openFileDialog}
              className="w-6 cursor-pointer"
              src="https://i.ibb.co/N3GgfHY/image.png"
              alt=""
            />
          </div>
          <button class="btn btn-primary w-full text-white">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
