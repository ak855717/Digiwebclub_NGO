
import { Layers, Binoculars, ArrowUpRight } from 'lucide-react'
import image1 from '../assets/home/image (6).jpg';
import image2 from '../assets/home/image (7).jpeg';
import image3 from '../assets/home/image (8).jpg';

const AboutUs = () => {
  return (
    <section className="py-16 md:py-15 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left side: Images Collage */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 h-[600px]">
            {/* Decorative Background Shade & Glow */}
            <div className="absolute top-[8%] right-[2%] w-[80%] h-[88%] bg-linear-to-br from-[#DF4A43]/15 via-orange-400/10 to-transparent rounded-[40px] -rotate-6 z-0 blur-xl"></div>
            <div className="absolute top-[10%] left-[-5%] w-[92%] h-[72%] bg-gray-200/70 rounded-[40px] z-10 border border-gray-300/50 shadow-inner"></div>

            {/* Top right image */}
            <img
              src={image1}
              className="absolute top-0 right-0 w-[55%] h-[40%] object-cover rounded-4xl z-20 shadow-[0_20px_45px_rgba(0,0,0,1.15)] border-8 border-white hover:scale-[1.02] transition-transform duration-300"
              alt="EKDKN Activity"
            />

            {/* Middle left image */}
            <img
              src={image2}
              className="absolute top-[22%] left-10 w-[65%] h-[46%] object-cover rounded-4xl z-30 shadow-[0_25px_50px_rgba(0,0,0,1.2)] border-8 border-white hover:scale-[1.02] transition-transform duration-300"
              alt="EKDKN Volunteer"
            />

            {/* Bottom image */}
            <img
              src={image3}
              className="absolute bottom-12 -left-15 w-[50%] h-[38%] object-cover rounded-4xl z-40 shadow-[0_20px_45px_rgba(0,0,0,1.15)] border-8 border-white hover:scale-[1.02] transition-transform duration-300"
              alt="EKDKN Education"
            />
          </div>

          {/* Right side: Content */}
          <div className="flex flex-col">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-slate-800 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DF4A43]"></span>
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[35px] font-bold text-[#DF4A43] mb-6 leading-[1.25]">
                ABOUT SUSTAINABLE DEVELOPMENT MISSION
              </h2>
              <p className="text-gray-500 text-md">
                The Sustainable Development Mission (SDM), a specialized unit of EKDKN has undertaken the prestigious initiative of instituting the EXCEED Awards to recognize and honour exemplary contributions made by Corporate Organizations and Institutions. These awards acknowledge excellence in the fields of Environment, Occupational Health & Safety (EHS), Renewable Energy, Human Resources (HR), and Corporate Social Responsibility (CSR).
              </p>
            </div>

            {/* Feature box */}
            <div className="p-8 md:p-10">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-[#DF4A43] rounded-full flex items-center justify-center text-white">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Literacy & Numeracy Enhancement</h3>
                  <p className="text-gray-500 text-md">
                    Through the DAKSH Initiative, we aim to reduce educational inequalities and improve the educational status of children residing in impoverished slums.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 mt-6">
                <div className="shrink-0 w-12 h-12 bg-[#DF4A43] rounded-full flex items-center justify-center text-white">
                  <Binoculars className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Sustainable Environment</h3>
                  <p className="text-gray-500 text-md">
                    With the Delhi Replantation Initiative (DRI), we conduct plantation drives across barren lands, parks, schools, and institutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Action area */}
            <div className="flex flex-wrap items-center gap-8 border-t-2 border-gray-200 pt-6">
              <button className="flex items-center gap-4 bg-[#D34646] text-white pr-1.5 pl-6 py-1.5 rounded-xl hover:bg-[#c23d3d] transition-colors font-semibold">
                More About Us
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

export default AboutUs