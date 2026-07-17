import { ArrowUpRight, Phone, Calendar, Clock } from 'lucide-react';
import avatarImg from '../assets/avatar.png';
import { Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const OurCauses = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f8f9fa] py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DF4A43] rounded-full text-sm font-semibold text-white mb-6 shadow-sm border border-gray-100">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Our Blog
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c222e] leading-[1.1]">
              Insightful Stories &<br className="hidden md:block" /> Impact Updates
            </h2>
          </div>

          <div className="max-w-md lg:mt-4">
            <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
              Explore real stories from the field, educational insights, and updates on how your contributions are transforming children's lives across the nation.
            </p>
            <Link to='/blog' className="inline-flex items-center gap-4 bg-[#e94545] text-white pl-6 pr-1.5 py-1.5 rounded-lg font-medium hover:bg-[#d83c3c] transition-colors shadow-md">
              View All Blogs
              <span className="bg-white text-gray-700 p-2 rounded-md">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="group relative rounded-3xl overflow-hidden h-[420px] md:h-[480px] shadow-lg cursor-pointer flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
            >
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#141820]/95 via-[#141820]/45 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-medium border border-white/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-white/80 text-xs bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-white/70 text-xs mb-3">
                    <Calendar size={13} className="text-[#DF4A43]" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl md:text-[22px] font-bold text-white mb-4 leading-snug group-hover:-translate-y-1 transition-transform duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-white font-medium hover:text-[#DF4A43] group/link transition-colors">
                    <span>Read Article</span>
                    <ArrowUpRight size={18} className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 text-[#DF4A43]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="relative flex items-center">
            <img src={avatarImg} alt="User Avatar" className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" />
            <div className="w-7 h-7 rounded-full bg-[#e94545] text-white flex items-center justify-center border-2 border-white -ml-3 z-10 shadow-sm">
              <Phone size={12} fill="currentColor" />
            </div>
          </div>
          <p className="text-gray-700 font-medium text-[15px]">
            Want to share a story or contribute an article? <Link to="/contact" className="text-[#e94545] underline decoration-[#e94545] underline-offset-4 font-semibold hover:text-[#d83c3c]">Contact Us</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurCauses;