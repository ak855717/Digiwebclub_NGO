import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Hero from '../components/Hero';
import {
    Maximize2,
    X,
    ChevronLeft,
    ChevronRight,
    Eye,
    Play,
    Pause,
    Sparkles,
    Image as ImageIcon,
    ArrowUpRight,
} from 'lucide-react';

// Dynamically import all images from src/assets/Gallery
const galleryGlob = import.meta.glob('../assets/Gallery/*.{webp,png,jpg,jpeg,WEBP,PNG,JPG,JPEG}', { eager: true });

// Deduplicate files by stem name (preferring .webp over .jpeg/.png)
const rawEntries = Object.entries(galleryGlob);
const stemMap = new Map();

rawEntries.forEach(([path, mod]) => {
    const filename = path.split('/').pop() || '';
    const stem = filename.replace(/\.[^/.]+$/, '');
    const src = typeof mod === 'string' ? mod : mod?.default || '';
    const ext = filename.split('.').pop()?.toLowerCase() || '';

    if (!stemMap.has(stem)) {
        stemMap.set(stem, { path, filename, src, ext });
    } else {
        // If we already have this stem, prefer .webp
        const existing = stemMap.get(stem);
        if (ext === 'webp' && existing.ext !== 'webp') {
            stemMap.set(stem, { path, filename, src, ext });
        }
    }
});

// Build rich gallery items
const galleryItems = Array.from(stemMap.values()).map((item, idx) => {
    const index = idx + 1;

    const year = index % 2 === 0 ? '2024' : '2025';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Oct', 'Nov', 'Dec'];
    const month = months[idx % months.length];

    return {
        id: index,
        src: item.src,
        filename: item.filename,
        date: `${month} ${year}`,
        featured: index <= 5
    };
});

const Gallery = () => {
    const [gridCols, setGridCols] = useState(3); // 2, 3, or 4
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);

    // --- GSAP refs ---
    const headerCardRef = useRef(null);
    const momentsStatRef = useRef(null);
    const showcaseRef = useRef(null);
    const emptyStateRef = useRef(null);
    const lightboxRef = useRef(null);
    const lightboxImgRef = useRef(null);
    const prevLightboxIndexRef = useRef(null);

    // Active item in Lightbox
    const activeItem = lightboxIndex !== null ? galleryItems[lightboxIndex] : null;

    // Slideshow interval
    useEffect(() => {
        let interval;
        if (isSlideshowPlaying && lightboxIndex !== null && galleryItems.length > 1) {
            interval = setInterval(() => {
                setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
            }, 3500);
        }
        return () => clearInterval(interval);
    }, [isSlideshowPlaying, lightboxIndex]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') {
                setLightboxIndex(null);
                setIsSlideshowPlaying(false);
            }
            if (e.key === 'ArrowRight') {
                setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
            }
            if (e.key === 'ArrowLeft') {
                setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
            }
            if (e.key === ' ') {
                e.preventDefault();
                setIsSlideshowPlaying((prev) => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex]);

    // --- GSAP: page-load intro (header card, pillar mini-cards, moments counter) ---
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from(headerCardRef.current, { y: 36, opacity: 0, duration: 0.7 }).from(
                '.pillar-card',
                { y: 18, opacity: 0, duration: 0.5, stagger: 0.08 },
                '-=0.35'
            );

            if (momentsStatRef.current) {
                const counter = { val: 0 };
                gsap.to(counter, {
                    val: galleryItems.length,
                    duration: 1.2,
                    ease: 'power2.out',
                    delay: 0.25,
                    onUpdate: () => {
                        momentsStatRef.current.textContent = `${Math.round(counter.val)}+`;
                    },
                });
            }
        }, headerCardRef);

        return () => ctx.revert();
    }, []);

    // --- GSAP: stagger-reveal gallery cards whenever the visible set changes ---
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.gallery-card', showcaseRef.current);
            if (cards.length) {
                gsap.fromTo(
                    cards,
                    { opacity: 0, y: 26, scale: 0.96 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.5,
                        ease: 'power3.out',
                        stagger: 0.06,
                        overwrite: 'auto',
                    }
                );
            }

            if (galleryItems.length === 0 && emptyStateRef.current) {
                gsap.fromTo(
                    emptyStateRef.current,
                    { opacity: 0, y: 16 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
                );
            }
        }, showcaseRef);

        return () => ctx.revert();
    }, [gridCols]);

    // --- GSAP: lightbox open + slide-to-slide crossfade ---
    useLayoutEffect(() => {
        if (lightboxIndex === null) {
            prevLightboxIndexRef.current = null;
            return;
        }

        const isOpening = prevLightboxIndexRef.current === null;

        const ctx = gsap.context(() => {
            if (isOpening) {
                gsap.fromTo(
                    lightboxRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.3, ease: 'power2.out' }
                );
                gsap.fromTo(
                    '.lightbox-inner',
                    { opacity: 0, scale: 0.95, y: 16 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'power3.out', delay: 0.05 }
                );
            } else if (lightboxImgRef.current) {
                gsap.fromTo(
                    lightboxImgRef.current,
                    { opacity: 0, scale: 1.03 },
                    { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out', overwrite: 'auto' }
                );
            }
        }, lightboxRef);

        prevLightboxIndexRef.current = lightboxIndex;
        return () => ctx.revert();
    }, [lightboxIndex]);

    return (
        <div className="bg-[#FAFBFC] min-h-screen text-[#1A202C]">
            {/* Hero Section */}
            <Hero title="Moments of Impact & Transformation" currentPage="Gallery" />


            {/* Top Interactive Feature Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-20">
                <div ref={headerCardRef} className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-gray-100/80 p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#D33D33] to-[#b9352c] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#D33D33]/25">
                                <ImageIcon className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-[#D33D33] uppercase tracking-wider">
                                        <Sparkles className="w-3.5 h-3.5" /> EKDKN Visual Archives
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1.5">
                                    Our Journey Through the Lens
                                </h2>
                                <p className="text-gray-500 text-sm md:text-base mt-1 max-w-2xl">
                                    Explore real moments captured across India—from occupational safety summits to green reforestation drives and community outreach programs.
                                </p>
                            </div>
                        </div>

                        {/* Impact Stats Pillars */}
                        <div className="flex justify-center items-center gap-6 bg-gray-50/80 p-4 sm:px-6 sm:py-4 rounded-2xl border border-gray-100 w-full lg:w-auto">
                            <div className="text-center">
                                <div ref={momentsStatRef} className="text-xl sm:text-2xl font-black text-[#D33D33]">0+</div>
                                <div className="text-[11px] sm:text-xs font-semibold text-gray-500">Moments</div>
                            </div>
                            <div className="w-px h-10 bg-gray-200 mx-auto" />
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-black text-gray-800">4</div>
                                <div className="text-[11px] sm:text-xs font-semibold text-gray-500">Key Pillars</div>
                            </div>
                            <div className="w-px h-10 bg-gray-200 mx-auto" />
                            <div className="text-center">
                                <div className="text-xl sm:text-2xl font-black text-gray-800">Pan-India</div>
                                <div className="text-[11px] sm:text-xs font-semibold text-gray-500">Coverage</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls Bar: Grid Layout Selector */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
                <div className="flex justify-end pb-6 border-b border-gray-200">
                    {/* Grid Columns Toggle */}
                    <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-2xs">
                        <button
                            onClick={() => setGridCols(2)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                                gridCols === 2 ? 'bg-[#D33D33] text-white' : 'text-gray-500 hover:text-gray-800'
                            }`}
                        >
                            2 Col
                        </button>
                        <button
                            onClick={() => setGridCols(3)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                                gridCols === 3 ? 'bg-[#D33D33] text-white' : 'text-gray-500 hover:text-gray-800'
                            }`}
                        >
                            3 Col
                        </button>
                        <button
                            onClick={() => setGridCols(4)}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                                gridCols === 4 ? 'bg-[#D33D33] text-white' : 'text-gray-500 hover:text-gray-800'
                            }`}
                        >
                            4 Col
                        </button>
                    </div>
                </div>
            </div>

            {/* MAIN GALLERY SHOWCASE AREA */}
            <div ref={showcaseRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                {galleryItems.length === 0 ? (
                    <div ref={emptyStateRef} className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-xs">
                        <ImageIcon className="w-14 h-14 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-gray-700">No photos found</h3>
                    </div>
                ) : (
                    /* GRID VIEW MODE (Customizable 2 / 3 / 4 Columns) */
                    <div
                        className={`grid grid-cols-1 sm:grid-cols-2 ${
                            gridCols === 2
                                ? 'lg:grid-cols-2'
                                : gridCols === 4
                                ? 'lg:grid-cols-4'
                                : 'lg:grid-cols-3'
                        } gap-6 md:gap-8`}
                    >
                        {galleryItems.map((item, index) => (
                            <GalleryCard
                                key={item.id}
                                item={item}
                                index={index}
                                onClick={() => setLightboxIndex(index)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Call to Action Banner */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="bg-linear-to-r from-[#1A2130] via-[#242D40] to-[#1A2130] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-64 h-64 bg-[#D33D33]/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="max-w-2xl relative z-10">
                        <span className="px-3.5 py-1.5 bg-[#D33D33] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                            Join Our Mission
                        </span>
                        <h3 className="text-2xl md:text-3xl font-extrabold mt-4">
                            Be Part of the Next Transformative Moment
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed">
                            Whether through CSR collaborations, volunteering, or donating towards safety education and environmental protection—your contribution creates real lasting change.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 shrink-0 relative z-10">
                        <a
                            href="/contact"
                            className="px-7 py-3.5 bg-[#D33D33] hover:bg-[#b9352c] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#D33D33]/30 text-sm"
                        >
                            Partner With Us
                        </a>
                        <a
                            href="/ourCSR"
                            className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors text-sm border border-white/20"
                        >
                            Explore CSR Programs
                        </a>
                    </div>
                </div>
            </div>

            {/* FULL-SCREEN IMMERSIVE LIGHTBOX MODAL */}
            {activeItem && (
                <div
                    ref={lightboxRef}
                    className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl select-none"
                    onClick={() => {
                        setLightboxIndex(null);
                        setIsSlideshowPlaying(false);
                    }}
                >
                    <div className="lightbox-inner h-full w-full flex flex-col justify-between">
                        {/* Top Header Controls */}
                        <div
                            className="flex items-center justify-between px-6 py-4 bg-linear-to-b from-black/80 to-transparent z-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold text-gray-300">
                                    {lightboxIndex + 1} / {galleryItems.length}
                                </span>
                            </div>

                            {/* Top Right Action Bar */}
                            <div className="flex items-center gap-2.5">
                                {/* Slideshow Toggle Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsSlideshowPlaying(!isSlideshowPlaying);
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                                        isSlideshowPlaying
                                            ? 'bg-[#D33D33] text-white shadow-lg shadow-[#D33D33]/40 animate-pulse'
                                            : 'bg-white/10 hover:bg-white/20 text-white'
                                    }`}
                                    title="Autoplay Slideshow (Spacebar)"
                                >
                                    {isSlideshowPlaying ? (
                                        <>
                                            <Pause className="w-3.5 h-3.5" />
                                            <span>Pause Slideshow</span>
                                        </>
                                    ) : (
                                        <>
                                            <Play className="w-3.5 h-3.5" />
                                            <span>Autoplay</span>
                                        </>
                                    )}
                                </button>

                                {/* Close Window Button */}
                                <button
                                    onClick={() => {
                                        setLightboxIndex(null);
                                        setIsSlideshowPlaying(false);
                                    }}
                                    className="p-2.5 rounded-full bg-white/10 hover:bg-red-600 text-white transition-colors ml-2"
                                    title="Close (Escape)"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Main Image Viewport */}
                        <div
                            className="relative flex-1 flex items-center justify-center px-4 overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Navigation Left Arrow */}
                            {galleryItems.length > 1 && (
                                <button
                                    onClick={() =>
                                        setLightboxIndex(
                                            (prev) => (prev - 1 + galleryItems.length) % galleryItems.length
                                        )
                                    }
                                    className="absolute left-4 md:left-8 p-3.5 rounded-full bg-black/50 hover:bg-[#D33D33] text-white border border-white/10 transition-all duration-200 z-20 shadow-xl"
                                    title="Previous Photo (Left Arrow)"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                            )}

                            {/* Image Container */}
                            <div className="max-w-6xl max-h-[70vh] flex items-center justify-center">
                                <img
                                    ref={lightboxImgRef}
                                    src={activeItem.src}
                                    alt={`Gallery photo #${activeItem.id}`}
                                    className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                                />
                            </div>

                            {/* Navigation Right Arrow */}
                            {galleryItems.length > 1 && (
                                <button
                                    onClick={() =>
                                        setLightboxIndex((prev) => (prev + 1) % galleryItems.length)
                                    }
                                    className="absolute right-4 md:right-8 p-3.5 rounded-full bg-black/50 hover:bg-[#D33D33] text-white border border-white/10 transition-all duration-200 z-20 shadow-xl"
                                    title="Next Photo (Right Arrow)"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            )}
                        </div>

                        {/* Bottom Info Bar + Thumbnail Strip Navigation */}
                        <div
                            className="bg-linear-to-t from-black/95 via-black/80 to-transparent pt-6 pb-6 px-6 z-20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Photo Details */}
                            <div className="max-w-4xl mx-auto text-center mb-5">
                                <div className="text-white text-base md:text-lg font-semibold flex items-center justify-center gap-2">
                                    <span>Photo #{activeItem.id}</span>
                                    <span className="text-white/40">•</span>
                                    <span className="text-white/80">{activeItem.date}</span>
                                </div>
                            </div>

                            {/* Thumbnail Strip */}
                            <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 overflow-x-auto pb-2 px-2 scrollbar-none">
                                {galleryItems.map((thumb, idx) => {
                                    const isCurrent = idx === lightboxIndex;
                                    return (
                                        <button
                                            key={thumb.id}
                                            onClick={() => setLightboxIndex(idx)}
                                            className={`relative w-14 h-11 md:w-16 md:h-12 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${
                                                isCurrent
                                                    ? 'ring-2 ring-[#D33D33] scale-110 opacity-100'
                                                    : 'opacity-40 hover:opacity-80 scale-95'
                                            }`}
                                        >
                                            <img
                                                src={thumb.src}
                                                alt={`Thumbnail #${thumb.id}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Reusable Photo Card Component
const GalleryCard = ({ item, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="gallery-card group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col"
        >
            {/* Image & Interactive Badges */}
            <div className="relative aspect-4/3 bg-gray-100 overflow-hidden">
                <img
                    src={item.src}
                    alt={`Gallery photo #${item.id}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                />

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <div className="flex items-center justify-between text-white">
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-200">
                            <Eye className="w-4 h-4 text-[#D33D33]" />
                            Click to Expand
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#D33D33] flex items-center justify-center text-white shadow-md">
                                <Maximize2 className="w-3.5 h-3.5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Content Footer */}
            <div className="p-4 bg-white flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-800">Photo #{item.id}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400 font-medium">{item.date}</span>
                </div>
                <span className="text-[#D33D33] font-semibold group-hover:underline flex items-center gap-1">
                    View <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
            </div>
        </div>
    );
};

export default Gallery;