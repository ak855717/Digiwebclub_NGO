import { useState } from 'react';
import {
    Sparkles,
    CheckCircle2,
    AlertCircle,
    Send,
    Building2,
    MapPin,
    Phone,
    Mail,
    ShieldCheck,
    ExternalLink,
    MessageSquare,
    Users,
    Globe,
    Heart
} from 'lucide-react';

const inquiryTypes = [
    { id: 'general', label: 'General Inquiry', icon: MessageSquare },
    { id: 'csr', label: 'CSR & Corporate Partnerships', icon: Building2 },
    { id: 'volunteer', label: 'Volunteering & Community', icon: Users },
    { id: 'media', label: 'Media & Press Relations', icon: Globe },
    { id: 'donation', label: 'Donations & 80G Assistance', icon: Heart }
];

const ContactFormSection = () => {
    const [selectedInquiry, setSelectedInquiry] = useState('general');

    // Form states
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        subject: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Valid email address is required';
        }
        if (!formData.message.trim() || formData.message.trim().length < 15) {
            errors.message = 'Please provide a message with at least 15 characters';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);
        // Simulate smooth network submission
        setTimeout(() => {
            const ticketId = 'EKD-' + Math.floor(100000 + Math.random() * 900000);
            setSubmittedData({
                ...formData,
                inquiryType: inquiryTypes.find(i => i.id === selectedInquiry)?.label || 'General Inquiry',
                ticketId
            });
            setIsSubmitting(false);
        }, 1200);
    };

    const handleReset = () => {
        setSubmittedData(null);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            organization: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* LEFT COLUMN: CONTACT FORM (7 COLS) */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100">
                    <div className="flex items-center gap-2 text-[#D33D33] font-semibold text-sm tracking-wide uppercase mb-2">
                        <Sparkles className="w-4 h-4" />
                        Reach Out To Us
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                        Send Us A Message
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                        Whether you want to launch an occupational safety workshop, initiate a green corporate CSR partnership, or volunteer for our upcoming drives, our desk is ready.
                    </p>

                    {/* Inquiry Type Pills */}
                    <div className="mt-8">
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                            Select Inquiry Category
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                            {inquiryTypes.map(item => {
                                const IconComp = item.icon;
                                const isSelected = selectedInquiry === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        onClick={() => setSelectedInquiry(item.id)}
                                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${isSelected
                                            ? 'bg-[#D33D33] text-white shadow-md shadow-red-500/25 scale-[1.02]'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200/80'
                                            }`}
                                    >
                                        <IconComp className="w-4 h-4" />
                                        {item.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* SUCCESS STATE */}
                    {submittedData ? (
                        <div className="mt-8 bg-emerald-50/80 border border-emerald-200 rounded-2xl p-8 text-center">
                            <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-600/30">
                                <CheckCircle2 className="w-9 h-9" />
                            </div>
                            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs tracking-wider uppercase mb-2">
                                Ticket ID: {submittedData.ticketId}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Thank You, {submittedData.fullName}!
                            </h3>
                            <p className="text-gray-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                                Your message regarding <span className="font-semibold text-gray-900">{submittedData.inquiryType}</span> has been successfully logged. Our team will get back to you at <span className="font-semibold text-gray-900">{submittedData.email}</span> within 24 business hours.
                            </p>

                            <div className="mt-6 pt-6 border-t border-emerald-200/60 flex flex-wrap items-center justify-center gap-4">
                                <button
                                    onClick={handleReset}
                                    className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors shadow-md"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* FORM FIELDS */
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                        Full Name <span className="text-[#D33D33]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Rahul Sharma"
                                        className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-colors bg-gray-50/50 focus:bg-white focus:outline-none ${formErrors.fullName
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-gray-200 focus:border-[#D33D33]'
                                            }`}
                                    />
                                    {formErrors.fullName && (
                                        <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
                                            <AlertCircle className="w-3.5 h-3.5" />
                                            {formErrors.fullName}
                                        </p>
                                    )}
                                </div>

                                {/* Email Address */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                        Email Address <span className="text-[#D33D33]">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="e.g. rahul@organization.com"
                                        className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-colors bg-gray-50/50 focus:bg-white focus:outline-none ${formErrors.email
                                            ? 'border-red-500 focus:border-red-500'
                                            : 'border-gray-200 focus:border-[#D33D33]'
                                            }`}
                                    />
                                    {formErrors.email && (
                                        <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
                                            <AlertCircle className="w-3.5 h-3.5" />
                                            {formErrors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Phone Number */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                        Phone / Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm transition-colors bg-gray-50/50 focus:bg-white focus:border-[#D33D33] focus:outline-none"
                                    />
                                </div>

                                {/* Organization / Company */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                        Organization / Institution
                                    </label>
                                    <input
                                        type="text"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleInputChange}
                                        placeholder="Company, NGO, or College"
                                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm transition-colors bg-gray-50/50 focus:bg-white focus:border-[#D33D33] focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                    Subject / Topic
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="Brief summary of your inquiry"
                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-sm transition-colors bg-gray-50/50 focus:bg-white focus:border-[#D33D33] focus:outline-none"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                                        Your Message <span className="text-[#D33D33]">*</span>
                                    </label>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {formData.message.length} chars
                                    </span>
                                </div>
                                <textarea
                                    rows={5}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Please provide details about your inquiry, CSR partnership interest, or volunteer availability..."
                                    className={`w-full px-4 py-3.5 rounded-xl border text-sm transition-colors bg-gray-50/50 focus:bg-white focus:outline-none resize-y ${formErrors.message
                                        ? 'border-red-500 focus:border-red-500'
                                        : 'border-gray-200 focus:border-[#D33D33]'
                                        }`}
                                ></textarea>
                                {formErrors.message && (
                                    <p className="mt-1.5 text-xs font-medium text-red-600 flex items-center gap-1">
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        {formErrors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#D33D33] hover:bg-[#b9352c] disabled:opacity-70 text-white font-semibold text-sm flex items-center justify-center gap-3 shadow-lg shadow-red-500/20 transition-all duration-200"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            Send Message Now
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* RIGHT COLUMN: REGIONAL DIRECTORY & INFO (5 COLS) */}
                <div className="lg:col-span-5 space-y-8">

                    {/* REGIONAL HUBS TABS CARD */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)] border border-gray-100">
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-4">
                            <Building2 className="w-5 h-5 text-[#D33D33]" />
                            Pan-India Regional Hubs
                        </div>
                        <p className="text-xs text-gray-500 mb-6">
                            EKDKN operates active safety, health, and green initiative centers across India. Select a regional office to connect with our local coordinator:
                        </p>



                        {/* Active Office Details */}
                        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 space-y-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">
                                        Delhi NCR (Headquarters)
                                    </h4>
                                </div>
                                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-red-100 text-[#D33D33]">
                                    Active Hub
                                </span>
                            </div>

                            <div className="space-y-2.5 pt-3 border-t border-gray-200/70 text-xs text-gray-700">
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="w-4 h-4 text-[#D33D33] shrink-0 mt-0.5" />
                                    IInd Floor, H-47, Block H, Bali Nagar, Delhi, 110015
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Phone className="w-4 h-4 text-[#D33D33] shrink-0" />
                                    <a href="tel:+918826335688" className="hover:text-[#D33D33] font-medium">
                                        +918826335688
                                    </a>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Mail className="w-4 h-4 text-[#D33D33] shrink-0" />
                                    <a href="mailto:info@ekdkn.com" className="hover:text-[#D33D33] font-medium">
                                        info@ekdkn.com
                                    </a>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-gray-200/70">
                                <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">
                                    Key Operational Focus:
                                </p>
                                <p className="text-xs text-gray-700 font-medium leading-relaxed">
                                    National Safety Policy, Central CSR Projects & Executive Management
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* INTERACTIVE MAP PREVIEW CARD */}
                    <div className="bg-linear-to-br from-[#1A2130] to-[#252E42] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
                        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#D33D33]/15 blur-2xl pointer-events-none"></div>

                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-red-400 flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4" />
                                Pan-India Presence
                            </span>
                            <span className="text-xs text-white/70 bg-white/10 px-3 py-1 rounded-full">
                                4 Regional Hubs
                            </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2">
                            Visit EKDKN Headquarters
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            Located in Institutional Area, Sector 62 Noida. We welcome NGO partners, corporate CSR delegates, and volunteers for scheduled meetings.
                        </p>

                        {/* Simulated Stylized Map Card */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#D33D33] flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">
                                        EKDKN House, Bali Nagar
                                    </p>
                                    <p className="text-xs text-gray-300">
                                        IInd Floor, H-47, Block H, Bali Nagar, Delhi, 110015
                                    </p>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com/?q=Sector+62+Noida"
                                target="_blank"
                                rel="noreferrer"
                                className="px-4 py-2.5 rounded-xl bg-white text-[#1A2130] hover:bg-gray-100 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shrink-0"
                            >
                                Open in Google Maps
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
