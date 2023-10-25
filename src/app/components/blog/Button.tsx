"use client"
import React, { useState } from "react";
import { BlogModal } from "./PostModal"; // Import your ViewPostModal component
import { CreatePostModal } from "./CreatePostModal"; // Import your CreatePostModal component
import { ApiGateway } from "@/app/misc/ApiGateway";

interface ButtonProps {
  text: string;
  id?: number; // Make the 'id' parameter optional by adding a question mark.
}

export const Button = ({ id, text }: ButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const buttonVariants = {
    initial: {
      backgroundColor: "black",
      color: "white",
    },
    hover: {
      backgroundColor: "white",
      color: "black",
    },
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCreate = (title: string, content: string) => {
    console.log("handleCreate");
    const summary:string = "test"
    ApiGateway.postData("blog/create", { title, summary, content });
  };

  return (
    <>
      <div
    
        className="rounded-md p-2"
        onClick={openModal}
      >
        <button>{text}</button>
      </div>

      {isModalOpen &&
        // Render either ViewPostModal or CreatePostModal based on 'id'
        (id != null ? (
          <BlogModal id={id} onClose={closeModal}></BlogModal>
        ) : (
          <CreatePostModal
            onClose={closeModal}
            onCreate={(title, content) => handleCreate(title, content)}
          ></CreatePostModal>
        ))}
    </>
  );
};
