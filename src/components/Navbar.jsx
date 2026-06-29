import { ChevronDown, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
    return (
        <>
            <div className=' flex justify-center items-center'>
                <nav className="fixed top-5 z-50 bg-white rounded-[30px] p-4 pl-6 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] mx-auto max-w-[1200px] w-full">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        {/* Logo Icon */}
                        <div className="w-10 h-10 bg-[#D33D33] rounded-full flex items-center justify-center text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="7" r="3" />
                                <path d="M12 11.5c-2.5 0-4.5 2-4.5 4.5 0 2.5 4.5 6 4.5 6s4.5-3.5 4.5-6c0-2.5-2-4.5-4.5-4.5Z" />
                            </svg>
                        </div>
                        {/* Logo Text */}
                        <div className="text-3xl font-bold text-[#1a202c]">
                            Giveon<span className="text-[#D33D33]">.</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center gap-8 text-[18px] font-medium text-[#1a202c]">
                        <li className="flex items-center gap-1 text-[#D33D33] cursor-pointer">
                            Home <ChevronDown className="w-4 h-4" />
                        </li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">About Us</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Services</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Blog</li>
                        <li className="flex items-center gap-1 cursor-pointer hover:text-[#D33D33] transition-colors">
                            Pages <ChevronDown className="w-4 h-4 text-gray-400" />
                        </li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Contact Us</li>
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