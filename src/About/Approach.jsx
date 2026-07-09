import React from 'react';
import { Target, Award, Heart, PhoneCall, Star } from 'lucide-react';
import missionImg from '../assets/healthcare.png';
import visionImg from '../assets/hunger_relief.png';
import valuesImg from '../assets/home/image (2).jpeg';
import avatarImg from '../assets/avatar.png';

const Approach = () => {
  const cards = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Our Mission',
      image: missionImg,
      description:
        'Our mission is to create meaningful and change by providing access to education, health care, food & essential resources',
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Our Vision',
      image: visionImg,
      description:
        'Our vision is to create a world where every individual has access to basic needs, equal opportunities.',
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: 'Our Values',
      image: valuesImg,
      description:
        'Driven by purpose & guided by strong principles, our values inspire us to act with kindness, responsibility and dedication.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D33D33]"></span>
            Our Approach
          </div>

          {/* Title */}
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1A202C] tracking-tight leading-tight">
            Smart solutions for real impact
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Smart solutions for real impact, we combine innovative strategies with community-driven programs to address critical needs effectively.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 sm:mt-14 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F8F9FA] rounded-[28px] p-6 sm:p-7 border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Card Header (Icon + Title) */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#D33D33] text-white flex items-center justify-center shrink-0 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-[#1A202C]">
                  {card.title}
                </h3>
              </div>

              {/* Card Image */}
              <div className="mt-5 w-full h-[200px] sm:h-[210px] rounded-2xl overflow-hidden shadow-xs">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Description */}
              <p className="mt-5 text-gray-600 text-sm sm:text-[14.5px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA / Trust Row */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center justify-center gap-4">
          {/* Top Line: Avatar + Phone + Quote Text */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-center">
            <div className="flex items-center -space-x-2">
              <img
                src={avatarImg}
                alt="Representative"
                className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-xs"
              />
              <div className="w-8 h-8 rounded-full bg-[#D33D33] text-white flex items-center justify-center shadow-xs border-2 border-white">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
            </div>
            <span className="text-gray-700 text-sm sm:text-base font-medium ml-1">
              Let&apos;s make something great work together.
            </span>
            <a
              href="#contact"
              className="text-[#D33D33] font-semibold text-sm sm:text-base underline underline-offset-4 hover:text-[#b9352c] transition-colors"
            >
              Get Free Quote
            </a>
          </div>

          {/* Bottom Line: Trusted By + Rating */}
          <div className="flex flex-wrap items-center justify-center text-sm sm:text-[15px] text-gray-600">
            <span>
              Trusted By <strong className="font-semibold text-gray-900">58,900+</strong> Users
            </span>
            <span className="w-px h-4 bg-gray-300 mx-3.5 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1 text-[#D33D33] mt-1 sm:mt-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D33D33] text-[#D33D33]" />
              ))}
            </div>
            <span className="font-semibold text-gray-900 ml-2">4.9/5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
