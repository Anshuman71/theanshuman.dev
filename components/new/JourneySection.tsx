"use client";

import { motion } from "framer-motion";

const journeyItems = [
  {
    year: "NOW",
    label: "Independent Creator",
    description:
      "Crafting bespoke digital identities for global brands through the Sunflower Design Studio.",
    variant: "present" as const,
  },
  {
    year: "2022",
    label: "Senior Design Engineer",
    description:
      "Led a team of five at a FinTech startup, standardizing their design system and component library.",
    variant: "accent" as const,
  },
  {
    year: "2020",
    label: "Pivot to Code",
    description:
      "Discovered the magic of turning designs into interactive reality with React.",
    variant: "default" as const,
  },
  {
    year: "2018",
    label: "The Genesis",
    description:
      "Started as a freelance graphic designer, mastering the basics of visual hierarchy and color theory.",
    variant: "default" as const,
  },
];

const cardStyles: Record<string, string> = {
  present: "bg-primary-container",
  accent: "bg-tertiary-container",
  default: "bg-white",
};

const markerStyles: Record<string, string> = {
  present: "bg-black text-primary-container border-black",
  accent: "bg-primary text-white border-black",
  default: "bg-white text-primary border-black",
};

export default function JourneySection() {
  return (
    <section className="py-16 md:py-24">
      <motion.h2
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-headline-lg text-headline-lg uppercase mb-16 md:mb-24 border-l-8 border-primary pl-6"
      >
        The Journey
      </motion.h2>

      <div className="relative">
        <div className="absolute top-[23px] left-0 right-0 h-[6px] bg-primary border-t-2 border-b-2 border-black" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8">
          {journeyItems.map((item, index) => {
            const isFirst = index === 0;

            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="relative flex-1 min-w-0 pt-16 md:pt-0 md:pl-6 lg:pl-8"
              >
                <div
                  className={`absolute top-0 left-0 md:left-0 z-10 w-12 h-12 border-4 neubrutal-shadow flex items-center justify-center ${markerStyles[item.variant]}`}
                >
                  <span className="font-label-bold text-[9px] md:text-[10px] uppercase leading-none text-center select-none">
                    {item.year}
                  </span>
                </div>

                <div
                  className={`md:mt-16 border-4 border-black neubrutal-shadow p-6 md:p-8 ${cardStyles[item.variant]} hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200 group`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-headline-md text-xl md:text-2xl uppercase leading-none">
                      {item.label}
                    </h3>
                    {isFirst && (
                      <span className="flex-shrink-0 bg-black text-primary-container px-3 py-1 font-label-bold text-label-bold uppercase inline-flex items-center gap-1.5 border-2 border-black">
                        <span
                          className="material-symbols-outlined text-sm"
                          style={{
                            fontVariationSettings:
                              '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
                          }}
                        >
                          north_east
                        </span>
                        Current
                      </span>
                    )}
                  </div>
                  <p className="font-body-md text-body-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}