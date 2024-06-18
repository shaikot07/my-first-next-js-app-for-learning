"use client"
import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlog]=useState([]);
    console.log(blogs);

    useEffect(()=>{
        fetch('http://localhost:5000/blog')
            .then(res =>res.json())
            .then(data=>  setBlog(data))
    },[])
    return (
        <div>
            this us blog
        </div>
    );
};

export default Blog;