"use client";
import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { ApiGateway } from "@/app/misc/ApiGateway";
import { Button } from "./Button";

type BlogModalProps = {
  id?: number;
};

export const BlogModal: React.FC<BlogModalProps> = ({ id }) => {
  const [blogData, setBlogData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiGateway.fetchData(`blog/${id}`);
        setBlogData(response); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  });

  // Render the blog content if data is available
  return (
    <div className="bg-white p-4 rounded shadow-md text-black w-4/5">
      {blogData ? (
        <>
          <div className="border-2 ">
            <p>Admin tools</p>
            <Button text={"Delete post"} id={id}></Button>
            <Button text="Edit post" id={id}></Button>
          </div>{" "}
          <Title>{blogData.title}</Title>
          <p className="text-sm">Published on: </p>
          <p>{blogData.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BlogModal;
