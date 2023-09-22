import React from "react";
import { CardImage } from "./CardImage";
import { Title } from "./Title";
import { Summary } from "./Summary";
import { motion } from "framer-motion";
import { Button } from "./Button";

export const Card = ({
  id,
  publishedOn,
  imagePath,
  text,
}: {
  id: number;
  publishedOn: string;
  imagePath: string;
  text: string;
}) => {
  return (
    <motion.div
      className="border border-white rounded-md mb-4 p-4 space-y-4"
      style={{ minHeight: "250px" }}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      <CardImage imagePath={imagePath}></CardImage>
      <a className="gp-1 text-sm">Published on: {publishedOn}</a>

      <Title>My first blog</Title>

      <Summary>{text}</Summary>
      <Button id={id}></Button>
    </motion.div>
  );
};
