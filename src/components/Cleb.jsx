import img1 from '../assets/Tree/rec/Frame35.png'
import img2 from '../assets/Tree/rec/Frame36.png'
import img3 from '../assets/Tree/rec/Frame37.png'
import img4 from '../assets/Tree/rec/Frame38.png'
import img5 from '../assets/Tree/rec/Frame39.png'
import img6 from '../assets/Tree/rec/Frame40.png'
import img7 from '../assets/Tree/rec/Frame41.png'
const Cleb = () => {
    return (
        <div>
           <h1 className='text-[#343434] mb-4 font-bold text-center text-3xl'>Celebs You Love, Love Us </h1>
           <div className='bg-black h-[2px] w-[100px] mb-4 mx-auto'>
            
           </div>
            <div className='grid grid-cols-2 md:grid-cols-4'>
                <img src={img1} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3'>
                <img src={img2}  alt="" />
                <img src={img3} alt="" />
                <img src={img4} className='md:block hidden' alt="" />
            </div>
        </div>
    );
};

export default Cleb;