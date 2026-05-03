"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function HighLightedText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span className={`text-yellow-400 ${className}`}>
      {children}
    </motion.span>
  );
}
