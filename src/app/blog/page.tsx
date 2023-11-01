"use client";
import React, { useState, useEffect } from "react";
import { Card } from "../components/blog/Card";
import CardContainer from "../components/blog/Cardcontainer";
import { ApiGateway } from "../misc/ApiGateway";
import { Button } from "../components/blog/Button";
import { type } from "os";

type Blog = {
  id: number;
  title: string;
  content: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); 

  useEffect(() => {
    const endpoint = "blog/getAll"; // Replace with your specific endpoint
  console.log(process.env.NEXT_PUBLIC_GATEWAY_IP)
    ApiGateway.fetchData(endpoint)
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="w-1/3 border-2">
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
