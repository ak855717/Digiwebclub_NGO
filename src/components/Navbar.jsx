import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, PhoneCall, ArrowRight, Mail, Phone } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isAwardsOpen, setIsAwardsOpen] = useState(false);
  const location = useLocation();
  const pathname =
    location.pathname.endsWith("/") && location.pathname.length > 1
      ? location.pathname.slice(0, -1)
      : location.pathname;

  const isActive = (path) => pathname === path;

  const awardsDropdown = [
    { name: "Upcoming Events", href: "/upcoming" },
    { name: "Past Event – Safety 2024", href: "/safety2024" },
    { name: "Past Event – Environment 2024", href: "/environment" },
    { name: "Past Event – Safety 2023", href: "/safety2023" },
  ];

  const isAwardsActive = awardsDropdown.some((item) => pathname === item.href);

  const getLinkClass = (path) =>
    `cursor-pointer transition-colors ${isActive(path) ? "text-[#FFC107]" : "hover:text-[#FFC107]"}`;

  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="fixed inset-x-0 top-0 z-50 h-11 bg-[#10332f] text-white">
          <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-5 text-[14px]">
            <div className="flex items-center gap-8">
              <a
                href="mailto:info@ekdkn.com"
                className="flex items-center gap-2.5 transition-colors hover:text-[#FFC107]"
              >
                <Mail
                  className="h-[18px] w-[18px] text-[#FFC107]"
                  strokeWidth={2.5}
                />
                <span>info@ekdkn.com</span>
              </a>
              <a
                href="tel:+918826335688"
                className="flex items-center gap-2.5 transition-colors hover:text-[#FFC107]"
              >
                <Phone className="h-4 w-4 fill-[#FFC107] text-[#FFC107]" />
                <span>+91 8826335688</span>
              </a>
            </div>
            <div className="flex items-center gap-5 text-[#c6d0cf]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                >
                  <path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                >
                  <path d="M22 5.9a8 8 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.7 1 4.2 4.2 0 0 0-7.2 3.8 11.9 11.9 0 0 1-8.6-4.4 4.2 4.2 0 0 0 1.3 5.6 4.1 4.1 0 0 1-1.9-.5v.1a4.2 4.2 0 0 0 3.4 4.1 4.2 4.2 0 0 1-1.9.1 4.2 4.2 0 0 0 3.9 2.9A8.4 8.4 0 0 1 2.5 19a11.9 11.9 0 0 0 18.3-10 8.5 8.5 0 0 0 2.1-2.1z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-none stroke-current"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r=".7"
                    className="fill-current stroke-none"
                  />
                </svg>
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Vimeo"
                className="font-bold italic hover:text-white"
              >
                v
              </a>
            </div>
          </div>
        </div>
        <nav className="fixed inset-x-0 top-11 z-50 pl-3 bg-white flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] mx-auto h-22 max-w-[1500px] w-full">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center justify-center">
              <img src={Logo} alt="EKDKN logo" className="h-[70px] w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 text-[17px] font-medium text-[#1a202c]">
            <li className={getLinkClass("/")}>
              <Link to="/">Home</Link>
            </li>
            <li className={getLinkClass("/about")}>
              <Link to="/about">About</Link>
            </li>
            <li className={getLinkClass("/ourCSR")}>
              <Link to="/ourCSR">Our CSR</Link>
            </li>

            {/* Awards & Conference Dropdown */}
            <li
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsAwardsOpen(true)}
              onMouseLeave={() => setIsAwardsOpen(false)}
            >
              <div
                className={`flex items-center gap-1 transition-colors py-1 ${isAwardsActive || isAwardsOpen ? "text-[#FFC107]" : "hover:text-[#FFC107]"}`}
                onClick={() => setIsAwardsOpen(!isAwardsOpen)}
              >
                <span>Awards & Conference</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isAwardsOpen || isAwardsActive ? "text-[#FFC107]" : ""} ${isAwardsOpen ? "rotate-180" : ""}`}
                />
              </div>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 top-full pt-2 w-[240px] z-50 transition-all duration-200 ${
                  isAwardsOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1"
                }`}
              >
                <div className="bg-white rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden">
                  {awardsDropdown.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={() => setIsAwardsOpen(false)}
                      className={`block px-5 py-3.5 text-[15px] transition-colors ${
                        isActive(item.href)
                          ? "text-[#FFC107] font-medium bg-gray-50"
                          : "font-normal text-gray-700 hover:bg-gray-50 hover:text-[#FFC107]"
                      } ${index !== awardsDropdown.length - 1 ? "border-b border-gray-200" : ""}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className={getLinkClass("/media")}>
              <Link to="/media">Media</Link>
            </li>
            <li className={getLinkClass("/gallery")}>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className={getLinkClass("/blog")}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={getLinkClass("/career")}>
              <Link to="/career">Career</Link>
            </li>
            <li className={getLinkClass("/contact")}>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Contact and action links */}
          <div className="hidden md:flex h-full shrink-0 items-center">
            <a
              href="tel:+017937938"
              className="flex h-full items-center gap-3 px-5 text-[#667085] transition-colors hover:text-[#1a202c]"
            >
              <PhoneCall
                className="h-8 w-8 shrink-0 text-[#1a202c]"
                strokeWidth={2.5}
              />
              <span className="whitespace-nowrap text-[14px] leading-tight">
                <span className="mb-1 block text-[12px] uppercase">
                  Call Us Now
                </span>
                (+01)-793-7938
              </span>
            </a>

            <Link
              to="/contact"
              className="flex h-full min-w-[245px] items-center justify-center gap-5 bg-[#FFC107] px-8 font-semibold text-black transition-colors hover:bg-[#f2b600]"
            >
              Get A Quote
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black">
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
