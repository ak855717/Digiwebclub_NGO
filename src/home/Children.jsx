import { ArrowUpRight, HeartHandshake } from "lucide-react";
import childPortrait from "../assets/home/hero-slider3.webp";
import shapeLeft from "../assets/home/shape-left.png";
import shapeTwo from "../assets/home/shape-two.png";

const Children = () => {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/80 bg-[#0d2f2d]">
      <div className="absolute inset-0">
        <img
          src={childPortrait}
          alt="Children in need"
          className="h-full w-full object-cover object-center opacity-30 grayscale contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#013931] via-[#013931]/10 to-[#013931]/70" />
      </div>

      <img
        src={shapeLeft}
        alt="shapeLeft"
        className="pointer-events-none absolute -left-10 top-[-10%] h-[130%] w-auto object-contain opacity-90"
      />
      <img
        src={shapeTwo}
        alt="shapeTwo"
        className="pointer-events-none absolute bottom-[-10%] object-contain"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl pt-4 text-center lg:pt-8">
          <div className="mb-6 inline-flex items-center gap-3  px-5 py-2 text-white ">
            <HeartHandshake className="h-7 w-8 text-[#f4c84b]" />
            <span className="font-caveat text-[28px] font-semibold tracking-wide text-[#f4c84b]">
              Start Donating Poor People
            </span>
          </div>

          <h1 className="mx-auto max-w-5xl text-2xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-2xl md:text-3xl lg:text-[4rem]">
            Children Need Your Help By
            <span className="mt-2 block">Donating Today</span>
          </h1>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-lg  font-semibold text-white shadow-[0_10px_35px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/15">
              Discover More
              <ArrowUpRight className="h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4c84b] px-8 py-4 text-lg font-semibold text-[#012a27] shadow-[0_10px_35px_rgba(244,200,75,0.35)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ffd74c]">
              Get A Quote
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Children;
