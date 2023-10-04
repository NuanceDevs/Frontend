import React, { useState } from "react";
import { motion } from "framer-motion";
import { Title } from "./Title";

interface CreatePostModalProps {
  onClose: () => void;
  onCreate: (title: string, content: string) => void; // Add a callback to handle post creation
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  onClose,
  onCreate,
}) => {
  const [title, setTitle] = useState(""); // State for the title input
  const [content, setContent] = useState(""); // State for the content input

  const closeModal = () => {
    onClose();
  };

  const handleCreate = () => {
    // Call the onCreate callback with the title and content
    onCreate(title, content);
    closeModal(); // Close the modal after creating the post
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
      onClick={closeModal}
    >
      <div className="bg-white p-4 rounded shadow-md text-black w-4/5">
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
          className="mt-2 px-4 py-2 bg-gray-300 text-black rounded-md"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
