import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTabCard from './CategoryTabCard';

const CategoryTab = () => {
    const [plants, setPlants] = useState([]);
    const [indoorPlants, setIndoorPlants] = useState([]);
    const [airPurifyingPlants, setAirPurifyingPlants] = useState([]);
    const [floweringPlants, setFloweringPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/plants')
            .then(res => res.json())
            .then(data => {
                setPlants(data);
                const indoor = data.filter(plant => plant.category === 'INDOOR PLANTS');
                setIndoorPlants(indoor);
                const air = data.filter(plant => plant.category === 'AIR PURIFYING PLANTS');
                setAirPurifyingPlants(air);
                const flower = data.filter(plant => plant.category === 'FLOWERING PLANTS');
                setFloweringPlants(flower);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching plants:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <progress className="progress progress-accent w-56" value="70" max="100"></progress>;
    }
    // if (loading) return <progress className="progress progress-accent w-56" value="70" max="100"></progress>
    return (
        <div className='my-10'>
            <Tabs>
                <div className='flex items-center justify-center '>
                    <TabList classID='bg-[#E7EDE7]'>
                        <Tab>INDOOR PLANTS</Tab>
                        <Tab>AIR PURIFYING PLANTS</Tab>
                        <Tab>FLOWERING PLANTS</Tab>
                    </TabList>
                </div>

                <TabPanel >
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                            {indoorPlants.map(plant => (
                                <CategoryTabCard key={plant._id} plant={plant} />
                            ))}
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                        {airPurifyingPlants.map(plant => (
                            <CategoryTabCard key={plant._id} plant={plant} />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
                        {floweringPlants.map(plant => (
                            <CategoryTabCard key={plant._id} plant={plant} />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;
