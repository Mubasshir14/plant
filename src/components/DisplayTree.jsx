import img1 from '../assets/Tree/rec/Frame1.png'
import img2 from '../assets/Tree/rec/Frame7.png'
import img3 from '../assets/Tree/rec/Frame8.png'
import img4 from '../assets/Tree/rec/Frame9.png'
import img5 from '../assets/Tree/rec/Frame10.png'
import img6 from '../assets/Tree/rec/Frame11.png'
const DisplayTree = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
            <div className="w-full max-w-xs overflow-hidden  rounded-lg  ">
                <img className="object-cover w-full " src={img1} alt="avatar" />      
            </div>
            <div className="w-full max-w-xs overflow-hidden  rounded-lg  ">
                <img className="object-cover w-full " src={img2} alt="avatar" />      
            </div>
            <div className="w-full max-w-xs overflow-hidden  rounded-lg  ">
                <img className="object-cover w-full " src={img3} alt="avatar" />      
            </div>
            <div className="w-full max-w-xs overflow-hidden  rounded-lg  ">
                <img className="object-cover w-full " src={img4} alt="avatar" />      
            </div>
            <div className="w-full max-w-xs overflow-hidden  rounded-lg  ">
                <img className="object-cover w-full " src={img5} alt="avatar" />      
            </div>
            <div className="w-full max-w-xs overflow-hidden  rounded-lg  ">
                <img className="object-cover w-full " src={img6} alt="avatar" />      
            </div>
        </div>
    );
};

export default DisplayTree;