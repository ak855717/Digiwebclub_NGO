import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import {
    Maximize2,
    X,
    ChevronLeft,
    ChevronRight,
    Newspaper,
    Eye,
    Sparkles,
    Calendar
} from 'lucide-react';

// Import all media images dynamically from src/assets/media
const mediaGlob = import.meta.glob('../assets/media/*.{webp,png,jpg,jpeg,WEBP,PNG,JPG,JPEG}', { eager: true });

const mediaItems = Object.entries(mediaGlob).map(([path, mod], idx) => {
    const src = typeof mod === 'string' ? mod : mod?.default || '';
    const index = idx + 1;

    const year = index % 2 === 0 ? '2024' : '2025';
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Nov', 'Dec'][index % 7];

    return {
        id: index,
        src,
        filename: path.split('/').pop(),
        date: `${month} ${year}`,
        featured: index <= 4
    };
});

const Media = () => {
    const [viewCols, setViewCols] = useState(3); // 2, 3, or 4 columns
    const [lightboxIndex, setLightboxIndex] = useState(null);

    // Keyboard controls for Lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') {
                setLightboxIndex((prev) => (prev + 1) % mediaItems.length);
            }
            if (e.key === 'ArrowLeft') {
                setLightboxIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

    const activeItem = lightboxIndex !== null ? mediaItems[lightboxIndex] : null;


    return (
        <div className="bg-[#FAFBFC] min-h-screen text-[#1A202C]">
            {/* Hero Banner */}
            <Hero title="Media Coverage & Press" currentPage="Media" />

            {/* Top Professional Summary Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-[#D33D33]/10 flex items-center justify-center text-[#D33D33] shrink-0">
                            <Newspaper className="w-7 h-7" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-[#D33D33] uppercase tracking-wider">
                                    <Sparkles className="w-3.5 h-3.5" /> Press & Publications
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1">
                                EKDKN Foundation in the News
                            </h2>
                            <p className="text-gray-500 text-sm md:text-base mt-1">
                                Discover our national media features, newspaper articles, and press clippings highlighting our CSR and safety initiatives.
                            </p>
                        </div>
                    </div>

                    {/* Stats Pill */}
                    <div className="flex items-center gap-6 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 shrink-0">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-[#D33D33]">{mediaItems.length}+</div>
                            <div className="text-xs font-medium text-gray-500">Press Clippings</div>
                        </div>
                        <div className="w-px h-10 bg-gray-200" />
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">Pan-India</div>
                            <div className="text-xs font-medium text-gray-500">Media Reach</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls Bar: Grid Layout Selector */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
                <div className="flex justify-end pb-6 border-b border-gray-200">
                    {/* View Columns Toggle (Desktop) */}
                    <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-2xs">
                        <button
                            onClick={() => setViewCols(2)}
                            title="2 Columns"
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${viewCols === 2
                                    ? 'bg-[#1A2130] text-white'
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            2 Col
                        </button>
                        <button
                            onClick={() => setViewCols(3)}
                            title="3 Columns"
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${viewCols === 3
                                    ? 'bg-[#1A2130] text-white'
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            3 Col
                        </button>
                        <button
                            onClick={() => setViewCols(4)}
                            title="4 Columns"
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${viewCols === 4
                                    ? 'bg-[#1A2130] text-white'
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            4 Col
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Image Grid / Masonry Showcase */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 ${viewCols === 2
                            ? 'lg:grid-cols-2'
                            : viewCols === 4
                                ? 'lg:grid-cols-4'
                                : 'lg:grid-cols-3'
                        } gap-6 md:gap-8`}
                >
                    {mediaItems.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setLightboxIndex(index)}
                            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-4/3 bg-gray-100 overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={`Press Clipping #${item.id}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Top badges */}
                                <div className="absolute top-3 left-3 right-3 flex items-center justify-end pointer-events-none">
                                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-gray-800 text-[11px] font-bold rounded-full shadow-xs">
                                        #{item.id}
                                    </span>
                                </div>

                                {/* Hover Action Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                                    <div className="w-full flex items-center justify-between text-white">
                                        <span className="flex items-center gap-2 text-xs font-medium">
                                            <Eye className="w-4 h-4 text-[#D33D33]" />
                                            Click to View Full Size
                                        </span>
                                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-[#D33D33] transition-colors">
                                            <Maximize2 className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer / Details */}
                            <div className="p-4 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100">
                                <span className="flex items-center gap-1.5 font-medium text-gray-600">
                                    <Calendar className="w-3.5 h-3.5 text-[#D33D33]" />
                                    {item.date}
                                </span>
                                <span className="font-medium text-gray-400">Press Clippings Gallery</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Media Inquiry & Press Contact Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-linear-to-r from-[#1B2230] to-[#252E42] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
                    <div className="max-w-2xl">
                        <span className="px-3 py-1 bg-[#D33D33] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                            Media Inquiries
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mt-4">
                            Looking for Official Press Kits or Media Information?
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed">
                            Journalists, news agencies, and publishers can reach out to our media relations team for official press releases, high-resolution logos, and conference photographs.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                        <a
                            href="/contact"
                            className="px-7 py-3.5 bg-[#D33D33] hover:bg-[#b9352c] text-white font-semibold rounded-full transition-colors shadow-lg shadow-[#D33D33]/30 text-sm"
                        >
                            Contact Media Desk
                        </a>
                    </div>
                </div>
            </div>

            {/* FULL-SCREEN PROFESSIONAL LIGHTBOX MODAL */}
            {activeItem && (
                <div
                    className="fixed inset-0 z-100 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
                    onClick={() => setLightboxIndex(null)}
                >
                    {/* Top Action Bar */}
                    <div
                        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-300">
                                {lightboxIndex + 1} of {mediaItems.length}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setLightboxIndex(null)}
                                className="p-2.5 rounded-full bg-white/10 hover:bg-red-600 text-white transition-colors"
                                title="Close window (Esc)"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Left & Right Navigation Arrows */}
                    {mediaItems.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(
                                        (prev) => (prev - 1 + mediaItems.length) % mediaItems.length
                                    );
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-10 hidden sm:flex"
                                title="Previous (Arrow Left)"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex((prev) => (prev + 1) % mediaItems.length);
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all z-10 hidden sm:flex"
                                title="Next (Arrow Right)"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </>
                    )}

                    {/* Main Image Display Box */}
                    <div
                        className="max-w-5xl max-h-[82vh] w-full flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative max-h-[72vh] overflow-hidden rounded-xl bg-black/40 border border-white/10 shadow-2xl flex items-center justify-center">
                            <img
                                src={activeItem.src}
                                alt={`Press Clipping #${activeItem.id}`}
                                className="max-h-[72vh] max-w-full object-contain mx-auto"
                            />
                        </div>

                        {/* Caption Bar below image */}
                        <div className="mt-4 text-center max-w-2xl px-4">
                            <p className="text-gray-400 text-xs md:text-sm mt-1">
                                Press Clipping #{activeItem.id} • {activeItem.date}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;
