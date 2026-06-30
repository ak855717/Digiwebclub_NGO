import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <>
            <div className=' flex justify-center items-center'>
                <nav className="fixed top-5 z-50 bg-white rounded-[30px] p-4 pl-6 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] mx-auto max-w-[1200px] w-full">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center">
                            <img src={Logo} alt="EKDKN logo" className='h-[40px] w-auto'/>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center gap-6 text-[16px] font-medium text-[#1a202c]">
                        <li className="flex items-center gap-1 text-[#D33D33] cursor-pointer">Home</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">About</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Our Projects</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Media</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Gallery</li>
                        <li className="cursor-pointer hover:text-[#D33D33] transition-colors">Join Us</li>
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