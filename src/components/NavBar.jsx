import { useContext, useState } from 'react';
import logo from '../assets/Tree/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [searchTerm, setSearchTerm] = useState(''); // Define searchTerm state here
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error.message));
    };

    // const handleSearchChange = (event) => {
    //     setSearchTerm(event.target.value);
    //     // Implement search logic here, e.g., filtering items or navigating to search results page
    // };

    return (
        <div className="">
            <nav className="bg-white shadow dark:bg-gray-800">
                <div className="container px-6 p-4 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <img className="w-auto h-6 sm:h-7" src={logo} alt="Logo" />
                            </Link>
                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    <svg
                                        className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                    <svg
                                        className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div
                            className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
                                isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                        >
                            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                                <Link
                                    to="/"
                                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/category"
                                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                                >
                                    Plants
                                </Link>
                                <Link
                                    to="/hot"
                                    className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                                >
                                    Hot Sale
                                </Link>
                                {user && (
                                    <Link
                                        to="/cart"
                                        className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                                    >
                                        My Cart
                                    </Link>
                                )}
                                
                                <div className="relative mt-4 lg:mt-0 lg:mx-4">
                                    {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none">
                                            <path
                                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>
                                        </svg>
                                    </span> */}
                                    {/* <input
                                        type="text"
                                        className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                                        placeholder="Search"
                                        value={searchTerm} // Ensure searchTerm is used correctly here
                                        onChange={handleSearchChange} // Handle onChange event
                                    /> */}
                                </div>
                                <div className="mt-3 block md:hidden">
                                    {user ? (
                                        <>
                                            <img src={user?.photoURL} alt="User Avatar" className="w-8 h-8 rounded-full mx-2" />
                                            <Link onClick={handleLogOut} to="/" className="btn">
                                                Sign Out
                                            </Link>
                                        </>
                                    ) : (
                                        <Link to="/login" className="btn">
                                            Sign In
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <div className="hidden md:flex justify-center items-center gap-2 mt-6 lg:flex lg:mt-0 lg:-mx-2">
                                {user ? (
                                    <>
                                        <img src={user?.photoURL} alt="User Avatar" className="w-10 h-10 rounded-full mx-2 border-2" />
                                        <Link onClick={handleLogOut} to="/" className="btn bg-[#23BE0A] text-white">
                                            Sign Out
                                        </Link>
                                    </>
                                ) : (
                                    <Link to="/login" className="btn bg-[#23BE0A] text-white">
                                        Sign In
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
