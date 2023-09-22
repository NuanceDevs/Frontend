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
        height: "200px", // Set a fixed height here, adjust it as needed
        overflow: "hidden", // Hide overflow content
      }}
    >
      <div style={{ flex: 1, overflowY: "auto" }}>{children}</div>
    </div>
  );
};
