import React from "react";

interface SummaryProps {
  children: React.ReactNode;
}

export const Summary = ({ children }: SummaryProps) => {
  return (
    <div
      className="rounded-md"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "200px", 
        overflow: "hidden", 
      }}
    >
      <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
    </div>
  );
};
