"use client";
import React, { useState } from "react";
import { BlogModal } from "./ViewPostModal";
import { CreatePostModal } from "./CreatePostModal";
import { ApiGateway } from "@/app/lib/ApiGateway";
import { Modal } from "./Modal";
import { DeletePostModal } from "./DeletePostModal";
//import { log4TSProvider } from "../../../lib/Logger";

type ButtonProps = {
  text: string;
  id?: number;
};
//const logger = log4TSProvider.getLogger("blogButtonLogger");

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
    closeModal();
  };

  const handleCreate = (title: string, content: string) => {
    const summary: string = "test";
    ApiGateway.postData("blog/create", { title, summary, content });
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
          onCreate={(title, content) => handleCreate(title, content)}
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
