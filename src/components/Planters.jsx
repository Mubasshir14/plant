import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

const Planters = () => {
    const [tree, setTree] = useState([]);
    const [i, setI] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/plants')
            .then(res => res.json())
            .then(data => {
                setTree(data);
                const currentItems = data.filter(item => item.category === 'PLANTERS')
                setI(currentItems)
            });
    }, []);
    return (
        // <div className='p-5'>
        //     <h1 className='text-[#343434] mb-4 font-bold text-center text-3xl'>Planters</h1>
        //     <div className='bg-black h-[2px] w-[100px] mb-4 mx-auto'></div>
        //     <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>

        //         <div className="w-full md:max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-5">
        //             <img className="object-cover rounded-lg w-full h-56" src={img1} alt="avatar" />

        //             <div className="py-5 text-center">
        //                 <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">Tele Pot</a>

        //             </div>
        //         </div>
        //         <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-5">
        //             <img className="object-cover rounded-md w-full h-56" src={img2} alt="avatar" />

        //             <div className="py-5 text-center">
        //                 <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">Mint Fusion</a>

        //             </div>
        //         </div>
        //         <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-5">
        //             <img className="object-cover rounded-lg w-full h-56" src={img3} alt="avatar" />

        //             <div className="py-5 text-center">
        //                 <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">Ice Cream Pot</a>

        //             </div>
        //         </div>
        //         <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 p-5">
        //             <img className="object-cover rounded-lg w-full h-56" src={img4} alt="avatar" />

        //             <div className="py-5 text-center">
        //                 <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">Beige Fracture</a>

        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div className="mt-8">
             <h1 className='text-[#343434] mb-4 font-bold text-center text-3xl'>Planters</h1>
             <div className='bg-black h-[2px] w-[100px] mb-4 mx-auto'></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                {i.map(plant => (
                    <PlantCard key={plant._id} plant={plant} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Planters;