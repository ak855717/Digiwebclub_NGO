import{ useState, useMemo, useEffect } from 'react';
import Hero from '../components/Hero';
import {
    Search,
    Maximize2,
    X,
    ChevronLeft,
    ChevronRight,
    Eye,
    Download,
    Play,
    Pause,
    Sparkles,
    LayoutGrid,
    Image as ImageIcon,
    ArrowUpRight,
    Award,
    Users,
    Leaf,
    ShieldCheck
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

// Category list with icons & descriptions
const categoriesList = [
    'All',
    'Workplace Safety',
    'Environment & Green',
    'Community & CSR',
    'Awards & Summits'
];

const titlesByCategory = {
    'Workplace Safety': [
        'National Occupational Health & Safety Workshop',
        'Industrial Safety & Emergency Response Drill',
        '360° Employee Welfare & Hazard Prevention Drive',
        'On-Site PPE & Workplace Hygiene Awareness Camp',
        'Safety First Leadership & Training Symposium',
        'Advanced Ergonomics & Fire Safety Seminar',
        'Industrial Hygiene & Risk Mitigation Summit'
    ],
    'Environment & Green': [
        'Mega Urban Forestry & Tree Plantation Drive',
        'Clean Green Industrial Corridor Initiative',
        'Eco-Restoration & Rainwater Harvesting Project',
        'Zero Waste & Biodiversity Conservation Campaign',
        'Sustainable Green Belt Development Program',
        'Environmental Protection Day Community Rally',
        'Carbon Neutrality & Green Tech Exhibition'
    ],
    'Community & CSR': [
        'Community Health Screening & Medical Camp',
        'Rural Youth Skill Development & Digital Training',
        'Women Empowerment & Livelihood Workshop',
        'Underprivileged Child Education & Support Drive',
        'Clean Water & Sanitation Outreach Mission',
        'Holistic Community Welfare & Relief Drive',
        'Community Nutrition & Health Awareness Drive'
    ],
    'Awards & Summits': [
        '17th EXCEED Annual Occupational Safety Awards',
        'National Leadership & Environmental Excellence Award',
        'CSR Best Practices & Innovation Conclave',
        'Pan-India Industrial Health Excellence Felicitation',
        'Annual Foundation Day & Honors Presentation',
        'Global Sustainability Leadership Panel Discussion',
        'National Impact Summit Keynote & Exhibition'
    ]
};

// Build rich gallery items
const galleryItems = Array.from(stemMap.values()).map((item, idx) => {
    const index = idx + 1;
    let category = 'Workplace Safety';
    if (index % 4 === 1) category = 'Workplace Safety';
    else if (index % 4 === 2) category = 'Environment & Green';
    else if (index % 4 === 3) category = 'Community & CSR';
    else category = 'Awards & Summits';

    const titles = titlesByCategory[category];
    const title = `${titles[idx % titles.length]} #${index}`;
    const year = index % 2 === 0 ? '2024' : '2025';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Oct', 'Nov', 'Dec'];
    const month = months[idx % months.length];

    return {
        id: index,
        src: item.src,
        filename: item.filename,
        category,
        title,
        date: `${month} ${year}`,
        featured: index <= 5
    };
});

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'spotlight'
    const [gridCols, setGridCols] = useState(3); // 2, 3, or 4
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);

    // Filtered & Sorted items
    const filteredItems = useMemo(() => {
        let list = galleryItems.filter((item) => {
            const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
            const matchesSearch =
                searchQuery.trim() === '' ||
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });


        return list;
    }, [selectedCategory, searchQuery]);

    // Active item in Lightbox
    const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

    // Slideshow interval
    useEffect(() => {
        let interval;
        if (isSlideshowPlaying && lightboxIndex !== null && filteredItems.length > 1) {
            interval = setInterval(() => {
                setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
            }, 3500);
        }
        return () => clearInterval(interval);
    }, [isSlideshowPlaying, lightboxIndex, filteredItems.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') {
                setLightboxIndex(null);
                setIsSlideshowPlaying(false);
            }
            if (e.key === 'ArrowRight') {
                setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
            }
            if (e.key === 'ArrowLeft') {
                setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
            }
            if (e.key === ' ') {
                e.preventDefault();
                setIsSlideshowPlaying((prev) => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, filteredItems.length]);



    return (
        <div className="bg-[#FAFBFC] min-h-screen text-[#1A202C]">
            {/* Hero Section */}
            <Hero title="Moments of Impact & Transformation" currentPage="Gallery" />


            {/* Top Interactive Feature Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-14 relative z-20">
                <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-gray-100/80 p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D33D33] to-[#b9352c] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#D33D33]/25">
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
                                <div className="text-xl sm:text-2xl font-black text-[#D33D33]">{galleryItems.length}+</div>
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

                    {/* Quick Category Pillars Mini Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-gray-100">
                        {[
                            { name: 'Workplace Safety', icon: ShieldCheck, color: 'text-blue-600 bg-blue-50' },
                            { name: 'Environment & Green', icon: Leaf, color: 'text-emerald-600 bg-emerald-50' },
                            { name: 'Community & CSR', icon: Users, color: 'text-amber-600 bg-amber-50' },
                            { name: 'Awards & Summits', icon: Award, color: 'text-purple-600 bg-purple-50' },
                        ].map((pillar) => (
                            <button
                                key={pillar.name}
                                onClick={() => {
                                    setSelectedCategory(pillar.name);
                                    setLightboxIndex(null);
                                }}
                                className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                                    selectedCategory === pillar.name
                                        ? 'border-[#D33D33] bg-red-50/50 shadow-xs'
                                        : 'border-gray-100 hover:border-gray-200 bg-white'
                                }`}
                            >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${pillar.color}`}>
                                    <pillar.icon className="w-5 h-5" />
                                </div>
                                <div className="overflow-hidden">
                                    <div className="text-xs font-bold text-gray-800 truncate">{pillar.name}</div>
                                    <div className="text-[11px] text-gray-500">
                                        {galleryItems.filter((i) => i.category === pillar.name).length} Photos
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Controls Bar: Category Pills + Search + Sort + Layout Modes */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-6 border-b border-gray-200">
                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                        {categoriesList.map((cat) => {
                            const count =
                                cat === 'All'
                                    ? galleryItems.length
                                    : galleryItems.filter((i) => i.category === cat).length;
                            const isActive = selectedCategory === cat;

                            return (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setLightboxIndex(null);
                                    }}
                                    className={`px-4.5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 ${
                                        isActive
                                            ? 'bg-[#D33D33] text-white shadow-md shadow-[#D33D33]/25 scale-[1.02]'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/80'
                                    }`}
                                >
                                    <span>{cat}</span>
                                    <span
                                        className={`text-xs px-2 py-0.5 rounded-full ${
                                            isActive
                                                ? 'bg-white/20 text-white'
                                                : 'bg-gray-100 text-gray-500'
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input, Sort & Layout Toggles */}
                    <div className="flex flex-wrap justify-center items-center gap-3">
                        {/* Search Bar */}
                        <div className="relative flex-1 sm:flex-initial sm:w-64">
                            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search gallery..."
                                className="w-full pl-10 pr-9 py-2.5 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#D33D33] focus:ring-2 focus:ring-[#D33D33]/15 transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* View Mode Switcher (Spotlight vs Grid) */}
                        <div className="flex items-center bg-white border border-gray-200 rounded-full p-1 shadow-2xs">
                            <button
                                onClick={() => setViewMode('grid')}
                                title="Grid View"
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                    viewMode === 'grid'
                                        ? 'bg-[#1A2130] text-white'
                                        : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                <LayoutGrid className="w-3.5 h-3.5" />
                                <span>Grid</span>
                            </button>
                            <button
                                onClick={() => setViewMode('spotlight')}
                                title="Spotlight Story View"
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                    viewMode === 'spotlight'
                                        ? 'bg-[#1A2130] text-white'
                                        : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Spotlight</span>
                            </button>
                        </div>

                        {/* Grid Columns Toggle (Only in Grid View) */}
                        {viewMode === 'grid' && (
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
                        )}
                    </div>
                </div>
            </div>

            {/* MAIN GALLERY SHOWCASE AREA */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                {filteredItems.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-xs">
                        <ImageIcon className="w-14 h-14 text-gray-300 mx-auto mb-3" />
                        <h3 className="text-lg font-bold text-gray-700">No photos found</h3>
                        <p className="text-sm text-gray-500 mt-1">
                            Try adjusting your category filter or search term.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory('All');
                                setSearchQuery('');
                            }}
                            className="mt-5 px-6 py-2.5 bg-[#D33D33] text-white text-sm font-semibold rounded-full hover:bg-[#b9352c] transition-colors"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : viewMode === 'spotlight' ? (
                    /* SPOTLIGHT VIEW MODE (Featured Story Layout) */
                    <div className="space-y-12">
                        {/* Top Large Featured Spotlight Card */}
                        {filteredItems[0] && (
                            <div
                                onClick={() => setLightboxIndex(0)}
                                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12"
                            >
                                <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-gray-900 overflow-hidden">
                                    <img
                                        src={filteredItems[0].src}
                                        alt={filteredItems[0].title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 flex items-center gap-2">
                                        <span className="px-3.5 py-1.5 bg-[#D33D33] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                                            Spotlight Feature
                                        </span>
                                        <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full">
                                            {filteredItems[0].category}
                                        </span>
                                    </div>
                                </div>
                                <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                                    <div>
                                        <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
                                            <span>{filteredItems[0].date}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 group-hover:text-[#D33D33] transition-colors leading-snug">
                                            {filteredItems[0].title}
                                        </h3>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-end">
                                        <div className="flex items-center gap-2">
                                            
                                            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A2130] group-hover:bg-[#D33D33] text-white text-xs font-bold transition-colors">
                                                Explore Full Screen
                                                <Maximize2 className="w-3.5 h-3.5" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Remaining Gallery Cards in 3 Columns */}
                        {filteredItems.length > 1 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {filteredItems.slice(1).map((item, index) => (
                                    <GalleryCard
                                        key={item.id}
                                        item={item}
                                        index={index + 1}
                                        onClick={() => setLightboxIndex(index + 1)}
                                    />
                                ))}
                            </div>
                        )}
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
                        {filteredItems.map((item, index) => (
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
                <div className="bg-gradient-to-r from-[#1A2130] via-[#242D40] to-[#1A2130] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
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
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-fadeIn select-none"
                    onClick={() => {
                        setLightboxIndex(null);
                        setIsSlideshowPlaying(false);
                    }}
                >
                    {/* Top Header Controls */}
                    <div
                        className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center gap-3">
                            <span className="px-3.5 py-1 bg-[#D33D33] text-white rounded-full text-xs font-bold uppercase tracking-wider">
                                {activeItem.category}
                            </span>
                            <span className="text-sm font-semibold text-gray-300">
                                {lightboxIndex + 1} / {filteredItems.length}
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


                            {/* Download Button */}
                            <a
                                href={activeItem.src}
                                download={activeItem.filename}
                                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                title="Download high resolution photo"
                            >
                                <Download className="w-4 h-4" />
                            </a>

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
                        {filteredItems.length > 1 && (
                            <button
                                onClick={() =>
                                    setLightboxIndex(
                                        (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
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
                                src={activeItem.src}
                                alt={activeItem.title}
                                className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10 transition-all duration-300"
                            />
                        </div>

                        {/* Navigation Right Arrow */}
                        {filteredItems.length > 1 && (
                            <button
                                onClick={() =>
                                    setLightboxIndex((prev) => (prev + 1) % filteredItems.length)
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
                        className="bg-gradient-to-t from-black/95 via-black/80 to-transparent pt-6 pb-6 px-6 z-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Photo Details */}
                        <div className="max-w-4xl mx-auto text-center mb-5">
                            <h3 className="text-white text-lg md:text-xl font-bold">
                                {activeItem.title}
                            </h3>
                        </div>

                        {/* Thumbnail Strip */}
                        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 overflow-x-auto pb-2 px-2 scrollbar-none">
                            {filteredItems.map((thumb, idx) => {
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
                                            alt={thumb.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                );
                            })}
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
            className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col"
        >
            {/* Image & Interactive Badges */}
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-600"
                />

                {/* Top Overlay Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold rounded-full uppercase tracking-wider">
                        {item.category}
                    </span>
                </div>

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
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
            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div className="text-xs text-gray-400 font-medium mb-1.5">
                        <span>{item.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-800 group-hover:text-[#D33D33] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                    </h3>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span className="font-medium text-gray-500">Photo #{item.id}</span>
                    <span className="text-[#D33D33] font-semibold group-hover:underline flex items-center gap-1">
                        View Moment <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
