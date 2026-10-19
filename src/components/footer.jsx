import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import Logo from "../assets/logo.png";

const footerLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Causes', path: '/ourCSR' },
    { name: 'Our Teams', path: '/career' },
    { name: 'Our Blog', path: '/blog' },
    { name: 'FAQ', path: '/contact' },
    { name: 'Get A Quote', path: '/contact' },
];

const Footer = () => {
    const handleSubscribe = (event) => {
        event.preventDefault();
        const email = new FormData(event.currentTarget).get('email');
        const subject = encodeURIComponent('Newsletter subscription request');
        const body = encodeURIComponent(`Please subscribe ${email} to the EKDKN newsletter.`);
        window.location.href = `mailto:info@ekdkn.com?subject=${subject}&body=${body}`;
    };

    return (
        <footer className="relative overflow-hidden bg-[#061b17] text-white">
            <div className="pointer-events-none absolute -right-16 top-16 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
                <div className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between md:py-16">
                    <h2 className="max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                        Children Need Your Help
                        <br />
                        Start <span className="text-[#ffbf00]">Donating</span> Today
                    </h2>
                    <a
                        href="mailto:info@ekdkn.com"
                        className="inline-flex w-fit items-center gap-3 rounded-full bg-white/[0.06] py-2 pl-2 pr-6 text-sm font-semibold transition-colors hover:bg-white/10"
                    >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#ffbf00]">
                            <Mail className="h-5 w-5" />
                        </span>
                        <span>
                            For Any Inquiry <span className="text-[#ffbf00]">info@ekdkn.com</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-[#ffbf00]" />
                    </a>
                </div>

                <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
                    <div className="rounded-lg bg-white/[0.045] p-7 sm:col-span-2 lg:col-span-6">
                        <h3 className="text-2xl font-bold">Subscribe Newsletter</h3>
                        <p className="mt-2 text-sm text-slate-400">
                            We understand that every challenge is an opportunity.
                        </p>
                        <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <label className="flex min-w-0 flex-1 items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3.5">
                                <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                                <span className="sr-only">Email address</span>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Enter Email"
                                    className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-400"
                                />
                            </label>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ffbf00] px-5 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-300"
                            >
                                Subscribe
                                <Send className="h-4 w-4" />
                            </button>
                        </form>
                        <label className="mt-6 flex cursor-pointer items-center gap-2.5 text-xs leading-relaxed text-slate-400">
                            <input type="checkbox" required className="h-4 w-4 accent-[#ffbf00]" />
                            <span>
                                By subscribing, you accept our{' '}
                                <Link to="/about" className="font-semibold text-white underline underline-offset-2 hover:text-[#ffbf00]">
                                    Privacy Policy
                                </Link>
                            </span>
                        </label>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="mb-5 text-lg font-semibold">Services</h3>
                        <ul className="space-y-3.5">
                            {footerLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-sm text-slate-400 transition-colors hover:text-[#ffbf00]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <h3 className="mb-4 text-lg font-semibold">Locations</h3>
                        <div className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ffbf00]" />
                            <span>IInd Floor, H-47, Block H, Bali Nagar, Delhi, 110015</span>
                        </div>

                        <h3 className="mb-3 mt-6 text-lg font-semibold">Email</h3>
                        <a href="mailto:info@ekdkn.com" className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-[#ffbf00]">
                            <Mail className="h-4 w-4 text-[#ffbf00]" />
                            info@ekdkn.com
                        </a>

                        <h3 className="mb-3 mt-6 text-lg font-semibold">Phone</h3>
                        <div className="flex flex-col gap-2">
                            <a href="tel:+918826335688" className="flex items-center gap-2.5 text-sm text-[#ffbf00] transition-colors hover:text-white">
                                <Phone className="h-4 w-4" />
                                +91 8826335688
                            </a>
                            <a href="tel:+911141538549" className="flex items-center gap-2.5 text-sm text-[#ffbf00] transition-colors hover:text-white">
                                <Phone className="h-4 w-4" />
                                +91 1141538549
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-5 py-6 text-xs text-slate-300 sm:flex-row">
                    <Link to="/" aria-label="EKDKN home" className="flex items-center gap-2">
                        <img src={Logo} alt="" className="h-9 w-9 rounded-full object-contain" />
                        <span className="text-lg font-bold text-white">EKDKN</span>
                    </Link>
                    <p className="text-center">
                        Copyright © {new Date().getFullYear()} EK KAAM DESH KE NAAM. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link to="/about" className="transition-colors hover:text-[#ffbf00]">Terms &amp; Conditions</Link>
                        <Link to="/about" className="transition-colors hover:text-[#ffbf00]">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
