;
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SliderLib from 'react-slick';
const Slider = SliderLib.default || SliderLib;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';
import bgImage from '../assets/home/hero-slider1.webp';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);
    const [activeVideo, setActiveVideo] = useState(null);

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
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        pauseOnHover: false,
        pauseOnFocus: false,
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

    const videoUrl = [
        {
            id: 1,
            links: "https://ekdkn.com/wp-content/uploads/2025/06/School-video-v6-2-1-1.mp4",
        },
        {
            id: 2,
            links: "https://ekdkn.com/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-19-at-11.18.42_0551f9a3.mp4",
        },
        {
            id: 3,
            links: "https://ekdkn.com/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-19-at-11.18.41_71a4b502.mp4",
        },
        {
            id: 4,
            links: "https://ekdkn.com/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-19-at-11.18.41_36e8357f.mp4",
        },
        {
            id: 5,
            links: "https://ekdkn.com/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-19-at-11.18.41_22aa7064.mp4",
        },
        {
            id: 6,
            links: "https://ekdkn.com/wp-content/uploads/2025/06/School-video-v6-2-1-1.mp4",
        },
        {
            id: 7,
            links: "https://ekdkn.com/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-19-at-11.18.42_0551f9a3.mp4",
        }
    ]

    useGSAP(() => {
        gsap.from('.story-text-anim', {
            opacity: 0,
            y: 40,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%'
            }
        });

        gsap.from('.story-videos-grid', {
            opacity: 0,
            y: 50,
            duration: 1.1,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.story-videos-grid',
                start: 'top 85%'
            }
        });
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative flex items-center justify-center min-h-[80vh] md:min-h-[90vh] py-20 bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay to darken background */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center text-white max-w-8xl mx-auto">

                {/* Watch Our Story Tag */}
                <div className="story-text-anim inline-flex items-center justify-center px-5 py-2 mb-6 text-sm font-medium tracking-wide bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                    <span className="w-2 h-2 mr-3 bg-[#e53935] rounded-full"></span>
                    Watch Our Story
                </div>

                {/* Heading */}
                <h2 className="story-text-anim mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl drop-shadow-lg">
                    EKDKN: Making a Meaningful Change
                </h2>

                {/* Paragraph */}
                <p className="story-text-anim mb-14 text-base leading-relaxed md:text-lg lg:text-xl text-gray-100 max-w-3xl drop-shadow-md">
                    Through the collective support of our volunteers and partners, we are bringing real impact to the community.
                    Watch glimpses of our recent initiatives and the smiles we've been able to create together.
                </p>

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
                <div className='story-videos-grid w-full max-w-6xl mx-auto'>
                    <Slider ref={sliderRef} {...settings}>
                        {
                            videoUrl.map((item) => (
                                <div key={item.id} className='story-video-card py-2'>
                                    <div 
                                        className="bg-white/5 backdrop-blur-sm p-2 rounded-2xl border border-white/15 shadow-xl group cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-white/30"
                                        onClick={() => setActiveVideo(item.links)}
                                    >
                                        <div className="relative rounded-xl overflow-hidden">
                                            <video className='w-full h-[240px] object-cover rounded-xl shadow-inner' src={item.links} muted autoPlay loop playsInline></video>
                                            
                                            {/* Hover Overlay with Play Button */}
                                            <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5">
                                                <div className="w-12 h-12 rounded-full bg-[#e53935] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                                    <Play className="w-5 h-5 fill-current ml-0.5" />
                                                </div>
                                                <span className="text-xs font-semibold text-white tracking-wide bg-black/70 px-3 py-1 rounded-full border border-white/20 shadow-sm">
                                                    Click to play with sound
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button onClick={scrollLeft} aria-label="Previous slide" className="w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#e53935] hover:border-[#e53935] transition-all cursor-pointer">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={scrollRight} aria-label="Next slide" className="w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#e53935] hover:border-[#e53935] transition-all cursor-pointer">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Fullscreen Video Modal with Sound */}
                {activeVideo && (
                    <div 
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 animate-fade-in"
                        onClick={() => setActiveVideo(null)}
                    >
                        <div 
                            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#e53935] text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer shadow-lg"
                                aria-label="Close video"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <video
                                className="w-full max-h-[80vh] object-contain bg-black"
                                src={activeVideo}
                                controls
                                autoPlay
                                playsInline
                            ></video>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default OurStory;