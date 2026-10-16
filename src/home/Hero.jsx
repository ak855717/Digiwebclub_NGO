import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '../assets/home/hero.jpeg';

const galleryImages = Object.entries(
  import.meta.glob('../assets/Gallery/*.{webp,jpeg}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([, src], index) => ({
    src,
    alt: `Gallery photo ${index + 1}`,
  }));

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((slide) => (slide + 1) % galleryImages.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const showPreviousSlide = () => {
    setCurrentSlide((slide) => (slide - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextSlide = () => {
    setCurrentSlide((slide) => (slide + 1) % galleryImages.length);
  };

  return (
    <section
      className="relative isolate flex min-h-[720px] w-full overflow-hidden bg-[#111c26] text-white md:min-h-[760px] md:h-screen"
      aria-label="Featured community and event photos"
    >
      <img
        src={heroImage}
        alt="A community volunteer holding a young child"
        className="hero-left-photo absolute inset-y-0 left-0 z-10 h-full w-[38%] bg-[#111c26] object-contain object-center"
      />

      <div className="hero-gallery-slider absolute inset-0 z-0 overflow-hidden">
        {galleryImages.map((image, index) => {
          const offset = (index - currentSlide + galleryImages.length) % galleryImages.length;
          const slideOffset = offset > galleryImages.length / 2 ? offset - galleryImages.length : offset;

          return (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              aria-hidden={index !== currentSlide}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${slideOffset * 100}%)` }}
            />
          );
        })}
      </div>

      <svg
        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden h-full w-full md:block"
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="hero-left-photo-clip" clipPathUnits="objectBoundingBox">
            <path
              transform="scale(0.00263 0.00125)"
              d="M0 0H350C298 20 302 63 338 99C380 141 377 194 330 243C285 290 270 330 318 375C365 419 360 462 310 507C266 548 277 600 328 641C376 680 352 739 296 800H0Z"
            />
          </clipPath>
        </defs>
        <path
          d="M350 0C298 20 302 63 338 99C380 141 377 194 330 243C285 290 270 330 318 375C365 419 360 462 310 507C266 548 277 600 328 641C376 680 352 739 296 800"
          fill="none"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>

      <div className="absolute bottom-6 right-5 z-20 flex items-center gap-3 sm:bottom-8 sm:right-8">
        <span className="sr-only" aria-live="polite">
          Gallery slide {currentSlide + 1} of {galleryImages.length}
        </span>
        <button
          type="button"
          onClick={showPreviousSlide}
          aria-label="Previous gallery photo"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-[#111c26]/70 text-white backdrop-blur transition hover:bg-[#007d69] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={showNextSlide}
          aria-label="Next gallery photo"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-[#111c26]/70 text-white backdrop-blur transition hover:bg-[#007d69] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
