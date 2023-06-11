import React from 'react';

const Heading = ({pText, hText}) => {
    return (
        <div className='text-center py-10 mt-20 mb-28 border-b-4 text-secondary border-secondary border-dashed w-[90%] md:w-[50%] mx-auto'>
            <p className='text-xl font-mono pb-4 uppercase'>{pText}</p>
            <h1 className='text-5xl md:text-7xl font-serif'>{hText}</h1>
        </div>
    );
};

export default Heading;