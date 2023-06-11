import React from 'react';

const Heading = ({pText, hText}) => {
    return (
        <div className='text-center py-10 mt-20 mb-28 border-b-4 border-black border-dashed w-[50%] mx-auto'>
            <p className='text-xl font-mono pb-4'>{pText}</p>
            <h1 className='text-7xl font-serif line-through'>{hText}</h1>
        </div>
    );
};

export default Heading;