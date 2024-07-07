import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs"; 
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    // const [loading, setLoading] = useState([]);
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                if (user) {
                    const response = await fetch(`https://plant-server-6tw1.onrender.com/cart/${user.uid}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch cart items');
                    }
                    const data = await response.json();
                    setCartItems(data);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [user]);
    if (loading) return <progress className="progress progress-accent w-56" value="70" max="100"></progress>

    const handleDeleteItem = async (itemId) => {
        try {
            const response = await fetch(`https://plant-server-6tw1.onrender.com/cart/${itemId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
            
            setCartItems(prevItems => prevItems.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    if (!user) {
        return <p className="text-center text-lg mt-8">Please log in to view your cart items.</p>;
    }

    return (
        <div className="min-h-[calc(100vh-290px)] mt-3 px-4">
            {cartItems.length > 0 ? (
                <div className="overflow-x-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center">Cart Items</h1>
                    <table className="min-w-full divide-y divide-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {cartItems.map(item => (
                                <tr key={item._id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">${item.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img className="h-16 w-16 object-cover rounded-lg" src={item.image} alt={item.name} />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => handleDeleteItem(item._id)}
                                            className="text-red-500 hover:text-red-700 focus:outline-none"
                                        >
                                            <BsTrash className="w-5 h-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center mt-8">Your cart is empty.</p>
                    <div className="flex items-center justify-center mt-3">
                        <Link to='/' className="btn bg-[#23BE0A] text-white">Add To Cart</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
