import Link from 'next/link';
import React from 'react';

const page = async() => {
    const res = await fetch("http://localhost:5000/posts");
    const posts = await res.json();
    return (
        <div className='max-w-6xl mx-auto '>
            <h2 className='text-3xl text-center'>Total post :{posts.length}</h2>
            <div>
            {
            posts.map((post,ind) => <div key={ind} className="card w-[50%] mx-auto mt-5 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title"> title {post.title} </h2>
              <p>Description {post.description}</p>
              <p className='mt-3 font-semibold text-red-700'>Like:  {post.likeCount}</p>
              <div className="card-actions justify-end">
                <button className="btn">See More</button>
              </div>
            </div>
          </div>)
            }
            </div>

            <Link className="btn btn-primary " href="/">Go to Home</Link>
        </div>
    );
};

export default page;