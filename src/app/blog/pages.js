import Blog from '@/component/blog/Blog';
import React from 'react';

const pages = () => {
    return (
        <div>
            <h1 className='text-base font-semibold text-purple-900'>This is blog mother div</h1>
            <div>
                <Blog />
            </div>
        </div>
    );
};

export default pages;