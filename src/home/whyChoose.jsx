import React from 'react'
import { Check, ArrowUpRight } from 'lucide-react'

const WhyChoose = () => {
  return (
    <section className="py-16 md:py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          
          {/* Left Column: Images */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 h-[550px] lg:h-[650px]">
            {/* Main large image */}
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" 
              className="absolute top-0 right-4 lg:right-10 w-[75%] h-[90%] object-cover rounded-4xl shadow-sm"
              alt="Smiling boy"
            />

            {/* Top left floating card */}
            <div className="absolute top-[12%] left-0 bg-white rounded-3xl p-5 shadow-xl w-48 z-20 border border-gray-100/50">
               <h4 className="font-bold text-slate-900 text-[22px] mb-1 leading-tight">
                 3,500+ <span className="font-medium text-[15px] text-gray-600 block mt-0.5">Active Volunteers</span>
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
              src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=400&auto=format&fit=crop" 
              className="absolute bottom-0 right-0 w-[48%] h-[38%] object-cover rounded-[2rem] z-30 shadow-lg border-[8px] border-[#FAFAFA]"
              alt="Boy with bowl"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-slate-800 mb-6 shadow-sm border border-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DF4A43]"></span>
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-[44px] font-bold text-slate-900 mb-6 leading-[1.15]">
                Transforming generosity into meaningful change
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                We design and implement sustainable programs in education, healthcare, hunger relief, and disaster response to uplift underserved communities & create lasting social impact.
              </p>
            </div>

            {/* Impact Tracking Card */}
            <div className="bg-white rounded-[2rem] p-3 lg:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 flex flex-col sm:flex-row gap-8 items-center border border-gray-50">
               <div className="flex-1 w-full">
                 <h3 className="font-bold text-slate-900 text-[22px] mb-4 border-b border-gray-300 pb-2">Real Time Impact Tracking</h3>
      
                 <ul className="space-y-4">
                   <li className="flex items-center gap-3">
                     <div className="w-5 h-5 bg-[#DF4A43] rounded-full flex items-center justify-center shrink-0">
                       <Check className="w-3 h-3 text-white" strokeWidth={4} />
                     </div>
                     <span className="text-gray-500 text-[15px]">Transparent, easy to read reports</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <div className="w-5 h-5 bg-[#DF4A43] rounded-full flex items-center justify-center shrink-0">
                       <Check className="w-3 h-3 text-white" strokeWidth={4} />
                     </div>
                     <span className="text-gray-500 text-[15px]">Track the ongoing status of donation</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <div className="w-5 h-5 bg-[#DF4A43] rounded-full flex items-center justify-center shrink-0">
                       <Check className="w-3 h-3 text-white" strokeWidth={4} />
                     </div>
                     <span className="text-gray-500 text-[15px]">Access your own dashboard monitor</span>
                   </li>
                 </ul>
               </div>
               
               <div className="w-full sm:w-[45%] shrink-0 h-[200px] sm:h-[220px]">
                  <img 
                    src="https://ekdkn.com/wp-content/uploads/2025/02/641b62_679ceb21ce0241cf91ab92125063cd1emv2.jpg" 
                    className="w-full h-full object-cover rounded-2xl shadow-sm"
                    alt="Group of smiling children"
                  />
               </div>
            </div>

            {/* Action area */}
            <div className="mt-2 border-t border-gray-200/60 pt-8">
              <button className="flex items-center gap-4 bg-[#DF4A43] text-white pr-1.5 pl-6 py-1.5 rounded-xl hover:bg-[#c23d3d] transition-colors font-semibold w-fit">
                Contact Us
                <span className="bg-white text-gray-900 p-2 rounded-lg">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                </span>
              </button>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default WhyChoose