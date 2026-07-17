import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import { blogPosts } from '../data/blogData';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  CheckCircle2,
  ArrowUpRight,
  Quote
} from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find article by id or slug
  const post = blogPosts.find(
    (item) => item.id.toString() === id || item.slug === id
  );

  // If not found, default to first post or show not found
  const currentPost = post || blogPosts[0];

  // Related articles (same category or next ones, excluding current)
  const relatedPosts = blogPosts
    .filter((item) => item.id !== currentPost.id)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!post && !blogPosts[0]) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h2>
        <Link
          to="/blog"
          className="px-6 py-3 bg-[#DF4A43] text-white rounded-xl font-medium"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  // Helper to render markdown-like content cleanly with headers and blockquotes
  const renderFormattedContent = (contentString) => {
    return contentString
      .trim()
      .split('\n\n')
      .map((paragraph, idx) => {
        const trimmed = paragraph.trim();

        if (trimmed.startsWith('### ')) {
          return (
            <h3
              key={idx}
              className="text-2xl md:text-3xl font-bold text-[#1c222e] mt-10 mb-4 tracking-tight"
            >
              {trimmed.replace('### ', '')}
            </h3>
          );
        }
        if (trimmed.startsWith('#### ')) {
          return (
            <h4
              key={idx}
              className="text-xl md:text-2xl font-bold text-[#1c222e] mt-8 mb-3 tracking-tight"
            >
              {trimmed.replace('#### ', '')}
            </h4>
          );
        }
        if (trimmed.startsWith('> ')) {
          const quoteText = trimmed.replace('> ', '').replace(/\*/g, '');
          return (
            <blockquote
              key={idx}
              className="my-8 p-6 md:p-8 bg-linear-to-r from-[#DF4A43]/10 via-[#DF4A43]/5 to-transparent border-l-4 border-[#DF4A43] rounded-r-2xl italic text-gray-800 text-lg md:text-xl font-serif shadow-xs"
            >
              <div className="flex gap-3">
                <Quote size={28} className="text-[#DF4A43] shrink-0 opacity-80" />
                <span>{quoteText}</span>
              </div>
            </blockquote>
          );
        }
        if (trimmed.startsWith('- ')) {
          const items = trimmed.split('\n- ').map((item) => item.replace('- ', ''));
          return (
            <ul key={idx} className="my-6 space-y-3 pl-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 text-base md:text-lg leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-[#DF4A43] mt-2.5 shrink-0"></span>
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>') }} />
                </li>
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(trimmed)) {
          const items = trimmed.split(/\n\d+\.\s/).filter(Boolean);
          return (
            <ol key={idx} className="my-6 space-y-4 pl-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 text-gray-700 text-base md:text-lg leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-[#DF4A43]/15 text-[#DF4A43] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>') }} />
                </li>
              ))}
            </ol>
          );
        }

        return (
          <p
            key={idx}
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-normal"
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
            }}
          />
        );
      });
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-24">
      {/* Hero Banner */}
      <Hero title="Article Insight" currentPage={currentPost.title.slice(0, 25) + '...'} />

      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-12">
        {/* Back Link */}
        <div className="post-anim mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#DF4A43] transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Blogs</span>
          </Link>
        </div>

        {/* Article Header */}
        <div className="post-anim bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="px-4 py-1.5 bg-[#DF4A43] text-white text-xs md:text-sm font-semibold rounded-full shadow-sm">
              {currentPost.category}
            </span>

            <div className="flex items-center gap-4 text-xs md:text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-[#DF4A43]" />
                {currentPost.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-[#DF4A43]" />
                {currentPost.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c222e] leading-tight mb-8">
            {currentPost.title}
          </h1>

          {/* Author Box & Share Buttons */}
          <div className="flex flex-wrap items-center justify-between pt-6 border-t border-gray-100 gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={currentPost.author.avatar}
                alt={currentPost.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#DF4A43]/20 shadow-sm"
              />
              <div>
                <h4 className="text-base font-bold text-gray-900 leading-none mb-1">
                  {currentPost.author.name}
                </h4>
                <p className="text-xs text-gray-500 leading-none">
                  {currentPost.author.role} • Ek Kaam Desh Ke Naam
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              >
                {copied ? <CheckCircle2 size={16} className="text-green-600" /> : <Share2 size={16} />}
                <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="post-anim rounded-3xl overflow-hidden shadow-2xl mb-12 max-h-[500px] border border-gray-200/60">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content Body */}
        <article className="post-anim bg-white rounded-3xl p-8 sm:p-14 border border-gray-200/80 shadow-md mb-16">
          <div className="prose max-w-none">
            <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-8 pb-6 border-b border-gray-100 italic">
              {currentPost.excerpt}
            </p>
            {renderFormattedContent(currentPost.content)}
          </div>

          {/* Post Footer CTA */}
          <div className="mt-14 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#f8f9fa] p-6 rounded-2xl">
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">Inspired by this story?</h4>
              <p className="text-sm text-gray-600">Your contribution helps us continue this vital work across India.</p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#DF4A43] hover:bg-[#d83c3c] text-white font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              Support Our Mission →
            </Link>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <div className="post-anim mt-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold text-[#DF4A43] uppercase tracking-wider">Explore More</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1c222e] mt-1">
                  Related Stories & Updates
                </h3>
              </div>
              <Link
                to="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#DF4A43] hover:underline"
              >
                <span>View All Blogs</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <div
                  key={relPost.id}
                  onClick={() => {
                    navigate(`/blog/${relPost.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={relPost.image}
                      alt={relPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium rounded-full">
                      {relPost.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[11px] text-gray-500 font-medium mb-2">
                      <span>{relPost.date}</span>
                      <span>•</span>
                      <span>{relPost.readTime}</span>
                    </div>
                    <h4 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#DF4A43] transition-colors line-clamp-2">
                      {relPost.title}
                    </h4>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#DF4A43]">
                    <span>Read Story</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
