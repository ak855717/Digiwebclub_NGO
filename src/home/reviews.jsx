;
import { Star } from 'lucide-react';

const Reviews = () => {
    return (
        <section className="relative w-full min-h-[600px] flex items-center font-sans overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=1920"
                    alt="Volunteers and children"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-[#232a39]/30"></div>
                <div className="absolute inset-0 bg-linear-to-t from-[#232a39] via-[#232a39]/80 to-transparent h-full"></div>
                <div className="absolute inset-0 bg-linear-to-r from-[#232a39]/90 via-[#232a39]/40 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 w-full relative z-10 py-24 mt-16">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-16">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 max-w-xl pb-10">
                        {/* Decorative Red Dot */}
                        <div className="w-1.5 h-1.5 rounded-full bg-[#dc4c3e] mb-10 ml-32 shadow-sm"></div>

                        <div className="inline-flex items-center gap-3 px-2 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-sm">
                            <div className="flex -space-x-2 pl-1">
                                <img className="w-7 h-7 rounded-full border-2 border-transparent object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                                <img className="w-7 h-7 rounded-full border-2 border-transparent object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                                <img className="w-7 h-7 rounded-full border-2 border-transparent object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Avatar" />
                            </div>
                            <span className="text-sm font-semibold text-white pr-4">Testimonials</span>
                        </div>

                        <h2 className="text-4xl md:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight">
                            Building trust through real experiences
                        </h2>
                    </div>

                    {/* Right Content - Review Card */}
                    <div className="w-full lg:w-[45%]">
                        <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl relative">
                            <div className="flex justify-between items-start mb-10">
                                <div className="flex gap-1.5">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#dc4c3e] text-[#dc4c3e]" />
                                    ))}
                                </div>
                                {/* Quote SVG */}
                                <svg className="w-10 h-10 text-gray-200" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 21L16.41 14.59V3H21V14.59L18.607 21H14.017ZM3.017 21L5.41 14.59V3H10V14.59L7.607 21H3.017Z" />
                                </svg>
                            </div>

                            <p className="text-slate-800 text-[1.05rem] leading-[1.8] mb-10 font-semibold">
                                " I've been supporting EKDKN for over a year, and I'm truly impressed by their dedication. The regular impact updates and programs like DAKSH give me confidence that my contributions are making a real difference. "
                            </p>

                            <div className="h-1px w-full bg-gray-100 mb-8"></div>

                            <div className="flex items-center gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                                    alt="Jenny Wilson"
                                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                                />
                                <div>
                                    <h4 className="text-[1.05rem] font-bold text-slate-900">Ananya Sharma</h4>
                                    <p className="text-gray-500 text-sm">Volunteer & Donor</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Reviews;