;
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImage from '../assets/home/hero-slider1.webp';

gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
    const sectionRef = useRef(null);

    const videoUrl = [
        {
            id: 1,
            links: "https://ekdkn.com/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-19-at-11.18.41_36e8357f.mp4",
        },
        {
            id: 2,
            links: "https://ekdkn.com/wp-content/uploads/2025/06/School-video-v6-2-1-1.mp4",
        },
        {
            id: 3,
            links: "https://ekdkn.com/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-19-at-11.18.42_0551f9a3.mp4",
        },
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

        gsap.from('.story-video-card', {
            opacity: 0,
            y: 50,
            scale: 0.92,
            duration: 1,
            stagger: 0.2,
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

                <div className='story-videos-grid grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
                    {
                        videoUrl.map((item) => (
                            <div key={item.id} className='story-video-card w-[350px] max-w-full'>
                                <video className='w-full h-[220px] object-cover rounded-xl shadow-lg border border-white/10' src={item.links} muted autoPlay loop playsInline></video>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    );
};

export default OurStory;