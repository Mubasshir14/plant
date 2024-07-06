import img1 from '../assets/Tree/rec/Blog1.png'
import img2 from '../assets/Tree/rec/Blog2.png'

const Blogs = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-[#343434] font-bold text-3xl mb-4'><em><u>B</u></em>logs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden group container rounded-lg flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={img1} className='rounded-xl' alt="" />
                    </div>

                    <div className='opacity-0 group-hover:opacity-90 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'></span>
                        <div className='md:pt-8 flex flex-col text-center'>
                            <a target="_blank">
                                <button className='text-cen4 rounded-lg px-4 py-3 m-2  text-white font-bold text-xs md:text-sm lg:text-lg'>8 Best
                                    Low Maintenance Plants
                                    </button>
                            </a>
                            <a target="_blank">
                                <button className='text-cen4 rounded-lg px-4 py-3 lg:m-2 bg-[#3B823E]  text-white font-bold text-lg'>Read</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden group container rounded-lg flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
                    <div className='rounded-xl overflow-hidden'>
                        <img src={img2} className='rounded-xl' alt="" />
                    </div>

                    <div className='opacity-0 group-hover:opacity-90 absolute inset-0 flex flex-col justify-center items-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'></span>
                        <div className='md:pt-8 flex flex-col text-center'>
                            <a target="_blank">
                                <button className='text-cen4 rounded-lg px-4 py-3 m-2  text-white font-bold text-xs md:text-sm lg:text-lg'>Air Purifying Plants
                                    </button>
                            </a>
                            <a target="_blank">
                                <button className='text-cen4 rounded-lg px-4 py-3 lg:m-2 bg-[#3B823E]  text-white font-bold text-lg'>Read</button>
                            </a>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Blogs;