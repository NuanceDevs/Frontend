import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <div className="p-4 border border-white rounded-md">
      <h1 className="font-bold text-lg">{children}</h1>
    </div>
  );
};
