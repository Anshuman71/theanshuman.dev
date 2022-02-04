import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Section({
  children,
  className,
}: PropsWithChildren<any>) {
  return (
    <motion.section className={`text-gray-200 mb-10 lg:mb-16 ${className}`}>
      {children}
    </motion.section>
  );
}
