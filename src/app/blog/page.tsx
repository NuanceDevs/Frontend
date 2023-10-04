"use client";
import React, { useState, useEffect } from "react";
import { Card } from "../components/blog/Card";
import CardContainer from "../components/blog/Cardcontainer";
import { ApiGateway } from "../misc/ApiGateway";

interface Blog {
  id: number;
  title: string;
  summary: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Specify the type for blogs
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBlogClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const endpoint = "blog/getAll"; // Replace with your specific endpoint
    ApiGateway.fetchData(endpoint)
      .then((data) => {
        
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); 

  return (
    <CardContainer>
      {blogs.map((blog: Blog) => (
        <Card
          key={blog.id}
          title={blog.title}
          id={blog.id}
          summary={blog.summary}
        />
      ))}
    </CardContainer>
  );
};

export default BlogPage;
