import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2>this is a new route </h2>
            <h3>Pages name is a  newMe pages</h3>
            <Link href='/' className='bg-indigo-500 text-white font-semibold'>Go back Home</Link>
            <div>
                
            </div>
        </div>
    );
};

export default page;