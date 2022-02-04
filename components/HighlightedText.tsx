import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function HighLightedText({
  children,
  className,
}: PropsWithChildren<any>) {
  return (
    <motion.span className={`text-yellow-400 ${className}`}>
      {children}
    </motion.span>
  );
}
