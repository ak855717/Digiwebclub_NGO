import  { useState } from 'react';
import { ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const amounts = [500, 1000, 2000, 5000, 10000, 20000];

  return (
    <section className="relative py-24 bg-[#232a39] font-sans overflow-hidden">
      {/* Subtle chevron background pattern */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5l-20-20V4l20 20 20-20V.5l-20 20z' fill='%23ffffff' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}
      />
      {/* Decorative Red Dot */}
      <div className="absolute top-16 left-16 w-1.5 h-1.5 rounded-full bg-[#dc4c3e]"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#dc4c3e]"></div>
              <span className="text-sm font-semibold text-white/90">Support EKDKN</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Your kindness can change<br />a life today
            </h2>
            
            <p className="text-gray-300 text-[1.05rem] mb-12 max-w-lg leading-relaxed">
              Every contribution, no matter the size, helps us provide education, food, healthcare, and environmental support. Join us in creating meaningful and lasting change.
            </p>

            <div className="flex gap-5 mb-10">
              <div className="shrink-0 w-14 h-14 rounded-full bg-[#dc4c3e] flex items-center justify-center text-white shadow-lg">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Secure & Simple Giving</h3>
                <p className="text-gray-300 text-[0.95rem] leading-relaxed max-w-md">
                  With multiple payment options including UPI, credit / debit card and net banking, you can contribute safely and conveniently in just a few clicks.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#dc4c3e]" fill="#dc4c3e" color="white" />
                  <span className="text-white/90 text-[0.9rem] font-medium">Receive payment confirmation email</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#dc4c3e]" fill="#dc4c3e" color="white" />
                  <span className="text-white/90 text-[0.9rem] font-medium">Our platform uses advanced security</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl ml-auto w-full max-w-[540px]">
            <div className="px-8 py-6 text-center border-b-[5px] border-slate-900">
              <h3 className="text-[1.15rem] font-bold text-slate-900">How much would you like to donate today?</h3>
            </div>
            
            <div className="p-8 pt-6">
              <p className="text-slate-600 text-center text-[0.95rem] mb-8 font-medium">
                All donations directly impact our organization and help us further our mission.
              </p>

              <div className="flex justify-between items-center mb-4">
                <label className="text-slate-900 font-bold text-[0.95rem]">
                  Donation Amount <span className="text-[#dc4c3e]">*</span>
                </label>
                <div className="bg-gray-200 text-slate-700 px-3 py-1 rounded text-xs font-bold flex items-center gap-1">
                  INR <span className="text-slate-400">|</span> ₹
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-3.5 rounded-lg text-center font-bold text-[0.95rem] transition-colors border ${
                      selectedAmount === amount 
                        ? 'bg-[#dc4c3e] text-white border-[#dc4c3e]' 
                        : 'bg-gray-50 text-slate-800 border-transparent hover:border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <input 
                  type="text" 
                  placeholder="Enter custom amount (₹)" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-3.5 text-center text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#dc4c3e]/20 focus:border-[#dc4c3e] transition-all placeholder:text-gray-400"
                />
              </div>

              <button className="w-full bg-[#dc4c3e] hover:bg-[#c94134] text-white font-bold py-4 rounded-lg transition-colors mb-5">
                Donate Now
              </button>

              <div className="flex items-center justify-center gap-2 text-slate-800">
                <Lock className="w-3.5 h-3.5" strokeWidth={3} />
                <span className="text-[11px] font-bold uppercase tracking-wide">100% Secure Donation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Donation;