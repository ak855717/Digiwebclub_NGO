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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="absolute inset-0 bg-linear-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/1 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e]/10 via-transparent to-transparent z-20 pointer-events-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full mx-auto px-6 sm:px-8 lg:px-12 flex-1 pt-32 pb-16 md:pt-25 md:pb-20 flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between items-stretch flex-1 gap-10 lg:gap-5">

          {/* Left Column */}
          <div className="flex flex-col justify-center items-start lg:flex-1 w-full py-4 md:py-8">

            {/* Top section: Badge and Paragraph */}
            <div className="">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md rounded-full pr-5 py-1.5 border border-white/10 shadow-lg cursor-default">
                <div className="flex -space-x-2 pl-1">
                  <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-[#D33D33] flex items-center justify-center text-xs text-white">★</div>
                </div>
                <span className="text-sm font-medium text-white tracking-wide">EKDKN Initiative</span>
              </div>

              {/* Headline */}
              <h1 className="mt-4 text-5xl sm:text-6xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight max-w-2xl">
                Welcome to Ek Kaam Desh ke Naam
              </h1>

              {/* Paragraph */}
              <p className="mt-4 md:mt-6 max-w-lg text-[16px] md:text-lg text-gray-200/90 font-medium leading-relaxed tracking-wide">
                Support and Educate specially-abled and impoverished children. Every contribution adds up to real change providing children with sustainable support programs.
              </p>
            </div>

            {/* Top section: Video */}
            <div className="relative group cursor-pointer w-full max-w-md lg:max-w-[380px] aspect-video mt-10">
              <div className="w-full h-full rounded-2xl bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:border-white/60 transition-all duration-300 relative z-10 hover:scale-[1.02] shadow-2xl overflow-hidden">
                <video
                  src="https://ekdkn.com/wp-content/uploads/2026/07/AQPnYXXvEIkQEA7RZrvUAEQ7dfebjkDu_YNgc2d8So64RplV6HgZ2FKLTFoS8gSXMqm8QVQPG5VQCX9YaEL57ZxALDMD-vsIBSxgEj1pJg.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>


          {/* Right Column */}
          <div className="flex flex-col justify-center items-center lg:items-end lg:flex-1 w-full py-4 md:py-8 mt-10">


            {/* Bottom section: Review Card */}
            <div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-full max-w-[280px] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-transform duration-300 mt-30 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img src={upcoming} alt="upcoming event" className="rounded-xl w-full max-h-[300px] object-cover" />
              <p className="mt-4 text-[15px] text-gray-100 font-semibold leading-snug text-center">
                Upcoming Events
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-pointer"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              className="absolute top-2 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={upcoming}
              alt="upcoming event full"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;