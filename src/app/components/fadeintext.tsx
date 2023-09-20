import React from "react";
import { motion } from "framer-motion";

interface FadeInTextProps {
  children: React.ReactNode;
  duration: number; // Duration in seconds
  delay: number; // Delay in seconds before the animation starts
}

export const FadeInText = ({ children, duration, delay }: FadeInTextProps) => {
  return (
    <motion.div
      className="welcome-box"
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
};
