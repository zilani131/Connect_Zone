import React from 'react';

const PostCard = ({n}) => {
  const {name,role,postimg,profilepic}=n;
    return (
      //changed the margin my-20 and give padding to the parent home js
      //width changed from 60% to 5/12
      //added rounded to the parent container
        <div className='p-5 w-full m-auto bg-slate-200 rounded-lg'>
        <div className='container md:container md:mx-auto'>
          <div>
            <input type="text" placeholder="Type your ideas here" className="input border-solid border-2 border-sky-500 bg-white max-w-3xl w-full" />
            <div className='py-5 flex gap-5 justify-center'>
              <div className=''>
                <button className="btn glass btn-sm bg-white">Attach Img</button>
              </div>
              <div>
                <button className="btn glass btn-sm bg-white">Attach oth</button>
              </div>
            </div>
            <div className="flex justify-end">
              <div>

              </div>
              <div>
                <button className="btn glass btn rounded-full w-32 bg-white">post</button>
              </div>
            </div>

            <div className="card max-w-3xl w-full bg-white shadow-xl mt-10">
              <div className="card-body">



                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 '>
                  <div>
                    <div className='lg:flex items-center gap-2 w-fit'>
                      <div>
                        <div className="avatar">
                          <div className="w-11 rounded-full">
                            <img src={profilepic} alt='Sagor'/>
                          </div>
                        </div>
                      </div>
                      <div className='w-fit'>
                        <h1 className='whitespace-nowrap'>{name}</h1>
                        <h1>{role}</h1>
                      </div>
                    </div>
                  </div>
                  <div>

                  </div>
                  <div>
                    <button className="btn w-32 rounded-full glass btn bg-white">Block</button>
                  </div>
                  <div>
                    <button className="btn glass rounded-full w-32 btn bg-white">Follow 1.5k</button>
                  </div>
                </div>

                {/* <div className='grid grid-cols-2 py-4'>
                  <div>
                    <p>Topics: News Feed</p>
                  </div>
                  <div>
                      <p>Rating:4.5/5</p>
                  </div>
                </div> */}

                <div className='py-12'>
                  <img src={postimg} />
                </div>

                <div className='py- grid grid-cols-1 lg:grid-cols-3'>
                  <div>
                    <button>Like</button>
                  </div>
                  <div>
                    <button>Comment</button>
                  </div>
                  <div>
                    <button>Make Connect</button>
                  </div>
                </div>

                <div className='py-3'>
                <input type="text" placeholder="Write a comment" className="input border-solid border-2 border-sky-500 bg-white max-w-3xl w-full" />
                </div>


              </div>
            </div>


          </div>
          <div>

          </div>
        </div>
      </div>
    );
};

export default PostCard;