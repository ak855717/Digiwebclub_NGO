
import { ShieldCheck, Heart, MapPin, Package } from 'lucide-react';
import Img1 from '../assets/home/image (6).jpg';
import Img2 from '../assets/home/image (8).jpg';
import Img3 from '../assets/home/image (10).jpg';
import Img4 from '../assets/home/image (11).jpg';

const covidImages = [
    {
        src: Img1,
        alt: 'Volunteers distributing essential ration kits during COVID-19 pandemic',
        caption: 'Ration Kit Distribution',
        subtext: 'Rice, Atta, Pulses, Oil & Spices provided to families'
    },
    {
        src: Img2,
        alt: 'Community relief team delivering emergency supplies',
        caption: 'Emergency Relief Drive',
        subtext: 'Door-to-door assistance for vulnerable communities'
    },
    {
        src: Img3,
        alt: 'Sanitization and mask distribution drive in West Delhi',
        caption: 'Sanitization & Safety',
        subtext: 'Mask distribution and public area sanitization in West Delhi'
    },
    {
        src: Img4,
        alt: 'Volunteers organizing relief packages indoors',
        caption: 'Organized Support',
        subtext: 'Structured packaging and distribution operations'
    }
];

const Section2 = () => {

    return (
        <section className="py-16 md:py-24 bg-[#F8F9FA] relative overflow-hidden" id="covid">
            {/* Decorative subtle background elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#944A00]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#D33D33]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200/60 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#944A00] mb-4 shadow-2xs">
                        <ShieldCheck className="w-4 h-4 text-[#944A00]" />
                        COVID-19 Relief & Community Aid
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#191C1D] tracking-tight leading-tight mb-5">
                        Nobel Work For Covid-19 Pandemic
                    </h2>

                    <p className="text-[#434749] text-base sm:text-lg leading-relaxed font-normal">
                        In this situation Ek Kaam Desh Ke Naam had taken initiatives to help those society who has been badly effected. We have distributed Ration Kit which include (Rice, Atta, Pulses, Oil and Spices). We also Sanitized different areas as well distributed masks to the people in West Delhi.
                    </p>

                    {/* Action Impact Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200/80">
                        <div className="flex items-center justify-center gap-3 bg-white rounded-xl py-3 px-4 shadow-2xs border border-gray-100">
                            <Package className="w-5 h-5 text-[#944A00] shrink-0" />
                            <div className="text-left">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Relief Kits</p>
                                <p className="text-sm font-bold text-gray-800">Ration & Essential Spices</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-3 bg-white rounded-xl py-3 px-4 shadow-2xs border border-gray-100">
                            <Heart className="w-5 h-5 text-[#D33D33] shrink-0" />
                            <div className="text-left">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Health & Safety</p>
                                <p className="text-sm font-bold text-gray-800">Masks & Sanitization</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-3 bg-white rounded-xl py-3 px-4 shadow-2xs border border-gray-100">
                            <MapPin className="w-5 h-5 text-[#181F21] shrink-0" />
                            <div className="text-left">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Focus Region</p>
                                <p className="text-sm font-bold text-gray-800">West Delhi Communities</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2x2 Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {covidImages.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/80 bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
                        >
                            <div className="relative overflow-hidden h-64 sm:h-72 md:h-80 bg-gray-100">
                                <img
                                    src={item.src}
                                    
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <span className="inline-block px-3 py-1 bg-[#944A00] text-white text-xs font-bold rounded-full w-fit mb-2">
                                        {item.caption}
                                    </span>
                                    <p className="text-white text-sm sm:text-base font-medium leading-snug">
                                        {item.subtext}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section2;
