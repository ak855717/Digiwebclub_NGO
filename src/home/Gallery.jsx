import { ArrowUpRight, Heart, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import childrenReceivingGifts from "../assets/home/image (9).jpeg";
import childrenLearning from "../assets/home/image (2).jpeg";
import childrenCelebrating from "../assets/home/image (4).jpeg";
import childrenTogether from "../assets/home/hero-slider3.webp";

const galleryImages = [
  {
    src: childrenReceivingGifts,
    alt: "Children receiving gifts from the community",
    layout: "sm:col-span-7",
    color: true,
  },
  {
    src: childrenLearning,
    alt: "Children gathered together for a learning activity",
    layout: "sm:col-span-5",
  },
  {
    src: childrenTogether,
    alt: "Children standing together at a community program",
    layout: "sm:col-span-5",
  },
  {
    src: childrenCelebrating,
    alt: "Children celebrating together at a community event",
    layout: "sm:col-span-7",
  },
];

const Gallery = () => (
  <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
    <Heart
      aria-hidden="true"
      className="pointer-events-none absolute right-[12%] top-10 hidden h-14 w-14 text-[#087b68] sm:block"
      strokeWidth={2.4}
    />

    <div className="mx-auto max-w-5xl">
      <header className="mb-8 text-center sm:mb-10">
        <div className="mb-2 inline-flex items-center gap-2 text-[#087b68]">
          <HeartHandshake aria-hidden="true" className="h-4 w-4" />
          <span className="font-caveat text-sm font-semibold">
            Start Donating Poor People
          </span>
        </div>
        <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#142d2c] sm:text-4xl">
          Our Global Awards{" "}
          <span className="text-[#f5b400]">Winning</span>
          <br className="hidden sm:block" /> Photo Gallery
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
        {galleryImages.map((image) => (
          <Link
            key={image.alt}
            to="/gallery"
            aria-label={`View gallery: ${image.alt}`}
            className={`group relative block aspect-[2/1] overflow-hidden rounded-xl bg-gray-100 ${image.layout}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                image.color ? "" : "grayscale"
              }`}
              loading="lazy"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </Link>
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 rounded-full bg-[#ffbd00] px-7 py-3 text-sm font-semibold text-[#142d2c] transition hover:bg-[#f2ad00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#087b68]"
        >
          View All
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default Gallery;