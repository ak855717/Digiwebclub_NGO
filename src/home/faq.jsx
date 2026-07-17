import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus, Star, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const sectionRef = useRef(null);

    const faqs = [
        {
            id: 1,
            question: "1. Is there any registration fee to join EKDKN?",
            answer: "No! There is no registration fee to join EKDKN. The only requirement is your dedication and commitment towards bringing a change in society."
        },
        {
            id: 2,
            question: "2. In which domains does EKDKN work?",
            answer: "We focus heavily on education and the environment. We run various teaching drives, plantation drives, and distribution drives to support these causes."
        },
        {
            id: 3,
            question: "3. Who can join EKDKN?",
            answer: "Anyone who has the will and desire to bring a positive change can join EKDKN! We welcome passionate individuals from all backgrounds."
        },
        {
            id: 4,
            question: "4. Will there be any certificates provided?",
            answer: "Yes, every member is appreciated for their hard work and dedication with certificates recognizing their contributions."
        },
        {
            id: 5,
            question: "5. How do I get updates about the causes I support?",
            answer: "By subscribing to our newsletter, following our social media channels, or checking our news section, you can stay informed about all our ongoing projects and their impact."
        }
    ];

    useGSAP(() => {
        gsap.from('.faq-left-img', {
            opacity: 0,
            scale: 0.9,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.faq-left-col',
                start: 'top 80%'
            }
        });

        gsap.from('.faq-badge-contact', {
            opacity: 0,
            scale: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.faq-left-col',
                start: 'top 80%'
            }
        });

        gsap.from('.faq-badge-review', {
            opacity: 0,
            y: 45,
            duration: 0.9,
            delay: 0.45,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.faq-left-col',
                start: 'top 80%'
            }
        });

        gsap.from('.faq-right-header', {
            opacity: 0,
            y: 35,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.faq-right-col',
                start: 'top 85%'
            }
        });

        gsap.from('.faq-item', {
            opacity: 0,
            y: 30,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.faq-accordion-list',
                start: 'top 85%'
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="py-24 bg-[#f8f9fa] font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start">

                    {/* Left Column - Image & Floating Elements */}
                    <div className="faq-left-col w-full max-w-[480px] lg:w-1/2 relative mt-8 lg:mt-0">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
                            alt="Woman and child sharing food"
                            className="faq-left-img w-full rounded-3xl object-cover shadow-lg aspect-4/5 object-center"
                        />

                        {/* Spinning Contact Us Badge */}
                        <div className="faq-badge-contact absolute top-8 -right-4 md:-right-10 lg:-right-12 w-[130px] h-[130px] bg-[#dc4c3e] rounded-full flex items-center justify-center shadow-xl z-20 border-[6px] border-[#f8f9fa]">
                            <div className="animate-[spin_12s_linear_infinite] w-full h-full absolute inset-0">
                                <svg viewBox="0 0 100 100" className="w-full h-full text-white font-bold text-[11px] uppercase tracking-widest">
                                    <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text>
                                        <textPath href="/contact" startOffset="0%" textLength="220">
                                            Contact Us • Contact Us • Contact Us •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <div className="bg-white text-[#dc4c3e] rounded-full p-2.5 z-10 shadow-sm relative">
                                <Heart className="w-5 h-5 fill-current" />
                            </div>
                        </div>

                        {/* Dark Review Card */}
                        <div className="faq-badge-review absolute -bottom-10 right-4 md:-right-8 lg:-right-16 bg-[#232a39] rounded-2xl p-7 w-[280px] shadow-2xl z-20 border-[6px] border-[#f8f9fa]">
                            <div className="flex gap-1.5 mb-5">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                                ))}
                            </div>

                            <div className="flex -space-x-2.5 mb-7">
                                <img className="w-9 h-9 rounded-full border-2 border-[#232a39] z-40 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                                <img className="w-9 h-9 rounded-full border-2 border-[#232a39] z-30 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                                <img className="w-9 h-9 rounded-full border-2 border-[#232a39] z-20 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                                <img className="w-9 h-9 rounded-full border-2 border-[#232a39] z-10 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                            </div>

                            <div className="flex items-center gap-3 mb-2.5">
                                <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <span className="text-2xl font-bold text-white">4.9/5</span>
                            </div>
                            <p className="text-gray-400 text-sm leading-snug">
                                Trusted by our volunteers and community.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - FAQ Accordion */}
                    <div className="faq-right-col w-full lg:w-1/2 pt-16 lg:pt-0">
                        <div className="faq-right-header inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dc4c3e] border border-gray-200 mb-6 shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            <span className="text-sm font-semibold text-white">Frequently Asked Questions</span>
                        </div>

                        <h2 className="faq-right-header text-4xl md:text-[2.75rem] font-bold text-slate-900 mb-10 tracking-tight leading-[1.15]">
                            Your questions answers with transparency & care
                        </h2>

                        <div className="faq-accordion-list flex flex-col gap-4">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="faq-item bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors hover:bg-gray-50"
                                    >
                                        <span className="font-semibold text-slate-900 text-[1.05rem] pr-4">{faq.question}</span>
                                        <div className="shrink-0 w-8 h-8 rounded-full bg-[#dc4c3e] text-white flex items-center justify-center transition-transform duration-300 shadow-sm">
                                            {openIndex === faq.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </div>
                                    </button>

                                    <div
                                        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === faq.id ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="h-px w-full bg-gray-100 mb-5"></div>
                                        <p className="text-gray-500 leading-relaxed text-[0.95rem]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Faq;