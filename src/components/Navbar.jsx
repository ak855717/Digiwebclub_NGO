import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [isAwardsOpen, setIsAwardsOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname.endsWith('/') && location.pathname.length > 1
        ? location.pathname.slice(0, -1)
        : location.pathname;

    const isActive = (path) => pathname === path;

    const awardsDropdown = [
        { name: "Upcoming Events", href: "/upcoming" },
        { name: "Past Event – Safety 2024", href: "/safety2024" },
        { name: "Past Event – Environment 2024", href: "/environment" },
        { name: "Past Event – Safety 2023", href: "/safety2023" },
    ];

    const isAwardsActive = awardsDropdown.some(item => pathname === item.href);

    const getLinkClass = (path) =>
        `cursor-pointer transition-colors ${isActive(path) ? 'text-[#D33D33]' : 'hover:text-[#D33D33]'}`;

    return (
        <>
            <div className=' flex justify-center items-center'>
                <nav className="fixed top-5 z-50 bg-white rounded-[30px] p-4 pl-6 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] mx-auto max-w-[1200px] w-full">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center justify-center">
                            <img src={Logo} alt="EKDKN logo" className='h-[40px] w-auto' />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center gap-6 text-[16px] font-medium text-[#1a202c]">
                        <li className={getLinkClass('/')}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className={getLinkClass('/about')}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={getLinkClass('/ourCSR')}>
                            <Link to="/ourCSR">Our CSR</Link>
                        </li>

                        {/* Awards & Conference Dropdown */}
                        <li
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setIsAwardsOpen(true)}
                            onMouseLeave={() => setIsAwardsOpen(false)}
                        >
                            <div
                                className={`flex items-center gap-1 transition-colors py-1 ${isAwardsActive || isAwardsOpen ? 'text-[#D33D33]' : 'hover:text-[#D33D33]'}`}
                                onClick={() => setIsAwardsOpen(!isAwardsOpen)}
                            >
                                <span>Awards & Conference</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${(isAwardsOpen || isAwardsActive) ? 'text-[#D33D33]' : ''} ${isAwardsOpen ? 'rotate-180' : ''}`} />
                            </div>

                            {/* Dropdown Menu */}
                            <div className={`absolute left-0 top-full pt-2 w-[240px] z-50 transition-all duration-200 ${isAwardsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                                }`}>
                                <div className="bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden">
                                    {awardsDropdown.map((item, index) => (
                                        <Link
                                            key={index}
                                            to={item.href}
                                            onClick={() => setIsAwardsOpen(false)}
                                            className={`block px-5 py-3.5 text-[15px] transition-colors ${
                                                isActive(item.href)
                                                    ? 'text-[#D33D33] font-medium bg-gray-50'
                                                    : 'font-normal text-gray-700 hover:bg-gray-50 hover:text-[#D33D33]'
                                            } ${index !== awardsDropdown.length - 1 ? 'border-b border-gray-200' : ''}`}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </li>

                        <li className={getLinkClass('/media')}>
                            <Link to="/media">Media</Link>
                        </li>
                        <li className={getLinkClass('/gallery')}>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className={getLinkClass('/career')}>
                            <Link to="/career">Career</Link>
                        </li>
                        <li className={getLinkClass('/contact')}>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* Action Button */}
                    <div className="hidden md:flex">
                        <button className="bg-[#D33D33] text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 font-medium hover:bg-[#b9352c] transition-colors">
                            Donation
                            <div className="bg-white rounded-full p-2 text-[#D33D33] flex items-center justify-center">
                                <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={2.5} />
                            </div>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;