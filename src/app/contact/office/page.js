
import Image from 'next/image';
import React from 'react';

const officeInfo = () => {
    return (
        <div>
            <h2 classNameName='text-orange-500 text-4xl text-center'> this is  a contact pages <span classNameName='text-green-700 text-6xl underline'>office info pages 😁😆😅😂</span></h2>
            <div>

                <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
               
                <Image  src="/docs/images/blog/image-4.jpg" alt='blog '/>
                
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        </div>
                </a>

            </div>
        </div>
    );
};

export default officeInfo;