import { useState } from 'react';
import Hero from '../components/Hero';
import ContactFormSection from '../components/ContactFormSection';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    CheckCircle2,
    Copy,
    Check,
    HelpCircle,
    ChevronDown,
    ArrowUpRight
} from 'lucide-react';

const contactChannels = [
    {
        title: 'National Headquarters',
        subtitle: 'Visit Our Main Office',
        content: 'IInd Floor, H-47, Block H, Bali Nagar, Delhi, 110015',
        icon: MapPin,
        actionText: 'Get Directions',
        actionHref: 'https://maps.google.com',
        copyValue: 'IInd Floor, H-47, Block H, Bali Nagar, Delhi, 110015',
        tag: 'Main Office'
    },
    {
        title: 'Helpline & Telephone',
        subtitle: 'Mon–Sat | 9:00 AM – 6:00 PM IST',
        content: '+918826335688 / +911141538549',
        icon: Phone,
        actionText: 'Call Helpline Now',
        actionHref: 'tel:+918826335688',
        copyValue: '+918826335688 / +911141538549',
        tag: 'Instant Support'
    },
    {
        title: 'Official Email Desks',
        subtitle: 'Response within 12-24 business hours',
        content: 'info@ekdkn.com',
        icon: Mail,
        actionText: 'Send Direct Email',
        actionHref: 'mailto:info@ekdkn.com',
        copyValue: 'info@ekdkn.com',
        tag: 'Preferred'
    },
    {
        title: 'Working Hours & Emergency',
        subtitle: 'Safety Response & Field Operations',
        content: 'Office: Mon - Sat (9:00 AM - 6:00 PM)\nEmergency Safety Helpline: 24/7 Available',
        icon: Clock,
        actionText: 'View Holiday Calendar',
        actionHref: '#faq',
        copyValue: 'Mon - Sat (9:00 AM - 6:00 PM IST)',
        tag: 'Operations'
    }
];

const faqs = [
    {
        question: 'How can my company partner with EKDKN for corporate CSR programs?',
        answer: 'We collaborate with corporate organizations under Schedule VII of the Companies Act, 2013. Whether you wish to fund workplace occupational health camps, tree plantations, or rural youth skill development, our CSR team provides end-to-end project management, impact assessment reports, and regulatory compliance documents. Select "CSR & Corporate Partnerships" in the contact form or email csr-partner@ekdkn.org.'
    },
    {
        question: 'Are financial donations made to EKDKN eligible for 80G tax benefits?',
        answer: 'Yes, EKDKN is a registered non-profit organization registered under Section 80G and 12A of the Income Tax Act. All Indian taxpayers receive a formal 80G tax exemption certificate along with their official receipt within 48 hours of donation.'
    },
    {
        question: 'How can individuals or professionals volunteer for upcoming health & safety drives?',
        answer: 'We welcome safety professionals, doctors, environmentalists, and enthusiastic students. You can join our volunteer database by filling out the inquiry form with the "Volunteering & Community" category selected. Our field coordinators will reach out ahead of upcoming regional drives.'
    },
    {
        question: 'Can we schedule an on-site safety audit or occupational health workshop at our factory?',
        answer: 'Absolutely. EKDKN specializes in conducting industrial safety drills, ergonomics seminars, and occupational health awareness camps for employees across India. Contact our Delhi NCR or Mumbai hub to discuss customized workplace sessions.'
    },
    {
        question: 'How long does it take for the EKDKN team to respond to inquiries?',
        answer: 'Our typical turnaround time for general inquiries and volunteer applications is 1 business day. Urgent CSR or media requests are usually addressed within 4–6 business hours by the respective departmental desk.'
    }
];

const Contact = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [copiedText, setCopiedText] = useState('');

    const handleCopy = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopiedText(label);
        setTimeout(() => setCopiedText(''), 2500);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#1A202C]">
            {/* Hero Section */}
            <Hero title="Connect With EKDKN" currentPage="Contact Us" />

            {/* Notification Toast for Copy */}
            {copiedText && (
                <div className="fixed bottom-6 right-6 z-50 bg-[#1A2130] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 animate-fade-in">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                        <p className="text-xs text-gray-400 font-medium">Copied to Clipboard</p>
                        <p className="text-sm font-semibold text-white">{copiedText}</p>
                    </div>
                </div>
            )}

            {/* QUICK CONTACT CHANNELS GRID */}
            <section className="relative -mt-16 z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactChannels.map((channel, idx) => {
                        const IconComponent = channel.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#D33D33]/30 hover:shadow-[0_15px_40px_rgba(211,61,51,0.08)] transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D33D33] flex items-center justify-center group-hover:bg-[#D33D33] group-hover:text-white transition-colors duration-300">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-[#D33D33] transition-colors">
                                            {channel.tag}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {channel.title}
                                    </h3>
                                    <p className="text-xs font-medium text-gray-500 mb-3">
                                        {channel.subtitle}
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed font-normal whitespace-pre-line">
                                        {channel.content}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <a
                                        href={channel.actionHref}
                                        target={channel.actionHref.startsWith('http') ? '_blank' : '_self'}
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D33D33] hover:text-[#b9352c] transition-colors"
                                    >
                                        {channel.actionText}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </a>

                                    <button
                                        onClick={() => handleCopy(channel.copyValue, channel.title)}
                                        className="p-2 rounded-lg text-gray-400 hover:text-[#D33D33] hover:bg-red-50 transition-colors"
                                        title="Copy detail"
                                    >
                                        {copiedText === channel.title ? (
                                            <Check className="w-4 h-4 text-emerald-600" />
                                        ) : (
                                            <Copy className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* MAIN FORM & DIRECTORY SECTION */}
            <ContactFormSection />

            {/* FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
            <section id="faq" className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-red-50 text-[#D33D33] text-xs font-bold uppercase tracking-wider mb-3">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Got Questions?
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base mt-3">
                        Everything you need to know about our corporate CSR partnerships, 80G tax exemptions, workplace safety training, and volunteering opportunities.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openFaq === idx;
                        return (
                            <div
                                key={idx}
                                className={`rounded-2xl border transition-all duration-300 ${isOpen
                                    ? 'bg-white border-[#D33D33]/40 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
                                    : 'bg-white border-gray-200/80 hover:border-gray-300'
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                                >
                                    <span className="font-bold text-gray-900 text-base sm:text-lg">
                                        {faq.question}
                                    </span>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${isOpen
                                        ? 'bg-[#D33D33] text-white rotate-180'
                                        : 'bg-gray-100 text-gray-600'
                                        }`}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CALL TO ACTION BOTTOM BANNER */}
            <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-linear-to-r from-[#1A2130] via-[#242D40] to-[#1A2130] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <span className="text-xs font-bold uppercase tracking-widest text-red-400">
                            Partner For Impact
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold mt-2 leading-tight">
                            Ready to make a lasting difference in Workplace Safety & Environmental Welfare?
                        </h3>
                        <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                            Connect with our team to initiate an employee welfare camp, adopt a green belt, or organize a safety leadership seminar today.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 shrink-0">
                        <a
                            href="mailto:csr-partner@ekdkn.org"
                            className="px-7 py-4 rounded-xl bg-[#D33D33] hover:bg-[#b9352c] text-white font-semibold text-sm flex items-center gap-2 transition-colors shadow-lg"
                        >
                            Email CSR Team
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <a
                            href="tel:+911145678900"
                            className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-colors"
                        >
                            Call Helpline
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
