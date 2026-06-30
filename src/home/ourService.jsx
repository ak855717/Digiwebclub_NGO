
import { ArrowUpRight, Aperture, Layers, PackagePlus, Settings, Star, Phone } from 'lucide-react'

const OurService = () => {
  return (
    <section className="py-16 md:py-15 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-slate-800 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DF4A43]"></span>
              Our Services
            </div>
            <h2 className="text-4xl md:text-[44px] font-bold text-slate-900 leading-[1.2]">
              Delivering support where it's needed most
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-gray-500 mb-6 text-[15px] leading-relaxed">
              We focus on reaching vulnerable communities with timely assistance and sustainable programs, ensuring that everyone has a chance to thrive.
            </p>
            <button className="flex items-center gap-4 bg-[#DF4A43] text-white pr-1.5 pl-6 py-1.5 rounded-xl hover:bg-[#c23d3d] transition-colors font-semibold">
              View All Initiatives
              <span className="bg-white text-gray-900 p-2 rounded-lg">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left side: Services Grid (8 columns) */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Service Item 1 */}
              <div className="p-4 md:p-8 md:pl-0 border-b border-gray-300/50 md:border-r">
                <div className="w-14 h-14 bg-[#DF4A43] rounded-full flex items-center justify-center text-white mb-6 shadow-md shadow-[#DF4A43]/20">
                  <Aperture className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">DAKSH Literacy Program</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  We offer a literacy-numeracy enhancement project to reduce educational inequalities for children.
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 text-sm hover:text-[#DF4A43] transition-colors group">
                  Read More <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Service Item 2 */}
              <div className="p-4 md:p-8 border-b border-gray-300/50">
                <div className="w-14 h-14 bg-[#DF4A43] rounded-full flex items-center justify-center text-white mb-6 shadow-md shadow-[#DF4A43]/20">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Environmental Protection</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Through the DRI initiative, we conduct plantation drives in barren lands, schools, and parks.
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 text-sm hover:text-[#DF4A43] transition-colors group">
                  Read More <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Service Item 3 */}
              <div className="p-4 md:p-8 md:pl-0 border-b md:border-b-0 border-gray-300/50 md:border-r">
                <div className="w-14 h-14 bg-[#DF4A43] rounded-full flex items-center justify-center text-white mb-6 shadow-md shadow-[#DF4A43]/20">
                  <PackagePlus className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Community Support</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Providing assistance and empowerment programs to specially-abled and impoverished families.
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 text-sm hover:text-[#DF4A43] transition-colors group">
                  Read More <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Service Item 4 */}
              <div className="p-4 md:p-8">
                <div className="w-14 h-14 bg-[#DF4A43] rounded-full flex items-center justify-center text-white mb-6 shadow-md shadow-[#DF4A43]/20">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Healthcare & Medical Aid</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  Our healthcare initiatives include free medical camps, health check-ups, and emergency aid.
                </p>
                <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 text-sm hover:text-[#DF4A43] transition-colors group">
                  Read More <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

          {/* Right side: Trust Score Card (4 columns) */}
          <div className="lg:col-span-5 xl:col-span-4 h-full">
            <div className="bg-[#1e2433] rounded-3xl p-10 h-full min-h-[420px] flex flex-col items-center justify-center text-center relative overflow-hidden shadow-xl">

              {/* Profiles */}
              <div className="flex -space-x-4 mb-8 relative z-10">
                <img className="w-12 h-12 rounded-full border-2 border-[#1e2433] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Reviewer 1" />
                <img className="w-12 h-12 rounded-full border-2 border-[#1e2433] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Reviewer 2" />
                <img className="w-12 h-12 rounded-full border-2 border-[#1e2433] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Reviewer 3" />
                <img className="w-12 h-12 rounded-full border-2 border-[#1e2433] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop" alt="Reviewer 4" />
                <img className="w-12 h-12 rounded-full border-2 border-[#1e2433] object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop" alt="Reviewer 5" />
              </div>

              <div className="w-full h-px bg-white/10 mb-8 relative z-10" />

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              {/* Text */}
              <h3 className="text-white text-xl md:text-[22px] font-bold mb-10 relative z-10 leading-snug">
                Trust Score 4.9 (Based on 4500 Reviews)
              </h3>

              {/* Button */}
              <button className="flex items-center gap-4 bg-[#DF4A43] text-white pr-1.5 pl-6 py-1.5 rounded-xl hover:bg-[#c23d3d] transition-colors font-semibold relative z-10">
                Contact Now
                <span className="bg-white text-gray-900 p-2 rounded-lg">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </button>

              {/* Background graphic */}
              <div
                className="absolute bottom-0 left-0 w-full h-[60%] opacity-20 z-0 bg-cover bg-bottom bg-no-repeat grayscale"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1593113514676-568eb512c141?q=80&w=800&auto=format&fit=crop')",
                  WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))"
                }}
              />
            </div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="mt-20 text-center flex flex-wrap items-center justify-center gap-3">
          <div className="flex -space-x-2 relative z-10">
            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" alt="Agent" />
            <div className="w-10 h-10 rounded-full bg-[#DF4A43] flex items-center justify-center border-2 border-white text-white shadow-sm z-20">
              <Phone className="w-4 h-4" fill="currentColor" />
            </div>
          </div>
          <p className="text-gray-500 font-medium text-[15px]">
            Have questions about our initiatives? <a href="#" className="text-[#DF4A43] font-bold underline decoration-2 underline-offset-4 hover:text-[#c23d3d] transition-colors">Contact Us</a>
          </p>
        </div>

      </div>
    </section>
  )
}

export default OurService