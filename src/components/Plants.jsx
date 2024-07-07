import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

const Plants = () => {
    const [tree, setTree] = useState([]);
    const [minor, setMinor] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // Number of items per page

    useEffect(() => {
        fetch('https://plant-server-6tw1.onrender.com/plants')
            .then(res => res.json())
            .then(data => {
                setTree(data);
                const filteredPlants = data.filter(i => 
                    i.category === 'AIR PURIFYING PLANTS' || 
                    i.category === 'FLOWERING PLANTS' || 
                    i.category === 'INDOOR PLANTS'
                );
                setMinor(filteredPlants);
            });
    }, []);

    // Calculate the index of the first and last item on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = minor.slice(indexOfFirstItem, indexOfLastItem);

    // Function to handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="md:my-16 mb-4">
            <h1 className='text-[#343434] mb-4 font-bold text-center text-3xl'>Trending Plants</h1>
            <div className='bg-black h-[2px] w-[100px] mb-4 mx-auto'></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                {currentItems.map(plant => (
                    <PlantCard key={plant._id} plant={plant} />
                ))}
            </div>
            <div className="flex mt-5 justify-center">
                {/* Pagination Buttons */}
                {Array.from({ length: Math.ceil(minor.length / itemsPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`btn mx-1 ${currentPage === index + 1 ? 'bg-[#3B823E] text-white' : 'bg-gray-300 text-black'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Plants;
