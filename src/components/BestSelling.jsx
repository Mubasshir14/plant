import img1 from '../assets/Tree/rec/a.png'
import img2 from '../assets/Tree/rec/s.png'
import img3 from '../assets/Tree/rec/f.png'
import { Link } from 'react-router-dom';

const BestSelling = () => {
    return (
        <div className="my-10 md:mt-16">
            <h1 className='text-[#343434] mb-4 font-bold text-center text-3xl'>Best Selling</h1>
            <div className='bg-black h-[2px] w-[100px] mb-4 mx-auto'>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
                <div className="w-full p-5  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover rounded-lg w-full h-56" src={img1} alt="avatar" />

                    {/* <div className="py-5 px-1 text-center">
                        <a href='#indoor'  className="btn bg-[#3B823E] w-full text-lg font-bold text-white" >Shop Now</a>
                        
                    </div> */}
                </div>
                <div className="w-full p-5  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover rounded-lg w-full h-56" src={img2} alt="avatar" />

                    {/* <div className="py-5 px-1 text-center">
                        <Link  className="btn bg-[#3B823E] w-full text-lg font-bold text-white" >Shop Now</Link>
                        
                    </div> */}
                </div>
                <div className="w-full p-5  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img className="object-cover rounded-lg w-full h-56" src={img3} alt="avatar" />

                    {/* <div className="py-5 px-1 text-center">
                        <Link  className="btn bg-[#3B823E] w-full text-lg font-bold text-white" >Shop Now</Link>
                        
                    </div> */}
                </div>
            </div>
            <div className="py-5 px-1 text-center">
                <Link to='/category' className="btn bg-[#3B823E]  text-lg font-bold text-white" >Shop Now</Link>

            </div>
        </div>
    );
};

export default BestSelling;