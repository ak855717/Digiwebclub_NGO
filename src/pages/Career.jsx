import Hero from '../components/Hero';
import galleryImg1 from '../assets/Gallery/gallery (1).webp';
import {
    Briefcase,
    HeartHandshake,
    GraduationCap,
    Clock,
    Award,
    CheckCircle2,
    Mail,
    Users,
    Sparkles,
    Calendar,
    MapPin,
    Share2,
    CheckSquare
} from 'lucide-react';

const Career = () => {


    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1A202C]">
            {/* Hero Section */}
            <Hero title="Careers & Volunteering" currentPage="Career" />

            {/* Intro Header Banner */}
            <section className="py-12 md:py-16 bg-white border-b border-gray-100">
                <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D33D33]/10 text-[#D33D33] text-sm font-semibold mb-4">
                        <Sparkles className="w-4 h-4" />
                        Join The Movement
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A2130] tracking-tight">
                        Grow as a Leader, Create Real Impact
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Whether you are looking for a rewarding professional career, a passionate volunteering journey, or campus engagement, EKDKN offers a dynamic ecosystem to empower change across communities.
                    </p>
                </div>
            </section>

            {/* Section 1: Careers & Volunteer Cards (Side by Side / Responsive Grid) */}
            <section className="py-14 md:py-20 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    
                    {/* Card 1: Careers */}
                    <div className="relative overflow-hidden rounded-3xl bg-[#2D2E62] text-white p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(45,46,98,0.25)] flex flex-col justify-between group hover:shadow-[0_25px_60px_rgba(45,46,98,0.35)] transition-all duration-300">
                        {/* Decorative Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                                    <Briefcase className="w-4 h-4" /> Professional Roles
                                </span>
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                                    <Award className="w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-[#FF6B35] tracking-tight mb-6">
                                Careers
                            </h3>

                            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
                                Careers at EKDKN are suitable for dynamic people looking to grow as leaders, capable of functioning as one among our volunteers, enabling and complementing their work. Candidates should be willing to work flexible hours and on weekends. Remuneration is on par with the best in the sector. Prior experience with volunteer, non-profit, education and /or youth organizations desirable. Prior volunteering experience with EKDKN preferred
                            </p>

                            {/* Key Highlights Pill Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-6 border-t border-white/15">
                                <div className="flex items-center gap-2.5 text-sm text-white/85">
                                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                                    <span>Leadership & Growth Opportunity</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-white/85">
                                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                                    <span>Sector-Leading Remuneration</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-white/85">
                                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                                    <span>Flexible Hours & Weekends</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-white/85">
                                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                                    <span>EKDKN Volunteers Preferred</span>
                                </div>
                            </div>
                        </div>

                       
                    </div>

                    {/* Card 2: Volunteer */}
                    <div className="relative overflow-hidden rounded-3xl bg-[#2D2E62] text-white p-8 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(45,46,98,0.25)] flex flex-col justify-between group hover:shadow-[0_25px_60px_rgba(45,46,98,0.35)] transition-all duration-300">
                        {/* Decorative Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-orange-500/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                                    <HeartHandshake className="w-4 h-4" /> Community Contribution
                                </span>
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                                    <Users className="w-6 h-6" />
                                </div>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-[#FF6B35] tracking-tight mb-6">
                                Volunteer
                            </h3>

                            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
                                Do you have the passion to contribute towards the country’s progress? Join us! You could volunteer with us for a minimum of two hours every week or on and off for events and one-off volunteering opportunities. Register with us and we will get in touch with you soon (please allow us two weeks) through Email and SMS regarding the next orientation programme. At the orientation you will get more information about all of EKDKN projects, the causes you can choose and the locations where you can volunteer.
                            </p>

                            {/* Key Highlights Pill Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-6 border-t border-white/15">
                                <div className="flex items-center gap-2.5 text-sm text-white/85">
                                    <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                                    <span>Min. 2 Hours Weekly commitment</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-white/85">
                                    <Calendar className="w-4 h-4 text-orange-400 shrink-0" />
                                    <span>One-off & Event Opportunities</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-white/85">
                                    <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                                    <span>SMS & Email Orientation Alerts</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-sm text-white/85">
                                    <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                                    <span>Multiple Causes & Locations</span>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                </div>
            </section>

            {/* Section 2: Campus Catalyst Banner Card */}
            <section className="pb-14 md:pb-20 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="overflow-hidden rounded-3xl bg-[#2D2E62] shadow-[0_20px_50px_rgba(45,46,98,0.25)] border border-white/10 grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Left Photo Column */}
                    <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[360px] lg:min-h-full">
                        <img
                            src={galleryImg1}
                            alt="Campus Catalyst and Volunteers session"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-[#2D2E62] via-transparent to-transparent opacity-60"></div>
                        
                        <div className="absolute bottom-6 left-6 right-6 z-10">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-semibold">
                                <GraduationCap className="w-4 h-4 text-orange-400" />
                                Youth & Campus Leadership
                            </span>
                        </div>
                    </div>

                    {/* Right Content Column */}
                    <div className="lg:col-span-7 p-8 sm:p-10 md:p-12 flex flex-col justify-between text-white">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                                    Ambassador Program
                                </span>
                            </div>

                            <h3 className="text-3xl sm:text-4xl font-bold text-[#FF6B35] tracking-tight mb-6">
                                Campus Catalyst
                            </h3>

                            <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8">
                                Represent EKDKN in your campus or work place by promoting the cause of volunteerism through campus faculty and colleagues. You would required about 2 to 4 hours of free time every week and good presentation skills. You can spread the word through posters, presentations, events, emails, social networking and other such media. We will provide you a certificate at the end of the engagement.
                            </p>

                            {/* Features list */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                                    <Clock className="w-6 h-6 text-orange-400 mb-2" />
                                    <h4 className="font-semibold text-white text-sm">2–4 Hours/Week</h4>
                                    <p className="text-xs text-white/70 mt-1">Flexible campus advocacy</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                                    <Share2 className="w-6 h-6 text-orange-400 mb-2" />
                                    <h4 className="font-semibold text-white text-sm">Community Outreach</h4>
                                    <p className="text-xs text-white/70 mt-1">Posters, events & media</p>
                                </div>
                                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                                    <Award className="w-6 h-6 text-orange-400 mb-2" />
                                    <h4 className="font-semibold text-white text-sm">Certified Role</h4>
                                    <p className="text-xs text-white/70 mt-1">Official certificate awarded</p>
                                </div>
                            </div>
                        </div>

                       
                    </div>

                </div>
            </section>

            {/* Section 3: Job Opening - Program Coordinator - Event Management */}
            <section className="pb-20 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
                <div className="overflow-hidden rounded-3xl bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        
                        {/* Left Side: Deep Blue-Purple Content Box */}
                        <div className="lg:col-span-7 bg-[#2D2E62] text-white p-8 sm:p-10 md:p-12">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
                                Current Job Opening
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF6B35] tracking-tight leading-snug mb-6">
                                Job Opening Program Coordinator – Event Management
                            </h3>

                            {/* Qualification & Experience badges */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="bg-white/10 rounded-xl px-4 py-2.5 border border-white/10">
                                    <span className="text-xs text-orange-300 block font-medium">Qualification</span>
                                    <span className="text-sm font-semibold text-white">Graduation</span>
                                </div>
                                <div className="bg-white/10 rounded-xl px-4 py-2.5 border border-white/10">
                                    <span className="text-xs text-orange-300 block font-medium">Experience</span>
                                    <span className="text-sm font-semibold text-white">1–2 years in calling & event coordination</span>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="mb-8">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <CheckSquare className="w-5 h-5 text-orange-400" />
                                    Skills Required:
                                </h4>
                                <ul className="space-y-2.5 text-white/90 text-sm sm:text-base pl-1">
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 font-bold mt-0.5">–</span>
                                        <span>Excellent communication and calling skills</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 font-bold mt-0.5">–</span>
                                        <span>Proficient in MS Office (Word, Excel, PowerPoint, Outlook)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 font-bold mt-0.5">–</span>
                                        <span>Event management and coordination experience</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 font-bold mt-0.5">–</span>
                                        <span>Ability to work independently and as part of a team</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Job Responsibilities Section */}
                            <div className="mb-8">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <Briefcase className="w-5 h-5 text-orange-400" />
                                    Job Responsibilities:
                                </h4>
                                <ul className="space-y-2.5 text-white/90 text-sm sm:text-base pl-1">
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 font-bold mt-0.5">–</span>
                                        <span>Make calls to participants, follow up & mail Correspondence.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 font-bold mt-0.5">–</span>
                                        <span>Manage event timelines and checklists</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 font-bold mt-0.5">–</span>
                                        <span>Prepare event materials, such as agendas and presentations</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-orange-400 font-bold mt-0.5">–</span>
                                        <span>Ensure smooth execution of events</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <p className="text-white font-medium text-sm sm:text-base italic">
                                    Interested candidates kindly send their CV
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Visual Banner Graphic */}
                        <div className="lg:col-span-5 bg-linear-to-br from-slate-200 via-slate-300 to-slate-400 relative flex flex-col items-center justify-center p-8 sm:p-12 overflow-hidden min-h-[340px]">
                            {/* Decorative architectural/chair style graphic representation */}
                            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-[#1C3A6E] flex flex-col items-center justify-between py-8">
                                <div className="w-12 h-12 rounded-full bg-yellow-400/20 blur-xl"></div>
                            </div>

                            <div className="relative z-10 text-center max-w-sm bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white">
                                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase block mb-1">
                                    WE ARE
                                </span>
                                <h3 className="text-5xl font-extrabold text-[#1F3D74] tracking-tight leading-none mb-3">
                                    HIRING
                                </h3>
                                <div className="inline-block bg-[#1F3D74] text-white text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-md mb-6">
                                    JOIN OUR TEAM
                                </div>

                                <p className="text-sm text-gray-600 mb-6">
                                    Be part of our mission to lead impactful initiatives and event coordination nationwide.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

    
        </div>
    );
};

export default Career;
