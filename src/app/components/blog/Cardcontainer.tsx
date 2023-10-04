import React from "react";
import { Card } from "./Card";
import { Button } from "./Button";

const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-wrap">
      <Button text={"Add post"}></Button>
      {React.Children.map(children, (child) => (
        <div className="w-1/3 p-4">{child}</div>
      ))}
    </div>
  );
};

export default CardContainer;
