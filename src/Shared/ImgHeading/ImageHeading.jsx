
const ImageHeading = ({hText}) => {
    return (
        <div className='bg-[url("https://i.ibb.co/fMyQ9cN/free-photo-of-girls-playing-football.jpg")] bg-cover bg-no-repeat h-80 text-center  bg-center'>
            <div className="bg-[#10101089] h-full flex justify-center items-center">
            <h1 className='text-5xl md:text-7xl text-white uppercase font-serif underline'>{hText}</h1>
            </div>
        </div>
    );
};

export default ImageHeading;