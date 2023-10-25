import React from "react";

interface FadeInTextProps {
  children: React.ReactNode;
  duration: number; // Duration in seconds
  delay: number; // Delay in seconds before the animation starts
}

export const FadeInText = ({ children, duration, delay }: FadeInTextProps) => {
  return (
    <div
      className="welcome-box"
    >
      {children}
    </div>
  );
};
