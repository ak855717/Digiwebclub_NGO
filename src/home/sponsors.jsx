;

// Dynamically import all images in the sponcer folder
const sponsorModules = import.meta.glob('../assets/sponcer/*.{webp,jpg,jpeg,png}', { eager: true });
const sponsorImages = Object.values(sponsorModules).map((mod) => mod.default);

const Sponsors = () => {
    return (
        <section className="relative py-20 bg-[#141820] overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1920&auto=format&fit=crop"
                    alt="Hands together"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center">
                {/* Title Badge */}
                <div className="bg-white text-slate-900 font-bold px-10 py-3 rounded shadow-lg tracking-widest text-[0.95rem] mb-16 uppercase border border-gray-200">
                    Our Sponsors
                </div>

                {/* Scrolling Marquee Container */}
                <div className="w-full overflow-hidden relative">
                    {/* Gradient Edges for smooth fade */}
                    <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-linear-to-r from-black/80 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-linear-to-l from-black/80 to-transparent z-20 pointer-events-none"></div>

                    {/* Marquee Track */}
                    <div className="flex w-max animate-marquee">
                        {/* Double the images to create seamless infinite scroll effect */}
                        {[...sponsorImages, ...sponsorImages].map((imgSrc, index) => (
                            <div
                                key={index}
                                className="shrink-0 w-44 h-44 md:w-52 md:h-52 rounded-full border-[6px] md:border-8 border-white bg-white mx-4 md:mx-6 flex items-center justify-center p-5 shadow-2xl overflow-hidden group cursor-pointer"
                            >
                                <img
                                    src={imgSrc}
                                    alt={`Sponsor ${index + 1}`}
                                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
        </section>
    );
};

export default Sponsors;
