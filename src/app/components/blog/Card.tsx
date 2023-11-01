"use client"
import React from "react";
import { CardImage } from "./CardImage";
import { Title } from "./Title";
import { Summary } from "./Summary";
import { Button } from "./Button";

export const Card = ({
  id,
  title,
  content: text,
}: {
  id: number;
  title: string;
  content: string;
}) => {
  return (
    <div
      className="border border-white rounded-md mb-4 p-4 space-y-4" // Utilize Tailwind classes
      style={{ minHeight: "250px" }}
    >
      
      {/* <CardImage imagePath={imagePath}></CardImage>
      <a className="gp-1 text-sm">Published on: {publishedOn}</a> */}

      <Title>{title}</Title>

      <Summary>{text}</Summary>
      <Button id={id} text={"Read more"}></Button>
    </div>
  );
};
