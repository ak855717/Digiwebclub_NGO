import { Link } from 'react-router-dom';
import defaultBgImage from '../assets/child_support.png';

const Hero = (props) => {
    return (
        <section
            className="relative w-full min-h-[340px] md:min-h-[400px] lg:min-h-[440px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `url(${defaultBgImage})`
            }}
        >
            {/* Dark Slate Left-to-Right Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#1B2230] via-[#1B2230]/90 via-45% to-[#1B2230]/20 lg:to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-16 md:pt-36 md:pb-20">
                <div className="max-w-xl">
                    <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-white tracking-tight leading-tight">
                        {props.title}
                    </h1>

                    {/* Breadcrumb */}
                    <div className="mt-4 flex items-center gap-2 text-sm sm:text-[15px] font-medium text-white/90">
                        <Link
                            to="/"
                            className="hover:text-white hover:underline transition-colors"
                        >
                            Home
                        </Link>
                        <span className="text-white/60">/</span>
                        <span className="text-white">{props.currentPage}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
