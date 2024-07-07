import { Link } from "react-router-dom";


const CategoryTabCard = ({plant}) => {
    const {image, name,price, _id} = plant;
    return (
        <div>
        <div className="w-full md:max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-5 ">
            <img className="object-cover w-full h-56 rounded-lg" src={image} alt="avatar" />

            <div className="py-5 text-center">
                <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white"  role="link">{name}</a>
                <span className="text-sm text-[#343434]">${price}</span>
                
            </div>
            <Link to={`/plants/${_id}`} className="btn bg-[#3B823E] font-bold text-white w-full">Details</Link>

        </div>
    </div>
    );
};

export default CategoryTabCard;