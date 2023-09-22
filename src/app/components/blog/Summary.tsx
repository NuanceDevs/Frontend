import React from "react";

interface SummaryProps {
  children: React.ReactNode;
}

export const Summary = ({ children }: SummaryProps) => {
  return (
    <div
      className="p-4 border border-white rounded-md"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div>{children}</div>
    </div>
  );
};
