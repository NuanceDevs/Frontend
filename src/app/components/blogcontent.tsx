// components/BlogContent.tsx

import React from "react";

interface BlogContentProps {
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
    <div style={containerStyle}>
      <p>{title}</p>
      <p>Date of Publishing: {publishingDate}</p>
      <p>Author: {author}</p>
      <p>{summary}</p>
    </div>
  );
};

export default BlogContent;
