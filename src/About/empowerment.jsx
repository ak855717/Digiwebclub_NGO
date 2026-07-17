import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    SlidersHorizontal,
    FileText,
    Timer,
    Network,
    HelpCircle,
    PieChart,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Empowerment = () => {
    const sectionRef = useRef(null);

    const sectors = [
        {
            name: 'Occupation Health & Safety',
            icon: <SlidersHorizontal className="w-10 h-10" />,
        },
        {
            name: 'Environment',
            icon: <FileText className="w-10 h-10" />,
        },
        {
            name: 'Corporate Social Responsibility',
            icon: <Timer className="w-10 h-10" />,
        },
        {
            name: 'Human Resources',
            icon: <Network className="w-10 h-10" />,
        },
        {
            name: 'Renewable Energy',
            icon: <HelpCircle className="w-10 h-10" />,
        },
        {
            name: 'Oil & Gas',
            icon: <PieChart className="w-10 h-10" />,
        },
    ];

    useGSAP(() => {
        gsap.from('.empowerment-box', {
            opacity: 0,
            scale: 0.96,
            y: 40,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            }
        });

        gsap.from('.empowerment-text-anim', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.empowerment-text-wrap',
                start: 'top 85%',
            }
        });

        gsap.from('.empowerment-sector-card', {
            opacity: 0,
            y: 35,
            scale: 0.9,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.empowerment-grid',
                start: 'top 85%',
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-12 md:py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="empowerment-box relative bg-[#1a2130] text-white rounded-3xl sm:rounded-[28px] p-6 sm:p-10 md:p-12 lg:p-14 border border-white/10 shadow-2xl overflow-hidden text-center">
                    {/* Subtle chevron background pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5l-20-20V4l20 20 20-20V.5l-20 20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                            backgroundSize: '40px 40px'
                        }}
                    />

                    {/* Badge */}
                    <div className="empowerment-text-wrap relative z-10">
                        <div className="empowerment-text-anim">
                            <span className="inline-block bg-white rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#1A202C] uppercase shadow-2xs">
                                EMPOWERMENT
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="empowerment-text-anim mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
                            Uplifting Communities, Shaping Futures
                        </h2>

                        {/* Description */}
                        <p className="empowerment-text-anim mt-4 sm:mt-5 text-gray-300 text-sm sm:text-base leading-relaxed">
                            We observed huge untapped intellect in slums and realised the need
                            for enabling them to be the nation&apos;s strength. With this
                            thought we started motivating them for higher education by giving
                            scholarship to meritorious students. Further we comprehended that we
                            must be the catalyst in bridging the gap between corporate and the
                            youth and took a decision of holding Exceed Awards. The Exceed award
                            was conceived with the objective of mobilizing funds from corporate
                            towards the neglected youth from the marginal society. EKDKN&apos;s
                            activities are presently focused on the following five major
                            sectors, which are, indeed, vital for the development &amp; growth
                            of our country:
                        </p>
                    </div>

                    {/* Sectors Grid */}
                    <div className="empowerment-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 mt-8 sm:mt-10 relative z-10">
                        {sectors.map((sector, index) => (
                            <div
                                key={index}
                                className="empowerment-sector-card flex flex-col items-center gap-3.5 group cursor-pointer"
                            >
                                <div className="w-20 h-20 sm:w-20 sm:h-20 rounded-full text-white flex items-center justify-center shrink-0 shadow-lg bg-[#D33D33] group-hover:scale-105 group-hover:bg-[#b9352c] transition-all duration-300">
                                    {sector.icon}
                                </div>
                                <span className="font-semibold text-base sm:text-xl text-white group-hover:text-[#D33D33] transition-colors duration-300">
                                    {sector.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Empowerment;
