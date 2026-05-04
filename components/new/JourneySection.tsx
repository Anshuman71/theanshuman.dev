"use client";

import { motion } from "framer-motion";
import { experiences } from "@/constants";

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
        Where I&apos;ve Worked
      </motion.h2>

      <div className="relative">
        <div className="absolute top-[23px] left-0 right-0 h-[6px] bg-primary border-t-2 border-b-2 border-black" />

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-8">
          {experiences.map((exp, index) => {
            const isFirst = index === 0;
            const variant = isFirst ? "present" : index === 1 ? "accent" : "default";

            return (
              <motion.a
                key={exp.name}
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                className="relative flex-1 min-w-0 pt-16 md:pt-0 md:pl-6 lg:pl-8 group"
              >
                <div
                  className={`absolute top-0 left-0 md:left-0 z-10 w-12 h-12 border-4 neubrutal-shadow flex items-center justify-center ${markerStyles[variant]}`}
                >
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{
                      fontVariationSettings:
                        '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
                    }}
                  >
                    open_in_new
                  </span>
                </div>

                <div
                  className={`md:mt-16 border-4 border-black neubrutal-shadow p-6 md:p-8 ${cardStyles[variant]} hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-headline-md text-xl md:text-2xl uppercase leading-none">
                      {exp.name}
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
                  {exp.description && (
                    <p className="font-body-md text-body-md leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}