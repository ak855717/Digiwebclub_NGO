import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [isAwardsOpen, setIsAwardsOpen] = useState(false);

    const awardsDropdown = [
        { name: "Upcoming Events", href: "#" },
        { name: "Past Event – Safety 2024", href: "#" },
        { name: "Past Event – Environment 2024", href: "#" },
        { name: "Past Event – Safety 2023", href: "#" },
    ];

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
                        <li className="flex items-center gap-1 text-[#D33D33] cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">
                            <Link to="/ourCSR">Our CSR</Link>
                        </li>

                        {/* Awards & Conference Dropdown */}
                        <li
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setIsAwardsOpen(true)}
                            onMouseLeave={() => setIsAwardsOpen(false)}
                        >
                            <div
                                className="flex items-center gap-1 hover:text-[#D33D33] transition-colors py-1"
                                onClick={() => setIsAwardsOpen(!isAwardsOpen)}
                            >
                                <span>Awards & Conference</span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAwardsOpen ? 'rotate-180 text-[#D33D33]' : ''}`} />
                            </div>

                            {/* Dropdown Menu */}
                            <div className={`absolute left-0 top-full pt-2 w-[240px] z-50 transition-all duration-200 ${isAwardsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                                }`}>
                                <div className="bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden">
                                    {awardsDropdown.map((item, index) => (
                                        <a
                                            key={index}
                                            href={item.href}
                                            className={`block px-5 py-3.5 text-[15px] font-normal text-gray-700 hover:bg-gray-50 hover:text-[#D33D33] transition-colors ${index !== awardsDropdown.length - 1 ? 'border-b border-gray-200' : ''
                                                }`}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </li>

                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Media</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Gallery</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Career</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Contact</li>
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