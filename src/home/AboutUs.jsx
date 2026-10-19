import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, HandHeart, Phone } from "lucide-react";
import image1 from "../assets/home/image (6).jpg";
import image3 from "../assets/home/image (8).jpg";
import image4 from "../assets/home/grid.png";
import image5 from "../assets/home/hand.png";
import image6 from "../assets/home/spade-3.png";
import image7 from "../assets/home/parasuit.png";
import image8 from "../assets/home/Hands Supporting Soccer Ball with Yellow Accent.png";
import image9 from "../assets/home/Heart of Helping Hands.png";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Image collage animations
      gsap.from(".about-img-1", {
        opacity: 0,
        x: -40,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-img-2", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-img-3", {
        opacity: 0,
        x: 40,
        y: 30,
        duration: 1,
        delay: 0.35,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".about-text-anim", {
        opacity: 0,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content-wrap",
          start: "top 85%",
        },
      });

      gsap.from(".about-feature-box", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-features-container",
          start: "top 85%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-white py-16 md:py-20 relative "
    >
      <img
        src={image5}
        alt="hand"
        className="absolute left-0 top-3 z-30 object-cover"
      />
      <img
        src={image6}
        alt="hand"
        className="absolute right-[4%] bottom-10 z-10 object-cover "
      />
      <img
        src={image7}
        alt="hand"
        className="absolute left-[5%] top-[40%] z-10 object-cover "
      />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative mx-auto h-[440px] w-full max-w-[500px] sm:h-[540px]">
            <div
              className="absolute -bottom-1 left-0 z-0 grid grid-cols-7 gap-2.5"
              aria-hidden="true"
            ></div>
            <img
              src={image3}
              className="about-img-1 absolute left-[8%] top-[3%] z-10 h-full w-[90%] rounded-2xl object-cover shadow-xl sm:rounded-[20px]"
              alt="EKDKN Education"
            />
            <img
              src={image1}
              className="about-img-3 absolute right-[-15%] top-[48%] z-20 aspect-square w-[52%] rounded-full border-[6px] border-white object-cover shadow-xl sm:border-8"
              alt="EKDKN Activity"
            />
            <img
              src={image4}
              className="about-img-3 absolute right-[55%] top-[70%] z-20 aspect-square object-cover"
              alt="EKDKN Activity"
            />
          </div>

          <div className="about-content-wrap flex flex-col">
            <div className="about-text-anim mb-4 inline-flex items-center gap-3 self-start text-[#087F72]">
              <HandHeart className="h-6 w-6" strokeWidth={1.6} />
              <span className="font-caveat text-[24px] font-semibold tracking-wide text-[#087F72]">
                Who We Are
              </span>
            </div>
            <h2 className="about-text-anim mb-5 text-3xl font-bold leading-tight text-[#15352F] sm:text-4xl lg:text-[44px]">
              ABOUT SUSTAINABLE{" "}
              <span className="text-[#FFC107]">DEVELOPMENT</span> MISSION
            </h2>
            <p className="about-text-anim text-base leading-7 text-slate-600">
              The Sustainable Development Mission (SDM), a specialized unit of
              EKDKN has undertaken the prestigious initiative of instituting the
              EXCEED Awards to recognize and honour exemplary contributions made
              by Corporate Organizations and Institutions. These awards
              acknowledge excellence in the fields of Environment, Occupational
              Health &amp; Safety (EHS), Renewable Energy, Human Resources (HR),
              and Corporate Social Responsibility (CSR).
            </p>

            <div className="about-features-container mt-8 grid gap-6 sm:grid-cols-2 sm:gap-5">
              <div className="about-feature-box flex items-center gap-4">
                <div className="relative flex h-25 w-25 shrink-0 items-center justify-center">
                  <img
                    src={image8}
                    alt="Hands Supporting Soccer Ball with Yellow Accent"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#15352F]">
                    Literacy &amp; Numeracy Enhancement
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    Through the DAKSH Initiative, we aim to reduce educational
                    inequalities and improve the educational status of children
                    residing in impoverished slums.
                  </p>
                </div>
              </div>

              <div className="about-feature-box flex items-center gap-4">
                <div className="relative flex h-25 w-25 shrink-0 items-center justify-center">
                  <img
                    src={image9}
                    alt="Hands Supporting Soccer Ball with Yellow Accent"
                  />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#15352F]">
                    Sustainable Environment
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    With the Delhi Replantation Initiative (DRI), we conduct
                    plantation drives across barren lands, parks, schools, and
                    institutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-text-anim mt-8 flex flex-wrap items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-full bg-[#FFB900] px-7 py-4 font-semibold text-[#15352F] transition-colors hover:bg-[#e5a600]"
              >
                More About Us
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </Link>
              <a
                href="tel:+918826335688"
                className="inline-flex items-center gap-3 rounded-full bg-white p-2 pr-4 shadow-[0_10px_30px_rgba(21,53,47,0.08)] ring-1 ring-[#E8E5DE] transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFB900] text-[#15352F] shadow-sm">
                  <Phone className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Phone
                  </span>
                  <span className="mt-1 text-lg font-bold text-[#15352F]">
                    +91 88263 35688
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
