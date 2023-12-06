"use client";
import React, { useState } from "react";
import { BlogModal } from "./ViewPostModal";
import { CreatePostModal } from "./CreatePostModal";
import { ApiGateway } from "@/app/lib/ApiGateway";
import { Modal } from "./Modal";
import { DeletePostModal } from "./DeletePostModal";

interface ButtonProps {
  text: string;
  id?: number;
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

  const handleDelete = (id: number) => {
    ApiGateway.deleteData("blog/delete", { id });
    console.log(`Deleted ${id}`);
    closeModal();
  };

  const handleCreate = (title: string, content: string, imageUrl: string) => {
    console.log("handleCreate");
    const summary: string = "test";
    ApiGateway.postData("blog/create", { title, summary, content, imageUrl });
    closeModal();
  };

  let modalContent;
  switch (text) {
    case "Read more":
      modalContent = <BlogModal id={id}></BlogModal>;
      break;
    case "Add post":
      modalContent = (
        <CreatePostModal
          onCreate={(title, content, imageUrl) =>
            handleCreate(title, content, imageUrl)
          }
          onCancel={closeModal}
        ></CreatePostModal>
      );
      break;
    case "Delete post":
      modalContent = (
        <DeletePostModal
          onYes={(id) => handleDelete(id)}
          id={id}
        ></DeletePostModal>
      );
      break;

    default:
      modalContent = null;
  }

  return (
    <>
      <div className="rounded-md p-2" onClick={openModal}>
        <button>{text}</button>
      </div>

      {isModalOpen && (
        <Modal id={id} onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </>
  );
};
