import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import ReactModal from "react-modal";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import Posts from "./Posts";
ReactModal.setAppElement("#root");

const Middle = () => {
  const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState({});
  const [userDataLoading, setUserDataLoading] = useState(true);
  const [isPosted, setIsPosted] = useState(false);
  const [uploadedImage, setUploadedImage] = useState([]);
  const [posting, setPosting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit } = useForm();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  let month = months[d.getMonth()];
  let date = d.getDate();
  const todayDate = `${month} ${date}`;

  const onSubmit = async (data, e) => {
    setPosting(true);
    await axios
      .post("https://tranquil-plains-69980.herokuapp.com/post", {
        userName: user.displayName,
        userImage: userData.img,
        userEmail: user.email,
        postCaption: data.postCaption,
        postImages: uploadedImage,
        postLikes: [
          
        ],
        time: todayDate,
      })
      .then((res) => {
        if (res.status === 200) {
          e.target.reset();
          setIsPosted(!isPosted);
          setPosting(false);
          setShowModal(false);
          setUploadedImage([]);
        }
      });
  };

  useEffect(() => {
    if (user) {
      setUserDataLoading(true);
      axios
        .get(`https://tranquil-plains-69980.herokuapp.com/user/${user.email}`)
        .then((res) => {
          setUserData(res.data);
          setUserDataLoading(false);
        });
    }
  }, [user]);

  if (loading || userDataLoading) {
    return <Loading />;
  }

  const openFileDialog = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_this) => {
      let files = Array.from(input.files);
      files.forEach((file) => {
        const imageStorageKey = "25f8fd66fcd0b291d11ff45ad0f16374";
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        const formData = new FormData();
        formData.append("image", file);
        axios.post(url, formData).then((res) => {
          if (res.data.success) {
            const imageUrl = res.data.data.url;
            console.log(imageUrl);
            setUploadedImage([...uploadedImage, imageUrl]);
          }
        });
      });
    };
    input.click();
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="middle p-5 m-auto rounded-lg mt-5 max-w-3xl w-full">
      {/* Post form */}
      <div className="post-form bg-white flex justify-center rounded-xl p-10 shadow-sm">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src={userData?.img}
          alt=""
        />
        <div
          onClick={handleOpenModal}
          className="cursor-pointer pl-5 relative bg-gray-200 rounded-full w-full ml-4 modal-button"
        >
          <span className="absolute top-1/4">
            What are you thinking, {user.displayName.split(" ")[0]}?
          </span>
        </div>
      </div>

      <div className="modal relative">
        <ReactModal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          className="modal-box absolute top-[20%] left-[32%] mx-auto"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          {posting && (
            <div className="modal-overlay absolute right-0 left-0 top-0 bottom-0 z-40">
              <div className="bg-[#3333334c] h-full flex justify-center items-center text-white">
                <div class="flex items-center justify-center space-x-2 animate-bounce">
                  <div class="w-8 h-8 bg-white rounded-full"></div>
                  <div class="w-8 h-8 bg-white rounded-full"></div>
                  <div class="w-8 h-8 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          )}
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={handleCloseModal}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg text-center mb-2">Create post</h3>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="textarea w-full placeholder:text-2xl text-lg"
              style={{ outline: "0" }}
              placeholder={`What are you thinking, ${
                user.displayName.split(" ")[0]
              }?`}
              rows="8"
              name="postCaption"
              {...register("postCaption")}
            ></textarea>
            <div className="flex justify-center space-x-3">
              {uploadedImage.length > 0 ? (
                uploadedImage.map((image, index) => {
                  return (
                    <div>
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        src={image}
                        alt=""
                        key={index}
                      />
                    </div>
                  );
                })
              ) : (
                <div className="addExtra border rounded-lg flex justify-between items-center py-4 px-3 w-full">
                  <p>Add to your post</p>
                  <img
                    onClick={openFileDialog}
                    className="w-8 cursor-pointer"
                    src="https://i.ibb.co/N3GgfHY/image.png"
                    alt=""
                  />
                </div>
              )}
              {uploadedImage.length > 0 ? (
                <div>
                  <img
                    onClick={openFileDialog}
                    className="w-8 cursor-pointer"
                    src="https://i.ibb.co/N3GgfHY/image.png"
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <input
              type="submit"
              className="btn btn-primary w-full text-white mt-1"
              value="Post"
            />
          </form>
        </ReactModal>
      </div>

      {/* <Posts/> */}
      <Posts
        isPosted={isPosted}
        url={`https://tranquil-plains-69980.herokuapp.com/postsByFriends/${[
          userData?.friends,
        ]}`}
      />
    </div>
  );
};

export default Middle;
