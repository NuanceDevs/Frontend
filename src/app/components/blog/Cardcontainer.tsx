import React from "react";
import { Card } from "./Card";

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap">
      {React.Children.map(children, (child) => (
        <div className="w-1/3 p-4">{child}</div>
      ))}
    </div>
  );
};

export default CardContainer;
