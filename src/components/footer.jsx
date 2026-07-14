import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="relative bg-[#1a2130] text-white pt-16 font-sans overflow-hidden">
            {/* Subtle chevron background pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5l-20-20V4l20 20 20-20V.5l-20 20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-white/10 gap-6">
                    <div className="flex items-center gap-3">
                        <img
                            src={Logo}
                            alt="EKDKN Logo"
                            className="h-20 w-auto bg-white rounded p-1 object-contain"
                        />
                    </div>

                    <div className="flex items-center gap-5">
                        <span className="text-[0.95rem] font-bold text-white/90">Follow On Socials</span>
                        <div className="flex items-center gap-3">
                            {/* Instagram (Just linking # for now) */}
                            <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#dc4c3e] hover:border-[#dc4c3e] transition-colors group">
                                <svg className="w-[18px] h-[18px] fill-gray-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            {/* X / Twitter */}
                            <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#dc4c3e] hover:border-[#dc4c3e] transition-colors group">
                                <svg className="w-[16px] h-[16px] fill-gray-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#dc4c3e] hover:border-[#dc4c3e] transition-colors group">
                                <svg className="w-[18px] h-[18px] fill-gray-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">

                    {/* Col 1 */}
                    <div>
                        <h3 className="text-lg font-bold mb-7 text-white tracking-wide">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Initiatives', path: '/ourCSR' },
                                { name: 'Careers & Volunteer', path: '/career' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="flex items-center gap-2.5 text-gray-400 hover:text-[#dc4c3e] transition-colors text-[0.95rem] font-medium">
                                        <span className="w-1 h-1 rounded-full bg-[#dc4c3e]"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2 */}
                    <div>
                        <h3 className="text-lg font-bold mb-7 text-white tracking-wide">Our Initiatives</h3>
                        <ul className="space-y-4">
                            {['DAKSH Literacy Program', 'Delhi Replantation Initiative', 'Specially-Abled Support', 'Healthcare Aid', 'Women Empowerment'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="flex items-center gap-2.5 text-gray-400 hover:text-[#dc4c3e] transition-colors text-[0.95rem] font-medium">
                                        <span className="w-1 h-1 rounded-full bg-[#dc4c3e]"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                        <h3 className="text-lg font-bold mb-7 text-white tracking-wide">Get Involved</h3>
                        <ul className="space-y-4">
                            {['Donate', 'Become a Volunteer', 'Corporate Partnerships', 'Organize a Fundraiser'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="flex items-center gap-2.5 text-gray-400 hover:text-[#dc4c3e] transition-colors text-[0.95rem] font-medium">
                                        <span className="w-1 h-1 rounded-full bg-[#dc4c3e]"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                        <h3 className="text-lg font-bold mb-7 text-white tracking-wide">Newsletter Signup</h3>
                        <p className="text-gray-400 text-[0.95rem] mb-6 leading-relaxed">
                            * Stay updated with our latest campaigns, impact stories, and upcoming events.
                        </p>
                        <form className="relative flex items-center border-b border-gray-600 pb-2.5 group focus-within:border-[#dc4c3e] transition-colors mt-8">
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                className="bg-transparent w-full text-[0.95rem] text-white placeholder-gray-500 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="shrink-0 w-[38px] h-[38px] bg-[#dc4c3e] hover:bg-[#c94134] rounded-sm flex items-center justify-center transition-colors ml-2"
                            >
                                <ArrowUpRight className="w-5 h-5 text-white" />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="py-8 border-t border-white/5 text-center">
                    <p className="text-gray-400 text-sm font-medium">
                       Copyright @2019 EK KAAM DESH KE NAAM. All Rights Reserved
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
