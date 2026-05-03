"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<HTMLMotionProps<"section"> & { className?: string }>;

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <motion.section className={`text-gray-200 mb-10 lg:mb-16 ${className}`}>
      {children}
    </motion.section>
  );
}
