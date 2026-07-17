import { useState, useMemo } from 'react';
import {  useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { blogPosts } from '../data/blogData';
import {
  Search,
  Calendar,
  Clock,
  ArrowUpRight,
  BookOpen,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const categories = [
  'All',
  'Education & Literacy',
  'Nutrition & Health',
  'Community Care',
  'Sustainability',
  'Empowerment'
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const navigate = useNavigate();

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24">
      {/* Hero Banner */}
      <Hero title="Our Blog & Insights" currentPage="Blog" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-16">
        {/* Top Header & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#DF4A43]/10 text-[#DF4A43] rounded-full text-sm font-semibold mb-3 border border-[#DF4A43]/20">
              <Sparkles size={14} />
              <span>Stories From The Ground</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c222e] leading-tight">
              Explore Articles & Updates
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search articles, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:border-[#DF4A43] focus:ring-2 focus:ring-[#DF4A43]/10 transition-all text-[15px] shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs bg-gray-100 px-2 py-1 rounded-md text-gray-600 hover:bg-gray-200"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="blog-header-anim flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#DF4A43] text-white shadow-md shadow-[#DF4A43]/25 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80 shadow-xs'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Articles Found</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              We couldn't find any articles matching "{searchQuery}" in this category. Try adjusting your search keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2.5 bg-[#DF4A43] text-white rounded-xl font-medium hover:bg-[#d83c3c] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Featured Post (Hero Card) */}
        {featuredPost && (
          <div
            onClick={() => navigate(`/blog/${featuredPost.id}`)}
            className="blog-card-anim group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer mb-12 grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-[#DF4A43] text-white text-xs font-semibold rounded-full shadow-md">
                  Featured • {featuredPost.category}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#DF4A43]" />
                    {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#DF4A43]" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-[#1c222e] mb-4 leading-tight group-hover:text-[#DF4A43] transition-colors">
                  {featuredPost.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#DF4A43]/20"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 leading-none mb-1">
                      {featuredPost.author.name}
                    </h4>
                    <p className="text-xs text-gray-500 leading-none">
                      {featuredPost.author.role}
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#DF4A43] group-hover:translate-x-1 transition-transform">
                  <span>Read Story</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Articles Grid */}
        {gridPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {gridPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="blog-card-anim group bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-[#DF4A43]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock size={13} className="text-[#DF4A43]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#1c222e] mb-3 leading-snug group-hover:text-[#DF4A43] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-gray-200"
                    />
                    <span className="text-xs font-semibold text-gray-800">
                      {post.author.name}
                    </span>
                  </div>

                  <div className="inline-flex items-center text-xs font-bold text-[#DF4A43] group-hover:translate-x-1 transition-transform">
                    <span>Read →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Newsletter Banner */}
        <div className="blog-card-anim bg-linear-to-br from-[#1B2230] to-[#2A3446] rounded-3xl p-8 md:p-14 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#DF4A43]/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-[#DF4A43] rounded-full text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              Stay Informed
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Subscribe to Our Impact Newsletter
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              Receive monthly updates, heartwarming field stories, and news about our initiatives directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#DF4A43] focus:bg-white/15 transition-all text-sm"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#DF4A43] hover:bg-[#d83c3c] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm whitespace-nowrap"
              >
                {isSubscribed ? 'Subscribed! ✓' : 'Subscribe Now'}
              </button>
            </form>

            {isSubscribed && (
              <div className="mt-4 inline-flex items-center gap-2 text-green-400 text-sm font-medium animate-fade-in">
                <CheckCircle2 size={16} />
                <span>Thank you for joining our community newsletter!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
