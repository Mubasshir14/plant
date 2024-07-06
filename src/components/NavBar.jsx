import { useState } from 'react';
import logo from '../assets/Tree/logo.png'
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='m'>
            <nav className="bg-white shadow dark:bg-gray-800">
                <div className="container px-6 p-4 mx-auto">
                    <div className="lg:flex lg:items-center">
                        <div className="flex items-center justify-between">
                            <a href="#">
                                <img className="w-auto h-6 sm:h-7" src={logo} alt="Logo" />
                            </a>

                            <div className="flex lg:hidden">
                                <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                    <svg className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                    <svg className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'}`}>
                            <div className="flex flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                                <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">features</a>
                                <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">downloads</a>
                                <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">docs</a>
                                <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">support</a>
                                <a href="#" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">blog</a>

                                <div className="relative mt-4 lg:mt-0 lg:mx-4">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none">
                                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>

                                    <input type="text" className="w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-800 dark:text-gray-300 focus:outline-none focus:border-gray-600" placeholder="Search" />
                                </div>
                            </div>

                            <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49613 15.7107 9.44811 15.672 9.398 15.635C9.34533 15.5921 9.29824 15.5418 9.257 15.485C9.13027 15.3441 9.06755 15.1583 9.08835 14.9715C9.10914 14.7848 9.21108 14.6207 9.361 14.529C9.51091 14.4373 9.69359 14.4277 9.85134 14.5023C10.0091 14.577 10.1268 14.7267 10.171 14.899C10.1861 14.968 10.231 15.0306 10.296 15.077C10.7187 15.3765 11.2098 15.5746 11.728 15.658C11.967 15.694 12.208 15.694 12.447 15.658C12.971 15.571 13.466 15.373 13.891 15.077C13.9516 15.0327 13.999 14.9713 14.015 14.899C14.058 14.731 14.172 14.581 14.327 14.506C14.483 14.431 14.663 14.445 14.805 14.543C14.9467 14.6428 15.0232 14.8118 15.009 14.988C14.9948 15.1642 14.893 15.316 14.738 15.392C14.6919 15.4133 14.6528 15.4457 14.623 15.485C14.582 15.539 14.531 15.591 14.472 15.64C13.8037 16.1365 12.9974 16.4077 12.18 16.42V16.524ZM10.5 14.423C10.084 14.423 9.75 14.088 9.75 13.673C9.75 13.258 10.084 12.923 10.5 12.923C10.916 12.923 11.25 13.258 11.25 13.673C11.25 13.8581 11.1844 14.0355 11.0655 14.1714C10.9466 14.3074 10.7822 14.3923 10.6 14.41C10.566 14.4184 10.531 14.423 10.496 14.423H10.5ZM13.5 14.423C13.084 14.423 12.75 14.088 12.75 13.673C12.75 13.258 13.084 12.923 13.5 12.923C13.916 12.923 14.25 13.258 14.25 13.673C14.25 13.8581 14.1844 14.0355 14.0655 14.1714C13.9466 14.3074 13.7822 14.3923 13.6 14.41C13.566 14.4184 13.531 14.423 13.496 14.423H13.5Z" />
                                    </svg>
                                </a>
                                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Facebook">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 22V12H17.438L18 7.5H13.5V5.5C13.5 4.70435 14.037 3.5 15 3.5H18V0H15C11.813 0 10.5 2.27435 10.5 5.5V7.5H7V12H10.5V22H13.5Z" />
                                    </svg>
                                </a>
                                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Twitter">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.162 5.656C21.42 5.98 20.63 6.203 19.805 6.313C20.652 5.816 21.301 5.039 21.601 4.125C20.81 4.579 19.947 4.892 19.045 5.054C18.296 4.258 17.207 3.75 16.014 3.75C13.753 3.75 11.92 5.582 11.92 7.843C11.92 8.164 11.952 8.475 12.013 8.773C8.902 8.602 6.152 7.128 4.409 4.927C4.058 5.493 3.856 6.153 3.856 6.856C3.856 8.226 4.565 9.429 5.678 10.123C4.994 10.108 4.34 9.923 3.766 9.608V9.652C3.766 11.603 5.149 13.242 7.012 13.593C6.678 13.687 6.316 13.74 5.936 13.74C5.675 13.74 5.421 13.713 5.172 13.662C5.688 15.267 7.166 16.439 8.93 16.471C7.569 17.546 5.851 18.173 3.985 18.173C3.655 18.173 3.331 18.153 3.012 18.113C4.793 19.258 6.895 19.916 9.164 19.916C16.009 19.916 19.804 13.804 19.804 8.331C19.804 8.146 19.8 7.961 19.791 7.778C20.585 7.23 21.3 6.528 21.907 5.705C21.107 6.116 20.249 6.399 19.353 6.539C20.268 5.942 20.987 5.086 21.436 4.085L22.162 5.656Z" />
                                    </svg>
                                </a>
                                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Github">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 16.627 5.132 20.432 9.333 21.742C9.831 21.828 10.015 21.537 10.015 21.292C10.015 21.074 10.008 20.603 10.003 19.969C7.326 20.592 6.75 18.708 6.75 18.708C6.302 17.547 5.65 17.237 5.65 17.237C4.758 16.667 5.715 16.68 5.715 16.68C6.703 16.748 7.226 17.69 7.226 17.69C8.1 19.276 9.56 18.842 10.13 18.594C10.214 17.943 10.482 17.497 10.781 17.248C8.837 17.01 6.796 16.244 6.796 13.449C6.796 12.603 7.123 11.89 7.643 11.348C7.55 11.094 7.266 10.226 7.728 9.005C7.728 9.005 8.425 8.751 10 9.67C10.688 9.486 11.438 9.397 12.188 9.397C12.938 9.397 13.688 9.486 14.376 9.67C15.95 8.751 16.647 9.005 16.647 9.005C17.109 10.226 16.825 11.094 16.732 11.348C17.252 11.89 17.579 12.603 17.579 13.449C17.579 16.257 15.533 17.006 13.581 17.241C13.977 17.579 14.326 18.202 14.326 19.089C14.326 20.31 14.314 21.042 14.314 21.292C14.314 21.537 14.497 21.831 14.998 21.742C19.193 20.432 22.321 16.627 22.321 12C22.321 6.477 17.523 2 12 2Z" />
                                    </svg>
                                </a>
                                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="LinkedIn">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.94 21.31H3.56V8.98H6.94V21.31ZM5.25 7.56C4.35 7.56 3.63 6.83 3.63 5.93C3.63 5.03 4.35 4.3 5.25 4.3C6.14 4.3 6.87 5.03 6.87 5.93C6.87 6.83 6.15 7.56 5.25 7.56ZM21.31 21.31H17.93V15.28C17.93 14.21 17.92 12.82 16.43 12.82C14.93 12.82 14.71 13.97 14.71 15.19V21.31H11.34V8.98H14.57V10.3H14.62C15.03 9.55 16.06 8.75 17.43 8.75C20.39 8.75 21.31 10.64 21.31 13.25V21.31Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;

