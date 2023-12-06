"use client";
import React from "react";
import { CardImage } from "./CardImage";
import { Title } from "./Title";
import { Summary } from "./Summary";
import { Button } from "./Button";

export const Card = ({
  id,
  title,
  publishedOn,
  content: text,
  imageUrl,
}: {
  id: number;
  publishedOn: Date;
  title: string;
  content: string;
  imageUrl: string;
}) => {
  return (
    <div
      className="border border-white rounded-md mb-4 p-4 space-y-4" // Utilize Tailwind classes
      style={{ minHeight: "250px" }}
    >
      {/* <CardImage imagePath={imagePath}></CardImage> */}
      <a className="gp-1 text-sm">
        Published on: {publishedOn.toString().split("T")[0]}
      </a>

      <Title>{title}</Title>
      <CardImage imagePath={imageUrl}></CardImage>

      <Summary>{text}</Summary>
      <Button id={id} text={"Read more"}></Button>
    </div>
  );
};
