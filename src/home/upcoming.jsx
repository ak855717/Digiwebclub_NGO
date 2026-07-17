import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SliderLib from 'react-slick';
const Slider = SliderLib.default || SliderLib;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ArrowUpRight, Landmark, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../assets/home/image (1).jpeg';
import image2 from '../assets/home/image (2).jpeg';
import image3 from '../assets/home/image (3).jpg';
import image4 from '../assets/home/image (4).jpeg';
import image5 from '../assets/home/image (5).jpg';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Upcoming = () => {
    const sliderRef = useRef(null);
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from('.upcoming-header-item', {
            opacity: 0,
            y: 40,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.upcoming-header-wrap',
                start: 'top 85%'
            }
        });

        gsap.from('.upcoming-slider-wrap', {
            opacity: 0,
            y: 50,
            duration: 1.1,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.upcoming-slider-wrap',
                start: 'top 85%'
            }
        });

        gsap.from('.upcoming-footer-wrap', {
            opacity: 0,
            y: 35,
            duration: 0.9,
            scrollTrigger: {
                trigger: '.upcoming-footer-wrap',
                start: 'top 90%'
            }
        });
    }, { scope: sectionRef });

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const programs = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=800",
            category: "Disaster Relief",
            title: "Hope for All Mega Fundraising Drive for Underprivileged Families",
        },
        {
            id: 2,
            image: image1,
            category: "Hunger Relief",
            title: "Monthly Food Distribution & Nutrition Support Program",
        },
        {
            id: 3,
            image: image2,
            category: "Healthcare",
            title: "Free Community Health Camp & Medical Awareness Drive",
        },
        {
            id: 4,
            image: image3,
            category: "Education",
            title: "Providing School Supplies & Scholarships for Children",
        },
        {
            id: 5,
            image: image4,
            category: "Women Empowerment",
            title: "Vocational Training and Skill Development Workshops",
        },
        {
            id: 6,
            image: image5,
            category: "Environment",
            title: "Community Tree Plantation and Cleanliness Drive",
        }
    ];

    return (
        <section ref={sectionRef} className="py-24 bg-[#f8f9fa] font-sans overflow-hidden">
            <style>
                {`
          .slick-slide > div {
            margin: 0 10px;
          }
          .slick-list {
            margin: 0 -10px;
          }
        `}
            </style>
            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Top Header Section */}
                <div className="upcoming-header-wrap flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="upcoming-header-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-6 shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#dc4c3e]"></div>
                            <span className="text-sm font-semibold text-gray-700">Upcoming Events</span>
                        </div>
                        <h2 className="upcoming-header-item text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight pr-4">
                            Join us in creating change that matters
                        </h2>
                    </div>
                    <div className="max-w-md flex flex-col items-start lg:items-start gap-6 lg:ml-auto">
                        <p className="upcoming-header-item text-gray-500 text-left">
                            Be part of our events and community outreach programs. Each event is an opportunity to connect, contribute, and make a meaningful difference.
                        </p>
                        <div className="upcoming-header-item flex flex-wrap items-center justify-between w-full gap-4">
                            <Link to="/upcoming" className="inline-flex items-center gap-3 bg-[#dc4c3e] hover:bg-[#c94134] text-white pl-6 pr-2 py-2 rounded-xl font-medium transition-colors">
                                View Upcoming Events
                                <div className="bg-white text-[#dc4c3e] p-1.5 rounded-lg">
                                    <ArrowUpRight className="w-4 h-4" strokeWidth={3} />
                                </div>
                            </Link>
                            <div className="flex items-center gap-2">
                                <button onClick={scrollLeft} className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-slate-700 hover:bg-[#dc4c3e] hover:text-white hover:border-[#dc4c3e] transition-all">
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button onClick={scrollRight} className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center text-slate-700 hover:bg-[#dc4c3e] hover:text-white hover:border-[#dc4c3e] transition-all">
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel/Grid Section */}
                <div className="upcoming-slider-wrap pb-8 mt-4">
                    <Slider ref={sliderRef} {...settings}>
                        {programs.map((program) => (
                            <div key={program.id}>
                                <div className="bg-white rounded-4xl p-4 flex flex-col shadow-sm border border-gray-100 h-full mx-2">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-[320px] object-cover rounded-3xl mb-6"
                                    />
                                    <div className="px-2 grow flex flex-col h-full">
                                        <div className="flex items-center gap-2 text-gray-500 mb-4">
                                            <Landmark className="w-4 h-4" />
                                            <span className="text-sm font-medium">{program.category}</span>
                                        </div>
                                        <h3 className="text-[1.35rem] font-bold text-slate-900 mb-8 leading-snug line-clamp-3 pr-2">
                                            {program.title}
                                        </h3>

                                        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                                            <button className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-[#dc4c3e] transition-colors text-sm">
                                                Read More
                                                <ArrowUpRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Bottom Section */}
                <div className="upcoming-footer-wrap flex flex-col items-center mt-8 gap-10">
                    {/* Pagination Dots */}
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        <div className="w-8 h-2 rounded-full bg-[#dc4c3e]"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                    </div>

                    <div className="flex flex-col items-center gap-4 mt-2">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 bg-[#dc4c3e] text-white text-[11px] font-bold rounded-full uppercase tracking-wide">Join Us</span>
                            <span className="text-slate-700 font-medium text-sm md:text-base">Participate in Our Upcoming Events and Be Part of Meaningful Change.</span>
                        </div>

                        <div className="flex items-center gap-4 text-sm font-medium text-slate-500 mt-2">
                            <span>Supported By <strong className="text-slate-900 font-bold">58,900+</strong> Volunteers</span>
                            <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-[#dc4c3e] text-[#dc4c3e]" />
                                <Star className="w-4 h-4 fill-[#dc4c3e] text-[#dc4c3e]" />
                                <Star className="w-4 h-4 fill-[#dc4c3e] text-[#dc4c3e]" />
                                <Star className="w-4 h-4 fill-[#dc4c3e] text-[#dc4c3e]" />
                                <Star className="w-4 h-4 fill-[#dc4c3e] text-[#dc4c3e]" />
                                <span className="ml-1 text-slate-900 font-bold">4.9/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Upcoming;