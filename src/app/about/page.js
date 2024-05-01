import Link from 'next/link';
import React from 'react';

const aboutPages = () => {
    return (
        <div>
           <h2 className='text-yellow-500 text-4xl text-center font-semibold'> This is a about pages</h2>

           <div className='max-w-6xl mx-auto'>
            <Link href='/' className='bg-green-500 py-3 px-6 rounded-lg text-white'>
                Go Back Home 
            </Link>
           </div>
        </div>
    );
};

export default aboutPages;