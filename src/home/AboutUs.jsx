
import { Layers, Binoculars, ArrowUpRight } from 'lucide-react'
import image1 from '../assets/home/image (6).jpg';
import image2 from '../assets/home/image (7).jpeg';
import image3 from '../assets/home/image (8).jpg';
import image4 from '../assets/home/image (9).jpeg';
import image5 from '../assets/home/image (2).jpeg';

const AboutUs = () => {
  return (
    <section className="py-16 md:py-15 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left side: Images Collage */}
          <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 h-[600px]">
            {/* Top right image */}
            <img
              src={image1}
              className="absolute top-0 right-0 w-[55%] h-[40%] object-cover rounded-4xl z-20 shadow-sm border-8 border-[#FAFAFA]"
              alt="EKDKN Activity"
            />

            {/* Middle left image */}
            <img
              src={image2}
              className="absolute top-[22%] left-10 w-[65%] h-[46%] object-cover rounded-4xl z-30 shadow-sm border-8 border-[#FAFAFA]"
              alt="EKDKN Volunteer"
            />

            {/* Bottom image */}
            <img
              src={image3}
              className="absolute bottom-12 -left-15 w-[50%] h-[38%] object-cover rounded-4xl z-40 shadow-sm border-8 border-[#FAFAFA]"
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
              <h2 className="text-4xl md:text-[44px] font-bold text-slate-900 mb-6 leading-[1.2]">
                Support and Educate specially-abled and impoverished children.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Welcome to Ek Kaam Desh ke Naam. From grassroots initiatives to large scale community programs, we continue to grow with one purpose: to serve those in need with integrity and compassion.
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
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
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
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
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