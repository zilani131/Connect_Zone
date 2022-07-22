import React from 'react';

const Post = () => {
    return (
        <div className='p-5 my-20 w-3/5 m-auto bg-slate-200'>
        <div className='container md:container md:mx-auto'>
          <div>
            <input type="text" placeholder="Type your ideas here" class="input border-solid border-2 border-sky-500 bg-white max-w-3xl w-full" />
            <div className='py-5 flex gap-5 justify-center'>
              <div className=''>
                <button class="btn glass btn-sm bg-white">Attach Img</button>
              </div>
              <div>
                <button class="btn glass btn-sm bg-white">Attach oth</button>
              </div>
            </div>
            <div class="flex justify-end">
              <div>

              </div>
              <div>
                <button class="btn glass btn rounded-full w-32 bg-white">post</button>
              </div>
            </div>

            <div class="card max-w-3xl w-full bg-white shadow-xl mt-10">
              <div class="card-body">



                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 '>
                  <div>
                    <div className='lg:flex items-center justify-between'>
                      <div>
                        <div class="avatar">
                          <div class="w-11 rounded-full">
                            <img src="https://placeimg.com/192/192/people" />
                          </div>
                        </div>
                      </div>
                      <div className='w-36'>
                        <h1>Sagor Ahammed</h1>
                        <span>Web Developer</span>
                      </div>
                    </div>
                  </div>
                  <div>

                  </div>
                  <div>
                    <button class="btn w-32 rounded-full glass btn bg-white">Block</button>
                  </div>
                  <div>
                    <button class="btn glass rounded-full w-32 btn bg-white">Follow 1.5k</button>
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
                  <img src={sagor} />
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
                <input type="text" placeholder="Write a comment" class="input border-solid border-2 border-sky-500 bg-white max-w-3xl w-full" />
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

export default Post;