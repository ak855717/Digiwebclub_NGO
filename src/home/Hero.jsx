import { useState, useEffect } from 'react';
import heroslider1 from '../assets/home/hero-slider1.webp'
import heroslider2 from '../assets/home/hero-slider2.webp'
import heroslider3 from '../assets/home/hero-slider3.webp'
import heroslider4 from '../assets/home/hero-slider4.jpeg'
import heroslider5 from '../assets/home/hero-slider5.webp'
import heroslider6 from '../assets/home/hero-slider6.jpeg'
import heroslider7 from '../assets/home/hero-slider7.jpeg'
import heroslider8 from '../assets/home/hero-slider8.jpeg'
import upcoming from '../assets/home/upcoming.webp'


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const hero = [
    {
      id: 1,
      image: heroslider1,
    },
    {
      id: 2,
      image: heroslider2,
    },
    {
      id: 3,
      image: heroslider3,
    },
    {
      id: 4,
      image: heroslider4,
    },
    {
      id: 5,
      image: heroslider5,
    },
    {
      id: 6,
      image: heroslider6,
    },
    {
      id: 7,
      image: heroslider7,
    },
    {
      id: 8,
      image: heroslider8,
    },

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hero.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [hero.length]);

  return (
    <section className="relative w-full min-h-screen grid overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        {hero.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Hero slider ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          />
        ))}
        {/* Dark Gradients for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/40 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e]/90 via-transparent to-transparent z-20 pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 flex-1 pt-32 pb-16 md:pt-25 md:pb-20 flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between items-stretch flex-1 gap-10 lg:gap-5">

          {/* Left Column */}
          <div className="flex flex-col justify-around items-start lg:flex-1 w-full py-4 md:py-8">

            {/* Top section: Badge and Paragraph */}
            <div className="">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md rounded-full pr-5 py-1.5 border border-white/10 shadow-lg cursor-default">
                <div className="flex -space-x-2 pl-1">
                  <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-white/20 flex items-center justify-center text-xs text-white">★</div>
                </div>
                <span className="text-sm font-medium text-white tracking-wide">Hopes Begins With You</span>
              </div>

              {/* Paragraph */}
              <p className="mt-6 md:mt-8 max-w-md text-[15px] md:text-base text-gray-200/90 font-medium leading-relaxed tracking-wide">
                Every contribution adds up to real change providing children with
                school supplies, families with essentials, & communities with
                sustainable support programs.
              </p>
            </div>

            {/* Bottom section: Headline */}
            <div className="mt-12">
              <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight max-w-2xl">
                Turning small contributions into meaningful impact every day
              </h1>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between items-center lg:items-end lg:flex-1 w-full py-4 md:py-8">

            {/* Top section: Video */}
            <div className="relative group cursor-pointer w-full max-w-md lg:max-w-lg aspect-video">
              <div className="w-full h-full rounded-2xl bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:border-white/60 transition-all duration-300 relative z-10 hover:scale-[1.02] shadow-2xl overflow-hidden">
                <video
                  src="https://ekdkn.com/wp-content/uploads/2026/03/BHAGYASHREE-1.mp4"
                  autoPlay
                  loop
                  muted 
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom section: Review Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-full max-w-sm shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform duration-300 mt-12">
              <img src={upcoming} alt="upcoming event" className="rounded-xl w-full" />
              <p className="mt-4 text-base text-gray-100 font-semibold leading-snug text-center">
                Upcoming Events
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;