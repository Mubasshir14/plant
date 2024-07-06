
import img from '../assets/Tree/rec/Rectangle58.png'
const Landscape = () => {
    return (
        <div>
            <header className="">
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center flex-row-reverse lg:flex md:flex-row">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                                    <span className="mb-4 border-b-2 border-black">LandScape </span>
                                    Gardening
                                </h1>
                                <p className="mt-8 text-lg text-gray-600 dark:text-gray-400">
                                    Whether it is growing your own food or setting up your roof-top garden, we provide the highest quality landscaping services, contributing to a greener world and substantial living!

                                    <p className='mt-2 mb-6'>Schedule your service appointment today!</p>

                                    <p className='text-red-600'>**Service only available in Telangana and AndhraPradesh.</p>
                                </p>
                                <button className="w-full  mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform  rounded-lg lg:w-auto p-5  bg-[#3B823E]">
                                    Book Now
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-3xl " src={img} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Landscape;
