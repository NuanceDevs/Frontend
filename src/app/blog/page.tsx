"use client";
import React, { useState, useEffect } from "react";
import { Card } from "../components/blog/Card";
import CardContainer from "../components/blog/Cardcontainer";
import { ApiGateway } from "../misc/ApiGateway";
import { Button } from "../components/blog/Button";

interface Blog {
  id: number;
  title: string;
  content: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); 

  useEffect(() => {
    const endpoint = "blog/getAll"; // Replace with your specific endpoint
    ApiGateway.fetchData(endpoint)
      .then((data) => {
        console.log(endpoint)
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="w-1/3">
        <Button text={"Add post"}></Button>
      </div>
      <CardContainer>
        {blogs.map((blog: Blog) => (
          <Card
            key={blog.id}
            title={blog.title}
            id={blog.id}
            content={blog.content}
          />
        ))}
      </CardContainer>
    </>
  );
};

export default BlogPage;
