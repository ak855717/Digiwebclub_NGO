
const Section1 = (props) => {
  return (
    <section className="py-3 md:py-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative bg-[#2A323D] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl overflow-hidden">
        {/* Subtle Dotted Globe / World Map Watermark Background */}
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 opacity-15 pointer-events-none select-none -translate-x-6 -translate-y-6">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-white"
          >
            {/* Dotted globe graphic representing world map */}
            <g fill="currentColor">
              <circle cx="60" cy="80" r="2.5" />
              <circle cx="75" cy="78" r="2.5" />
              <circle cx="90" cy="76" r="2.5" />
              <circle cx="105" cy="78" r="2.5" />
              <circle cx="120" cy="82" r="2.5" />
              <circle cx="135" cy="88" r="2.5" />
              <circle cx="50" cy="95" r="2.5" />
              <circle cx="65" cy="93" r="2.5" />
              <circle cx="80" cy="91" r="2.5" />
              <circle cx="95" cy="92" r="2.5" />
              <circle cx="110" cy="95" r="2.5" />
              <circle cx="125" cy="100" r="2.5" />
              <circle cx="140" cy="105" r="2.5" />
              <circle cx="45" cy="110" r="2.5" />
              <circle cx="60" cy="108" r="2.5" />
              <circle cx="75" cy="106" r="2.5" />
              <circle cx="90" cy="106" r="2.5" />
              <circle cx="105" cy="108" r="2.5" />
              <circle cx="120" cy="113" r="2.5" />
              <circle cx="135" cy="120" r="2.5" />
              <circle cx="150" cy="125" r="2.5" />
              <circle cx="48" cy="125" r="2.5" />
              <circle cx="63" cy="123" r="2.5" />
              <circle cx="78" cy="121" r="2.5" />
              <circle cx="93" cy="121" r="2.5" />
              <circle cx="108" cy="124" r="2.5" />
              <circle cx="123" cy="129" r="2.5" />
              <circle cx="138" cy="136" r="2.5" />
              <circle cx="55" cy="140" r="2.5" />
              <circle cx="70" cy="138" r="2.5" />
              <circle cx="85" cy="136" r="2.5" />
              <circle cx="100" cy="137" r="2.5" />
              <circle cx="115" cy="141" r="2.5" />
              <circle cx="130" cy="148" r="2.5" />
              <circle cx="65" cy="155" r="2.5" />
              <circle cx="80" cy="153" r="2.5" />
              <circle cx="95" cy="153" r="2.5" />
              <circle cx="110" cy="157" r="2.5" />
              <circle cx="125" cy="164" r="2.5" />
              <circle cx="75" cy="170" r="2.5" />
              <circle cx="90" cy="168" r="2.5" />
              <circle cx="105" cy="171" r="2.5" />
              <circle cx="120" cy="178" r="2.5" />
              <circle cx="85" cy="185" r="2.5" />
              <circle cx="100" cy="186" r="2.5" />
              <circle cx="115" cy="192" r="2.5" />
              {/* Additional dotted pattern for world map aesthetic */}
              <circle cx="180" cy="65" r="2" />
              <circle cx="195" cy="68" r="2" />
              <circle cx="210" cy="72" r="2" />
              <circle cx="225" cy="75" r="2" />
              <circle cx="175" cy="80" r="2" />
              <circle cx="190" cy="82" r="2" />
              <circle cx="205" cy="86" r="2" />
              <circle cx="220" cy="90" r="2" />
              <circle cx="235" cy="95" r="2" />
              <circle cx="170" cy="95" r="2" />
              <circle cx="185" cy="97" r="2" />
              <circle cx="200" cy="101" r="2" />
              <circle cx="215" cy="106" r="2" />
              <circle cx="230" cy="111" r="2" />
              <circle cx="180" cy="112" r="2" />
              <circle cx="195" cy="115" r="2" />
              <circle cx="210" cy="120" r="2" />
              <circle cx="225" cy="126" r="2" />
              <circle cx="30" cy="180" r="2" />
              <circle cx="45" cy="185" r="2" />
              <circle cx="60" cy="192" r="2" />
              <circle cx="35" cy="200" r="2" />
              <circle cx="50" cy="205" r="2" />
              <circle cx="65" cy="212" r="2" />
            </g>
          </svg>
        </div>

        {/* 3-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          {/* Left Column: Image 1 */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-white/5 bg-gray-800">
              <img
                src={props.image1}
                alt="Shakurpur Basti community children"
                className="w-full h-[280px] sm:h-[320px] lg:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Center Column: Text Details */}
          <div className="lg:col-span-4 flex flex-col justify-center py-2">
            <h3 className="text-[#E94A3F] font-bold text-base sm:text-lg tracking-wider uppercase mb-4">
              {props.title}
            </h3>
            <p className="text-gray-200 text-sm sm:text-[15px] md:text-base leading-relaxed font-normal">
              {props.description}
            </p>
          </div>

          {/* Right Column: Image 2 */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-white/5 bg-gray-800">
              <img
                src={props.image2}
                alt="Shakurpur Basti children with distribution items"
                className="w-full h-[280px] sm:h-[320px] lg:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
