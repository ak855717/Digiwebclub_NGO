import { GraduationCap, Award, Calendar, Users } from 'lucide-react';
import Img1 from '../assets/home/image (13).jpg';
import Img2 from '../assets/home/image (12).jpg';
import Img3 from '../assets/home/image (5).jpg';
import Img4 from '../assets/home/image (14).jpg';
import Img5 from '../assets/home/image (3).jpg';
import Img6 from '../assets/home/image (15).jpg';

const scholarshipImages = [
  {
    src: Img2,
    alt: 'Students standing indoors holding certificates posing for a group photo',
    title: 'Academic Excellence Awards',
    category: 'Scholarship Ceremony'
  },
  {
    src: Img3,
    alt: 'Large outdoor gathering with audience seated under tent listening to speakers',
    title: 'Community Assembly',
    category: 'Public Empowerment'
  },
  {
    src: Img4,

    alt: 'Dignitaries on stage presenting scholarship certificate to a young student',
    title: 'Formal Recognition',
    category: 'Student Achievement'
  },
  {
    src: Img5,

    alt: 'Speaker standing at podium addressing large crowd',
    title: 'Leadership & Motivation',
    category: 'Community Address'
  },
  {
    src: Img6,
    alt: 'Young student receiving certificate from community leaders',
    title: 'Youth Encouragement',
    category: 'Merit Award'
  },
  {
    src: Img1,
    alt: 'Female student receiving award at indoor ceremony',
    title: 'Empowering Girls',
    category: 'Education Support'
  }
];

const Section3 = () => {
  



  return (
    <section className="py-16 md:py-24 bg-[#F3F4F5] relative overflow-hidden" id="scholarships">
      {/* Decorative ambient gradients */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[#944A00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200/80 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#944A00] mb-4 shadow-2xs">
            <GraduationCap className="w-4 h-4 text-[#944A00]" />
            Education & Youth Support
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#191C1D] tracking-tight leading-tight mb-5">
            Annual Scholarship Distribution
          </h2>

          <p className="text-[#434749] text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            On 18th July 2017, Annual Scholarship of EKDKN provided to students destroyed 1984 riots. Student who done extremely in ther academics are awarded with scholarship. Family of these students not very strong (financially or academically) still they fight with their situation & shine like a star in their X10th CBSE Board.
          </p>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center gap-3 bg-white rounded-xl py-3 px-4 shadow-2xs border border-gray-100">
              <Calendar className="w-5 h-5 text-[#944A00] shrink-0" />
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Date Started</p>
                <p className="text-sm font-bold text-gray-800">18th July 2017</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 bg-white rounded-xl py-3 px-4 shadow-2xs border border-gray-100">
              <Award className="w-5 h-5 text-[#D33D33] shrink-0" />
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Academic Merit</p>
                <p className="text-sm font-bold text-gray-800">CBSE Board Achievers</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 bg-white rounded-xl py-3 px-4 shadow-2xs border border-gray-100">
              <Users className="w-5 h-5 text-[#181F21] shrink-0" />
              <div className="text-left">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Target Group</p>
                <p className="text-sm font-bold text-gray-800">Underprivileged Families</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2x3 Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {scholarshipImages.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200/80 bg-white p-2.5 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-60 sm:h-64 bg-gray-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="inline-block px-2.5 py-1 bg-[#944A00] text-white text-xs font-bold rounded-full w-fit mb-1.5">
                    {item.category}
                  </span>
                  <p className="text-white text-sm font-semibold leading-snug">
                    {item.title}
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

export default Section3;