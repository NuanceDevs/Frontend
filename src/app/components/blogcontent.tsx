"use client";
import React from "react";
import { motion } from "framer-motion";

interface BlogContentProps {
  id: number; // Add an id prop
  title: string;
  summary: string;
  author: string;
  publishingDate: string;
}

const BlogContent: React.FC<BlogContentProps> = ({
  title,
  summary,
  author,
  publishingDate,
}) => {
  // Define the styles for the container div
  const containerStyle = {
    border: "1px solid #ccc", // You can adjust the border style as needed
    padding: "10px", // Add some padding for spacing
  };

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.01 }}
      style={containerStyle}
    >
      <p>{title}</p>
      <p>Date of Publishing: {publishingDate}</p>
      <p>Author: {author}</p>
      <p>{summary}</p>
    </motion.div>
  );
};

export default BlogContent;
