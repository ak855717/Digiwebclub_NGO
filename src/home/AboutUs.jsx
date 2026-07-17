
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Layers, Binoculars, ArrowUpRight } from 'lucide-react'
import image1 from '../assets/home/image (6).jpg';
import image2 from '../assets/home/image (7).jpeg';
import image3 from '../assets/home/image (8).jpg';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Images collage animations
    gsap.from('.about-img-1', {
      opacity: 0,
      x: 50,
      y: -40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    gsap.from('.about-img-2', {
      opacity: 0,
      scale: 0.85,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    gsap.from('.about-img-3', {
      opacity: 0,
      x: -50,
      y: 40,
      duration: 1,
      delay: 0.35,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });

    // Content text stagger
    gsap.from('.about-text-anim', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-content-wrap',
        start: 'top 85%',
      }
    });

    // Features boxes
    gsap.from('.about-feature-box', {
      opacity: 0,
      x: -40,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-features-container',
        start: 'top 85%',
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-16 md:py-15 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left side: Images Collage */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 h-[600px]">
            {/* Decorative Background Shade & Glow */}
            <div className="absolute top-[8%] right-[2%] w-[80%] h-[88%] bg-linear-to-br from-[#DF4A43]/15 via-orange-400/10 to-transparent rounded-[40px] -rotate-6 z-0 blur-xl"></div>
            <div className="absolute top-[10%] left-[-5%] w-[92%] h-[72%] bg-gray-200/70 rounded-[40px] z-10 border border-gray-300/50 shadow-inner"></div>

            {/* Top right image */}
            <img
              src={image1}
              className="about-img-1 absolute top-0 right-0 w-[55%] h-[40%] object-cover rounded-4xl z-20 shadow-[0_20px_45px_rgba(0,0,0,1.15)] border-8 border-white hover:scale-[1.02] transition-transform duration-300"
              alt="EKDKN Activity"
            />

            {/* Middle left image */}
            <img
              src={image2}
              className="about-img-2 absolute top-[22%] left-10 w-[65%] h-[46%] object-cover rounded-4xl z-30 shadow-[0_25px_50px_rgba(0,0,0,1.2)] border-8 border-white hover:scale-[1.02] transition-transform duration-300"
              alt="EKDKN Volunteer"
            />

            {/* Bottom image */}
            <img
              src={image3}
              className="about-img-3 absolute bottom-12 -left-15 w-[50%] h-[38%] object-cover rounded-4xl z-40 shadow-[0_20px_45px_rgba(0,0,0,1.15)] border-8 border-white hover:scale-[1.02] transition-transform duration-300"
              alt="EKDKN Education"
            />
          </div>

          {/* Right side: Content */}
          <div className="about-content-wrap flex flex-col">
            <div>
              <div className="about-text-anim inline-flex items-center gap-2 px-4 py-2 bg-[#DF4A43] text-white rounded-full text-sm font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                Who We Are
              </div>
              <h2 className="about-text-anim text-3xl md:text-4xl lg:text-[35px] font-bold text-[#DF4A43] mb-6 leading-[1.25]">
                ABOUT SUSTAINABLE DEVELOPMENT MISSION
              </h2>
              <p className="about-text-anim text-gray-500 text-md">
                The Sustainable Development Mission (SDM), a specialized unit of EKDKN has undertaken the prestigious initiative of instituting the EXCEED Awards to recognize and honour exemplary contributions made by Corporate Organizations and Institutions. These awards acknowledge excellence in the fields of Environment, Occupational Health & Safety (EHS), Renewable Energy, Human Resources (HR), and Corporate Social Responsibility (CSR).
              </p>
            </div>

            {/* Feature box */}
            <div className="about-features-container p-8 md:p-10">
              <div className="about-feature-box flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-[#DF4A43] rounded-full flex items-center justify-center text-white">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Literacy & Numeracy Enhancement</h3>
                  <p className="text-gray-500 text-md">
                    Through the DAKSH Initiative, we aim to reduce educational inequalities and improve the educational status of children residing in impoverished slums.
                  </p>
                </div>
              </div>

              <div className="about-feature-box flex gap-6 mt-6">
                <div className="shrink-0 w-12 h-12 bg-[#DF4A43] rounded-full flex items-center justify-center text-white">
                  <Binoculars className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Sustainable Environment</h3>
                  <p className="text-gray-500 text-md">
                    With the Delhi Replantation Initiative (DRI), we conduct plantation drives across barren lands, parks, schools, and institutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Action area */}
            <div className="about-text-anim flex flex-wrap items-center gap-8 border-t-2 border-gray-200 pt-6">
              <Link to="/about" className="flex items-center gap-4 bg-[#D34646] text-white pr-1.5 pl-6 py-1.5 rounded-xl hover:bg-[#c23d3d] transition-colors font-semibold">
                More About Us
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

export default AboutUs