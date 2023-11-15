"use client";
import React, { useState } from "react";
import { Title } from "./Title";
//import { log4TSProvider } from "../../../lib/Logger";
import { log } from "console";

type CreatePostModalProps = {
  onCreate: (title: string, content: string) => void; // Add a callback to handle post creation
  onCancel: () => void;
};
//const logger = log4TSProvider.getLogger("CreatePostModal");

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  onCreate,
  onCancel,
}) => {
  const [title, setTitle] = useState(""); // State for the title input
  const [content, setContent] = useState(""); // State for the content input

  const handleCreate = () => {
    onCreate(title, content);
    // logger.debug(
    //   `Handle create has been clicked with ${title} and ${content}}`
    // );
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div
        className="bg-white p-4 rounded shadow-md text-black w-4/5"
        onClick={stopPropagation}
      >
        <Title>Create New Post</Title>

        {/* Title input field */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />

        {/* Content input field */}
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mt-2"
        ></textarea>

        {/* Create button */}
        <button
          className="mt-4 px-4 py-2 bg-black text-white rounded-md"
          onClick={handleCreate}
        >
          Create
        </button>

        <button
          onClick={onCancel}
          className="mt-2 px-4 py-2 bg-gray-300 text-black rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
