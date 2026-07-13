import {
    SlidersHorizontal,
    FileText,
    Timer,
    Network,
    HelpCircle,
    PieChart,
} from 'lucide-react';

const Empowerment = () => {
    const sectors = [
        {
            name: 'Occupation Health & Safety',
            icon: <SlidersHorizontal className="w-5 h-5" />,
        },
        {
            name: 'Environment',
            icon: <FileText className="w-5 h-5" />,
        },
        {
            name: 'Corporate Social Responsibility',
            icon: <Timer className="w-5 h-5" />,
        },
        {
            name: 'Human Resources',
            icon: <Network className="w-5 h-5" />,
        },
        {
            name: 'Renewable Energy',
            icon: <HelpCircle className="w-5 h-5" />,
        },
        {
            name: 'Oil & Gas',
            icon: <PieChart className="w-5 h-5" />,
        },
    ];

    return (
        <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="bg-[#E5E3DA] rounded-3xl sm:rounded-[28px] p-6 sm:p-10 md:p-12 lg:p-14 border border-gray-200/40 shadow-xs text-center">
                    {/* Badge */}
                    <div>
                        <span className="inline-block bg-white rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-bold tracking-wider text-[#1A202C] uppercase shadow-2xs">
                            EMPOWERMENT
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="mt-4 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#1A202C] tracking-tight leading-tight">
                        Uplifting Communities, Shaping Futures
                    </h2>

                    {/* Description */}
                    <p className="mt-4 sm:mt-5 text-[#6B7280] text-sm sm:text-base leading-relaxed">
                        We observed huge untapped intellect in slums and realised the need
                        for enabling them to be the nation&apos;s strength. With this
                        thought we started motivating them for higher education by giving
                        scholarship to meritorious students. Further we comprehended that we
                        must be the catalyst in bridging the gap between corporate and the
                        youth and took a decision of holding Exceed Awards. The Exceed award
                        was conceived with the objective of mobilizing funds from corporate
                        towards the neglected youth from the marginal society. EKDKN&apos;s
                        activities are presently focused on the following five major
                        sectors, which are, indeed, vital for the development &amp; growth
                        of our country:
                    </p>

                    {/* Sectors Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 mt-8 sm:mt-10">
                        {sectors.map((sector, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-3.5 group cursor-pointer"
                            >
                                <div className="w-20 h-20 sm:w-20 sm:h-20 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm bg-[#D33D33] group-hover:scale-105 transition-all duration-300">
                                    {sector.icon}
                                </div>
                                <span className="font-semibold text-base sm:text-xl text-[#D33D33] transition-colors duration-300">
                                    {sector.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Empowerment;
