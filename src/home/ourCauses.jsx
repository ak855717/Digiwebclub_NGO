;
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Phone } from 'lucide-react';
import childSupportImg from '../assets/child_support.png';
import hungerReliefImg from '../assets/hunger_relief.png';
import healthcareImg from '../assets/healthcare.png';
import avatarImg from '../assets/avatar.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const OurCauses = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from('.causes-header-item', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.causes-header-wrap',
        start: 'top 85%'
      }
    });

    gsap.from('.causes-card', {
      opacity: 0,
      y: 60,
      scale: 0.94,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.causes-grid',
        start: 'top 85%'
      }
    });

    gsap.from('.causes-footer', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      scrollTrigger: {
        trigger: '.causes-footer',
        start: 'top 90%'
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#f8f9fa] py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="causes-header-wrap flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div className="max-w-2xl">
            <div className="causes-header-item inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#e94545]"></div>
              <span className="text-sm font-medium text-gray-700">Our Causes</span>
            </div>
            <h2 className="causes-header-item text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c222e] leading-[1.1]">
              Dedicated to meaningful &<br className="hidden md:block" /> lasting change
            </h2>
          </div>

          <div className="max-w-md lg:mt-4">
            <p className="causes-header-item text-gray-500 mb-8 text-[15px] leading-relaxed">
              We focus on sustainable programs that address the root causes of social challenges, empowering communities across the country.
            </p>
            <Link to='/Contact' className="causes-header-item inline-flex items-center gap-4 bg-[#e94545] text-white pl-6 pr-1.5 py-1.5 rounded-lg font-medium hover:bg-[#d83c3c] transition-colors">
              Join Our Causes
              <span className="bg-white text-gray-700 p-2 rounded-md">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="causes-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="causes-card group relative rounded-3xl overflow-hidden h-[420px] md:h-[480px] shadow-lg cursor-pointer">
            <img
              src={childSupportImg}
              alt="Child Support"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#141820]/90 via-[#141820]/30 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="self-start">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-sm font-medium">
                  Child Support
                </span>
              </div>
              <div>
                <h3 className="text-[22px] md:text-2xl font-bold text-white mb-5 leading-snug group-hover:-translate-y-1 transition-transform duration-300">DAKSH Initiative<br />Literacy Program</h3>
                <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-200 group/link">
                  Read More
                  <ArrowUpRight size={18} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="causes-card group relative rounded-3xl overflow-hidden h-[420px] md:h-[480px] shadow-lg cursor-pointer">
            <img
              src={hungerReliefImg}
              alt="Hunger Relief"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#141820]/90 via-[#141820]/30 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="self-start">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-sm font-medium">
                  Hunger Relief
                </span>
              </div>
              <div>
                <h3 className="text-[22px] md:text-2xl font-bold text-white mb-5 leading-snug group-hover:-translate-y-1 transition-transform duration-300">Hunger Relief and Nutrition<br />Programs</h3>
                <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-200 group/link">
                  Read More
                  <ArrowUpRight size={18} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="causes-card group relative rounded-3xl overflow-hidden h-[420px] md:h-[480px] shadow-lg cursor-pointer">
            <img
              src={healthcareImg}
              alt="Healthcare"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#141820]/90 via-[#141820]/30 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div className="self-start">
                <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-sm font-medium">
                  Healthcare
                </span>
              </div>
              <div>
                <h3 className="text-[22px] md:text-2xl font-bold text-white mb-5 leading-snug group-hover:-translate-y-1 transition-transform duration-300">Community Healthcare & Medical<br />Aid</h3>
                <a href="#" className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-200 group/link">
                  Read More
                  <ArrowUpRight size={18} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="causes-footer mt-16 flex items-center justify-center gap-3">
          <div className="relative flex items-center">
            <img src={avatarImg} alt="User Avatar" className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" />
            <div className="w-7 h-7 rounded-full bg-[#e94545] text-white flex items-center justify-center border-2 border-white -ml-3 z-10 shadow-sm">
              <Phone size={12} fill="currentColor" />
            </div>
          </div>
          <p className="text-gray-700 font-medium text-[15px]">
            Have questions about our initiatives? <Link to="/contact" className="text-[#e94545] underline decoration-[#e94545] underline-offset-4 font-semibold hover:text-[#d83c3c]">Contact Us</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCauses;