;
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Activity,
    GitBranch,
    Globe,
    Gem,
    PieChart,
    Armchair
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const OurFeatures = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from('.features-header-item', {
            opacity: 0,
            y: 40,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.features-header',
                start: 'top 85%'
            }
        });

        gsap.from('.features-item', {
            opacity: 0,
            y: 45,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.features-grid',
                start: 'top 85%'
            }
        });

        gsap.from('.features-stats-card', {
            opacity: 0,
            scale: 0.94,
            y: 35,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.features-stats-card',
                start: 'top 85%'
            }
        });

        gsap.from('.stat-col', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.features-stats-card',
                start: 'top 85%'
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-20 px-4 max-w-7xl mx-auto font-sans overflow-hidden">
            {/* Header Section */}
            <div className="features-header flex flex-col items-center text-center mb-16">
                <div className="features-header-item flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 mb-6 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#dc4c3e]"></div>
                    <span className="text-sm font-semibold text-gray-700">Our Core Features</span>
                </div>
                <h2 className="features-header-item text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                    Highlights of our impactful work
                </h2>
                <p className="features-header-item text-gray-500 max-w-2xl text-lg">
                    Our team is driven by strong core competencies that enable us to connect generosity with meaningful results in the communities we serve.
                </p>
            </div>

            {/* Top Features */}
            <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                {/* Feature 1 */}
                <div className="features-item flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#dc4c3e] flex items-center justify-center text-white shadow-sm">
                        <Activity className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Strategic Thinking & Planning</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We design and execute long-term strategies that ensure our initiatives create sustainable impacts.
                        </p>
                    </div>
                </div>
                {/* Feature 2 */}
                <div className="features-item flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#dc4c3e] flex items-center justify-center text-white shadow-sm">
                        <GitBranch className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Decision-Making Expertise</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We rely on data-driven insights and on-ground realities to make swift and effective decisions.
                        </p>
                    </div>
                </div>
                {/* Feature 3 */}
                <div className="features-item flex gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-[#dc4c3e] flex items-center justify-center text-white shadow-sm">
                        <Globe className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Problem-Solving Abilities</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our volunteers excel in navigating complex social challenges with innovative solutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Card */}
            <div className="features-stats-card bg-[#1e2532] rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-xl">
                {/* Optional decorative background for the card */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 relative z-10">
                    {/* Stat 1 */}
                    <div className="stat-col flex flex-col">
                        <div className="w-14 h-14 rounded-full bg-[#dc4c3e] flex items-center justify-center text-white mb-6 shadow-md">
                            <Gem className="w-6 h-6" />
                        </div>
                        <h4 className="text-5xl font-bold text-white mb-2">18K+</h4>
                        <h5 className="text-lg font-bold text-white mb-3">Lives Impacted</h5>
                        <p className="text-gray-400 text-sm leading-relaxed pr-4">
                            Through education, healthcare, and environmental support.
                        </p>
                    </div>
                    {/* Stat 2 */}
                    <div className="stat-col flex flex-col">
                        <div className="w-14 h-14 rounded-full bg-[#dc4c3e] flex items-center justify-center text-white mb-6 shadow-md">
                            <PieChart className="w-6 h-6" />
                        </div>
                        <h4 className="text-5xl font-bold text-white mb-2">3500+</h4>
                        <h5 className="text-lg font-bold text-white mb-3">Active Volunteers</h5>
                        <p className="text-gray-400 text-sm leading-relaxed pr-4">
                            Dedicated individuals working on the ground everyday.
                        </p>
                    </div>
                    {/* Stat 3 */}
                    <div className="stat-col flex flex-col">
                        <div className="w-14 h-14 rounded-full bg-[#dc4c3e] flex items-center justify-center text-white mb-6 shadow-md">
                            <Armchair className="w-6 h-6" />
                        </div>
                        <h4 className="text-5xl font-bold text-white mb-2">1200+</h4>
                        <h5 className="text-lg font-bold text-white mb-3">Children Supported</h5>
                        <p className="text-gray-400 text-sm leading-relaxed pr-4">
                            Provided with school supplies and access to quality education.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurFeatures;