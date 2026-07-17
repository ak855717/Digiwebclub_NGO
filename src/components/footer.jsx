import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import Logo from "../assets/logo.png";

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our CSR Initiatives', path: '/ourCSR' },
        { name: 'Media & Press', path: '/media' },
        { name: 'Photo Gallery', path: '/gallery' },
        { name: 'Careers & Volunteer', path: '/career' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const awardsAndEvents = [
        { name: 'Upcoming Events & Drives', path: '/upcoming' },
        { name: 'Past Event – Safety 2024', path: '/safety2024' },
        { name: 'Past Event – Environment 2024', path: '/environment' },
        { name: 'Past Event – Safety 2023', path: '/safety2023' },
    ];

    return (
        <footer className="relative bg-[#1a2130] text-white pt-14 font-sans overflow-hidden border-t border-white/10">
            {/* Subtle chevron background pattern */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5l-20-20V4l20 20 20-20V.5l-20 20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Top Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center pb-10 border-b border-white/10 gap-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-2xl">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="EKDKN Logo"
                                className="h-20 w-auto bg-white rounded-lg p-1.5 object-contain shadow-md shrink-0"
                            />
                        </Link>
                        <div>
                            <h3 className="text-xl font-bold tracking-wide text-white">EK KAAM DESH KE NAAM</h3>
                            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                Dedicated to nation-building through road safety advocacy, environmental sustainability, CSR initiatives, and community empowerment across India.
                            </p>
                        </div>
                    </div>

                    {/* Social Media Follow */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <span className="text-sm uppercase tracking-wider font-semibold text-gray-300">Follow Our Journey</span>
                        <div className="flex items-center gap-3">
                            {/* Instagram */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:bg-[#D33D33] hover:border-[#D33D33] transition-all duration-200 group"
                            >
                                <svg className="w-4 h-4 fill-gray-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            {/* X / Twitter */}
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:bg-[#D33D33] hover:border-[#D33D33] transition-all duration-200 group"
                            >
                                <svg className="w-4 h-4 fill-gray-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            {/* Facebook */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:bg-[#D33D33] hover:border-[#D33D33] transition-all duration-200 group"
                            >
                                <svg className="w-4 h-4 fill-gray-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-14">

                    {/* Col 1: Quick Links (4 spans) */}
                    <div className="lg:col-span-4">
                        <h3 className="text-base font-bold mb-6 text-white tracking-wider uppercase border-l-2 border-[#D33D33] pl-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-3.5">
                            {quickLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="flex items-center gap-2 text-gray-300 hover:text-[#D33D33] transition-colors text-sm font-medium group"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#D33D33] transition-colors shrink-0" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 2: Awards & Conferences (4 spans) */}
                    <div className="lg:col-span-4">
                        <h3 className="text-base font-bold mb-6 text-white tracking-wider uppercase border-l-2 border-[#D33D33] pl-3">
                            Awards & Conferences
                        </h3>
                        <ul className="space-y-3.5">
                            {awardsAndEvents.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="flex items-center gap-2 text-gray-300 hover:text-[#D33D33] transition-colors text-sm font-medium group"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#D33D33] transition-colors shrink-0" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 pt-5 border-t border-white/10">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D33D33] hover:text-white transition-colors"
                            >
                                Partner With Us For Next Event
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>

                    {/* Col 3: Contact Info (4 spans) */}
                    <div className="sm:col-span-2 lg:col-span-4">
                        <h3 className="text-base font-bold mb-6 text-white tracking-wider uppercase border-l-2 border-[#D33D33] pl-3">
                            Get In Touch
                        </h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#D33D33] shrink-0 mt-0.5" />
                                <span>
                                    IInd Floor, H-47, Block H, Bali Nagar, Delhi, 110015
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#D33D33] shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:+918826335688" className="hover:text-[#D33D33] transition-colors">+91 8826335688</a>
                                    <a href="tel:+911141538549" className="hover:text-[#D33D33] transition-colors">+91 1141538549</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#D33D33] shrink-0" />
                                <a href="mailto:info@ekdkn.com" className="hover:text-[#D33D33] transition-colors">
                                    info@ekdkn.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-[#D33D33] shrink-0" />
                                <span>Mon - Sat | 9:00 AM - 6:00 PM</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright Section */}
                <div className="py-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <p>
                        Copyright © {new Date().getFullYear()} EK KAAM DESH KE NAAM. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/about" className="hover:text-[#D33D33] transition-colors">Privacy Policy</Link>
                        <Link to="/about" className="hover:text-[#D33D33] transition-colors">Terms of Service</Link>
                        <Link to="/contact" className="hover:text-[#D33D33] transition-colors">Support</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
