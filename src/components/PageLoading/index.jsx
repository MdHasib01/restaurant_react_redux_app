import React from 'react';
import loadingSpoon from "./loading.gif"

const PageLoading = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            
            <img className='object-contain' src={loadingSpoon} alt="" />

        </div>
    );
};

export default PageLoading;