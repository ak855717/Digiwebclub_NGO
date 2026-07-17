
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowUpRight } from 'lucide-react'
import image4 from '../assets/home/image (9).jpeg';
import image5 from '../assets/home/image (2).jpeg';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Left column animations
    gsap.from('.why-main-img', {
      opacity: 0,
      scale: 0.88,
      duration: 1.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%'
      }
    });

    gsap.from('.why-floating-card', {
      opacity: 0,
      x: -60,
      duration: 1,
      delay: 0.25,
      ease: 'back.out(1.5)',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%'
      }
    });

    gsap.from('.why-bottom-img', {
      opacity: 0,
      y: 60,
      x: 40,
      duration: 1,
      delay: 0.4,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%'
      }
    });

    // Right column animations
    gsap.from('.why-text-anim', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.18,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.why-content-wrap',
        start: 'top 85%'
      }
    });

    gsap.from('.why-impact-card', {
      opacity: 0,
      y: 45,
      scale: 0.96,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.why-impact-card',
        start: 'top 85%'
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* Left Column: Images */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 h-[550px] lg:h-[650px]">
            {/* Main large image */}
            <img
              src={image5}
              className="why-main-img absolute top-0 right-4 lg:right-10 w-[75%] h-[90%] object-cover rounded-4xl shadow-sm"
              alt="Smiling boy"
            />

            {/* Top left floating card */}
            <div className="why-floating-card absolute top-[12%] left-0 bg-white rounded-3xl p-5 shadow-xl w-48 z-20 border border-gray-100/50">
              <h4 className="font-bold text-slate-900 text-[22px] mb-1 leading-tight">
                Empowering <span className="font-medium text-[15px] text-gray-600 block mt-0.5">Lives Everyday</span>
              </h4>
              <div className="flex -space-x-3 mt-4">
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Volunteer" />
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Volunteer" />
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Volunteer" />
                <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop" alt="Volunteer" />
              </div>
            </div>

            {/* Bottom right overlapping image */}
            <img
              src={image4}
              className="why-bottom-img absolute bottom-0 right-0 w-[48%] h-[38%] object-cover rounded-4xl z-30 shadow-lg border-8 border-[#FAFAFA]"
              alt="EKDKN Activity"
            />
          </div>

          {/* Right Column: Content */}
          <div className="why-content-wrap flex flex-col">

            <div className="mb-10">
              <div className="why-text-anim inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-slate-800 mb-6 shadow-sm border border-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DF4A43]"></span>
                Our Vision & Mission
              </div>
              <h2 className="why-text-anim text-4xl md:text-[44px] font-bold text-slate-900 mb-6 leading-[1.15]">
                A Future of Equal Opportunities
              </h2>
              <p className="why-text-anim text-gray-500 text-[15px] leading-relaxed">
                Our vision is to empower individuals through education and support, creating a self-reliant and thriving society where everyone has the opportunity to succeed regardless of their background.
              </p>
            </div>

            {/* Impact Tracking Card */}
            <div className="why-impact-card bg-white rounded-4xl p-3 lg:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 flex flex-col sm:flex-row gap-8 items-center border border-gray-50">
              <div className="flex-1 w-full pl-2">
                <h3 className="font-bold text-slate-900 text-[22px] mb-4 border-b border-gray-300 pb-2">Our Mission Pillars</h3>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#DF4A43] rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-gray-500 text-[15px]">Provide Quality Education (DAKSH)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#DF4A43] rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-gray-500 text-[15px]">Promote Sustainable Environment (DRI)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#DF4A43] rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" strokeWidth={4} />
                    </div>
                    <span className="text-gray-500 text-[15px]">Support Specially-Abled Children</span>
                  </li>
                </ul>
              </div>

              <div className="w-full sm:w-[45%] shrink-0 h-[200px] sm:h-[220px]">
                <img
                  src="https://ekdkn.com/wp-content/uploads/2025/02/641b62_679ceb21ce0241cf91ab92125063cd1emv2.jpg"
                  className="w-full h-full object-cover rounded-2xl shadow-sm"
                  alt="EKDKN Students"
                />
              </div>
            </div>

            {/* Action area */}
            <div className="why-text-anim mt-2 border-t border-gray-200/60 pt-8">
              <Link to='/about#about_approach' className="flex items-center gap-4 bg-[#DF4A43] text-white pr-1.5 pl-6 py-1.5 rounded-xl hover:bg-[#c23d3d] transition-colors font-semibold w-fit">
                Join Our Mission
                <span className="bg-white text-gray-900 p-2 rounded-lg">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChoose