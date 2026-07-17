
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from "../assets/about/Service-1-removebg-preview.png"
import img2 from "../assets/about/Service-2-removebg-preview.png"
import img3 from "../assets/about/Service-3-removebg-preview.png"
import img4 from "../assets/about/Service-4-removebg-preview.png"
import img5 from "../assets/about/Service-5-removebg-preview.png"
import img6 from "../assets/about/Service-6-removebg-preview.png"
import img7 from "../assets/about/Service-12-removebg-preview.png"

gsap.registerPlugin(ScrollTrigger);

const objective = () => {
    const sectionRef = useRef(null);

    const services = [
        {
            label: "Web Development",
            icon: img1,
            desc: "To Promote the Intellectuals and Entrepreneurs of the Country for their contribution towards the society and to promote trade and commerce of the country.",
        },
        {
            label: "Mobile Apps",
            icon: img2,
            desc: "To bring the people together from all walks of life and from different geographical areas to hold meetings for promoting understanding and goodwill amongst themselves.",
        },
        {
            label: "UI/UX Design",
            icon: img3,
            desc: "To organize Meetings, Seminars, Workshops, get-together programs Conferences, Symposia etc. in respect of Indian Economy.Industrialization, Entrepreneurship, Business Service and such allied subjects as also public awareness on social issues.",
        },
        {
            label: "AI Automation",
            icon: img4,
            desc: "To arrange visits different delegations to friendly countries to meet people in all fields and vocations for the progress of nation. The Society also promotes,",
        },
        {
            label: "Digital Marketing",
            icon: img5,
            desc: "Society is associated with the publication of leading Souvenir namely EKDKN.",
        },
        {
            label: "Branding & Print",
            icon: img6,
            desc: "To promote literacy, cultural and other social activities by awareness programs, employment to weaker section ladies, scholarship to school students, women self defence etc.",
        },
        {
            label: "E-Commerce Solutions",
            icon: img6,
            desc: "To recognize and honor the individuals and organizations / Associations for their outstanding contribution in the field of social development.",
        },
        {
            label: "Cloud Services",
            icon: img7,
            desc: "To receive financial and non-financial assistance from Govt. and Non-Govt. organizations, international agencies, bank and any other legal entity or individual.",
        },
    ];

    useGSAP(() => {
        gsap.from('.objective-header-anim', {
            opacity: 0,
            y: 35,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.objective-header-wrap',
                start: 'top 85%'
            }
        });

        gsap.from('.svc-card', {
            opacity: 0,
            y: 45,
            scale: 0.92,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.objective-grid',
                start: 'top 85%'
            }
        });
    }, { scope: sectionRef });

    return (
        <>
            <div ref={sectionRef} className="bg-[#fdf6ef] py-8 md:py-12 overflow-hidden">
                <div className="objective-header-wrap max-w-7xl mx-auto mb-18 px-4 sm:px-6 lg:px-8 text-center">
                    {/* Badge */}
                    <div className="objective-header-anim">
                        <span className="inline-block bg-white rounded-md px-3.5 py-1.5 text-xs sm:text-4xl font-bold tracking-wider text-[#1A202C] uppercase shadow-2xs">
                            OUR OBJECTIVE
                        </span>
                    </div>

                    {/* Title */}
                    <p className="objective-header-anim mt-4 sm:mt-5 text-lg sm:text-xl md:text-lg lg:text-xl text-gray-600">
                        To accept donations, grants, and other offerings in the shape of movable and /or immovable properties for the <br />attainment of the aims and objects of the Organisation.
                    </p>
                </div>
                {/* Cards Grid */}
                <div className="relative">
                    {/* Scoped styles for the orange corner-fill hover animation */}
                    <style>{`
        .svc-card::before,
        .svc-card::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          background: #D33D33;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
        }
        .svc-card::before {
          top: 0;
          right: 0;
          border-radius: 0 0 0 100%;
        }
        .svc-card::after {
          bottom: 0;
          left: 0;
          border-radius: 0 100% 0 0;
        }
        .svc-card:hover::before,
        .svc-card:hover::after {
          width: 100%;
          height: 100%;
          border-radius: 0;
        }
      `}</style>
                    {/* Cards Grid */}
                    <div className="objective-grid grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto">
                        {services.map((service) => (
                            <div
                                key={service.label}
                                className="svc-card group relative overflow-hidden rounded-lg bg-[#313741] cursor-pointer flex justify-center items-center border-r-3 border-b-3 border-[#D33D33]"
                                style={{ aspectRatio: "4/4", maxHeight: "290px" }}
                            >
                                {/* Default view */}
                                <div className="relative z-10 flex flex-col items-center justify-center px-3 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                                    <img src={service.icon} alt="objective-icon" className="text-4xl mb-3" />
                                </div>
                                {/* Hover content */}
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 pointer-events-none">
                                    <p className="text-white/80 text-[13px] text-center mt-1 leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </>
    )
}

export default objective