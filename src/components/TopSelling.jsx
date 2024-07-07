import { useEffect, useState } from "react";
import PlantCard from "./PlantCard";


const TopSelling = () => {
    const [tree, setTree] = useState([]);
    const [i, setI] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/plants')
            .then(res => res.json())
            .then(data => {
                setTree(data);
                const currentItems = data.filter(item => item.hot_sale === 'true')
                setI(currentItems)
            });
    }, []);
    return (
        <div>
             <h1 className='text-[#343434] mb-4 font-bold text-center text-3xl'>Hot Sale</h1>
             <div className='bg-black h-[2px] w-[100px] mb-4 mx-auto'></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                {i.map(plant => (
                    <PlantCard key={plant._id} plant={plant} />
                ))}
            </div>
        </div>
    );
};

export default TopSelling;