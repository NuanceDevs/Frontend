import React, { useEffect, useRef, useState } from "react";

interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [fontSize, setFontSize] = useState<string>("1.5rem"); // Set an initial font size

  useEffect(() => {
    const titleElement = titleRef.current;
    if (titleElement) {
      const containerWidth = titleElement.offsetWidth;
      const textWidth = titleElement.scrollWidth;

      // Adjust font size based on the container and text width
      const newFontSize =
        (containerWidth / textWidth) *
        parseFloat(getComputedStyle(titleElement).fontSize);

      // Set a maximum font size to prevent excessive resizing
      const maxFontSize = parseFloat(getComputedStyle(titleElement).fontSize);

      // Update the font size with a maximum limit
      setFontSize(`${Math.min(newFontSize, maxFontSize)}px`);
    }
  }, [children]);

  return (
    <div
      className="p-4 border border-white rounded-md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      <h1
        className="font-bold"
        style={{
          fontSize: fontSize, // Set the calculated font size
          width: "100%",
        }}
        ref={titleRef}
      >
        {children}
      </h1>
    </div>
  );
};
