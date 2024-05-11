import React from 'react';

const page = async() => {
    const res = await fetch("http://localhost:5000/posts");
    const posts = await res.json();
    return (
        <div>
            <h2>Total post :{posts.length}</h2>
        </div>
    );
};

export default page;