import { Link } from "react-router-dom";

const PlantCard = ({ plant }) => {
    const { image, name, price, _id, hot_sale } = plant;
    return (
        <div className="w-full md:max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-5 relative">
            <img className="object-cover w-full h-56 rounded-lg" src={image} alt={name} />
            
            {hot_sale && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg">
                    🔥 Hot Sale
                </div>
            )}

            <div className="py-5 text-center">
                <Link to={`/plants/${_id}`} className="block text-xl font-bold text-gray-800 dark:text-white mb-2 hover:underline">
                    {name}
                </Link>
                <span className="text-sm text-[#343434]">${price}</span>
            </div>
            <Link to={`/plants/${_id}`} className="btn bg-[#3B823E] font-bold text-white w-full mt-3 hover:bg-[#2a5e2b] transition">
                Details
            </Link>
        </div>
    );
};

export default PlantCard;
