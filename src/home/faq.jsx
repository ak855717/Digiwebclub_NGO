import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(1);
  const sectionRef = useRef(null);

  const faqs = [
    {
      id: 1,
      question: "Is there any registration fee to join EKDKN?",
      answer:
        "No! There is no registration fee to join EKDKN. The only requirement is your dedication and commitment towards bringing a change in society.",
    },
    {
      id: 2,
      question: "In which domains does EKDKN work?",
      answer:
        "We focus heavily on education and the environment. We run various teaching drives, plantation drives, and distribution drives to support these causes.",
    },
    {
      id: 3,
      question: "Who can join EKDKN?",
      answer:
        "Anyone who has the will and desire to bring a positive change can join EKDKN! We welcome passionate individuals from all backgrounds.",
    },
    {
      id: 4,
      question: "Will there be any certificates provided?",
      answer:
        "Yes, every member is appreciated for their hard work and dedication with certificates recognizing their contributions.",
    },
    {
      id: 5,
      question: "How do I get updates about the causes I support?",
      answer:
        "By subscribing to our newsletter, following our social media channels, or checking our news section, you can stay informed about all our ongoing projects and their impact.",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".faq-heading-word", {
        opacity: 0,
        y: 30,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-left-content",
          start: "top 80%",
        },
      });

      gsap.from(".faq-item", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-accordion-list",
          start: "top 85%",
        },
      });

      gsap.from(".faq-visual-panel", {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".faq-visual-panel",
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f5f3ef] py-24 font-sans"
    >
      <div className="mx-auto pl-4 sm:pl-6 lg:pl-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="faq-left-content order-2 lg:order-1 lg:px-15">
            <div className="mb-2 inline-flex items-center gap-2 text-[#087b68]">
              <HeartHandshake aria-hidden="true" className="h-6 w-6" />
              <span className="font-caveat text-2xl font-semibold">
                Start Donating Poor People
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[#0d1b1d] sm:text-4xl lg:text-[4rem]">
              <span className="faq-heading-word block">
                Frequently <span className="text-[#f5c94b]">Asked</span>
              </span>
              <span className="faq-heading-word block">Questions</span>
            </h2>

            <div className="faq-accordion-list mt-10 space-y-4">
              {faqs.map((faq) => {
                const isOpen = openIndex === faq.id;

                return (
                  <div
                    key={faq.id}
                    className="faq-item overflow-hidden rounded-[26px] border border-[#dfe2df] bg-[#ffffff] shadow-[0_0_0_1px_rgba(0,0,0,0.01)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : faq.id)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="pr-4 text-lg font-medium text-[#1c1d1f] sm:text-[1.05rem]">
                        {faq.question}
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3d76a] text-[#0b1d1d] shadow-sm">
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-52 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <div className="mx-5 border-t border-[#eef0ee] sm:mx-6"></div>
                      <p className="px-5 pb-5 pt-4 text-base leading-relaxed text-[#4d5b5e] sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="faq-visual-panel order-1 lg:order-2 relative isolate ml-0 lg:ml-6">
            <div className="relative overflow-hidden bg-[#0d7a71] p-4 sm:p-6 h-[400px] sm:h-[800px]">
              <div className="relative flex h-full items-end justify-end">
                <div className="absolute left-8 top-30 w-[52%] overflow-hidden rounded-[30px] border-[8px] border-[#f4f1ee] bg-white shadow-2xl sm:w-[50%] lg:w-[55%]">
                  <img
                    src="https://charifundwp.wowtheme7.com/wp-content/uploads/2025/01/thumb-lg-1.png"
                    alt="Volunteer and child"
                    className="h-[300px] w-full object-cover sm:h-[500px]"
                  />
                </div>

                <div className="absolute top-40 z-10 overflow-hidden rounded-[25px] border-[10px] border-[#f4f1ee] bg-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200"
                    alt="Family support and care"
                    className="h-[200px] w-full object-cover object-center sm:h-[200px]"
                  />
                </div>

                <div className="absolute bottom-30 right-50 h-28 w-5 rounded-full bg-[#f3c94e] shadow-xl sm:h-36 sm:w-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
