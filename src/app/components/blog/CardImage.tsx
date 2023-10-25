import React from "react";
import Image from "next/image";

interface CardImageProps {
  imagePath: string;
}

export const CardImage: React.FC<CardImageProps> = ({ imagePath }) => {
  return (
    <div className="rounded-md">
      <Image src={imagePath} alt="card image" width={500} height={500} />
    </div>
  );
};
