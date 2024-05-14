import Link from 'next/link';
import React from 'react';

// next.js ar documention  theke copy kore anechi
export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/posts");
    const posts = await res.json();

    const ids = posts.map((post)=>{
        return{
            id:post.id + "",
        }
    })
    // console.log(ids);
    return ids;
  }
  



const DetailPage = async ({ params }) => {
    // console.log(params);
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const postDetals = await res.json();
    console.log(postDetals);
    const {id, title,description,likeCount}=postDetals || {}
    return (
        <div className='max-w-6xl mx-auto bg-slate-300 p-5'>
            <h2 className='text-2xl mt-8 text-center text-purple-700 font-semibold'>This Is A Detail Post ID: {id}</h2>
            <div className='mt-6'>
                <div className="card w-[50%] mx-auto bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Post Title: {title} </h2>
                        <p> Post Description {description} </p>
                        <p className='text-1xl font-semibold'>Like Count: {likeCount} </p>
                        <div className="card-actions justify-end">
                            <Link href='/post'>
                            <button className="btn btn-accent text-white">Back to All post</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;