import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import bg from '../assets/Tree/rec/Rectangle87.png';
import { AuthContext } from "./AuthProvider";
import Swal from 'sweetalert2';

const PlantCardDetails = () => {
    const { id } = useParams();
    const [plant, setPlant] = useState(null);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/plants/${id}`)
            .then(res => res.json())
            .then(data => setPlant(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (!plant) {
        return <span className="loading loading-bars text-green loading-lg"></span>;
    }

    const images = [
        {
            original: plant.image,
            thumbnail: plant.image,
        },
        {
            original: plant.image,
            thumbnail: plant.image,
        },
        {
            original: plant.image,
            thumbnail: plant.image,
        },
    ];

    const handleAddToCart = () => {
        if (!user) {
            navigate('/login');
        } else {
            const cartItem = {
                userId: user.uid,
                plantId: plant._id, // Assuming plant object has an _id property
                name: plant.name,
                price: plant.price,
                image: plant.image,
                email: user.email
                
            };

            fetch('http://localhost:5000/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Added to Cart!',
                            text: 'The item has been added to your cart.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                    } else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'There was an issue adding the item to your cart.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    }
                })
                .catch(error => {
                    console.error('Error adding to cart:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'There was an issue adding the item to your cart.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
        }
    };

    return (
        <div>
            <div className="container mx-auto p-6 my-10 rounded-lg ">
                <header className="mb-6">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="w-full lg:w-1/2">
                            <ImageGallery items={images} />
                        </div>
                        <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-6">
                            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                                {plant.name}
                            </h1>
                            <p className="text-3xl text-gray-800 font-semibold mb-2">
                                ${plant.price} <span className="text-red-500 line-through">${plant.original_price}</span>
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                                {plant.short_description}
                            </p>
                            <div className="flex items-center mb-4">
                                <span className="mr-4">Quantity</span>
                                <button className="px-2 py-1 bg-gray-200 rounded-l">
                                    -
                                </button>
                                {/* <span className="px-4 py-1 bg-gray-100">{quantity}</span> */}
                                <button className="px-2 py-1 bg-gray-200 rounded-r">
                                    +
                                </button>
                            </div>
                            <div className="flex items-center mb-6">
                                <span className="mr-4">Include Planter</span>
                                <select className="px-4 py-2 border rounded">
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="w-full px-5 py-3 text-lg font-medium tracking-wider text-white uppercase transition-transform duration-300 transform bg-green-600 rounded-lg hover:scale-105 focus:outline-none focus:bg-green-500 shadow-lg"
                            >
                                Add to Cart
                            </button>
                            <div className="mt-6">
                                <h3 className="text-xl font-semibold">Delivery</h3>
                                <p className="mb-2">Enter your Pincode to check delivery time.</p>
                                <div className="flex items-center mb-4">
                                    <input
                                        type="text"
                                        className="px-4 py-2 border rounded-l"
                                        placeholder="Enter Pincode"
                                    />
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-r">
                                        CHECK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <div className="my-10 md:mb-16">
                <div
                    className="hero"
                    style={{
                        backgroundImage: `url(${bg})`,
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className="m-10 bg-gray-400 bg-opacity-70 rounded-lg text-white">
                            <div className="p-5">
                                <h2 className="text-2xl font-semibold">Weekly Watering</h2>
                                <p>
                                    Calatheas enjoy weekly waterings, allowing the top 2’ of soil to dry out partially. In winter, we recommend watering less frequently to prevent overwatering and root rot. This plant is not very drought tolerant, and extended periods of dryness will cause leaf edges to brown.
                                </p>
                            </div>
                            <div className="px-5">
                                <h2 className="text-2xl font-semibold">Light Requirements</h2>
                                <p>
                                    Calatheas thrive in medium, indirect sunlight but tolerate lower light levels too. Bright direct sunlight can cause the stunning colours on their leaves to fade, with prolonged exposure likely to burn and scorch their leaves.
                                </p>
                            </div>
                            <div className="p-5">
                                <h2 className="text-2xl font-semibold">Humidity</h2>
                                <p>
                                    Your Calathea will also appreciate being placed in a humid environment, which you can create by misting it frequently, placing it close to other plants or on a pebble tray partly filled with water. Calatheas thrive in steamy bathrooms and kitchens.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantCardDetails;
