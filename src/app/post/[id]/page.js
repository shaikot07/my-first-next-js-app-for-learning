import React from 'react';

const DetailPage = async({params}) => {
    console.log(params);
    const res = await fetch(`http://localhost:5000/posts/${params.id}`);
    const postDetals = await res.json();
    console.log(postDetals);
    return (
        <div>
            <h2>this is a detail page</h2>
        </div>
    );
};

export default DetailPage;