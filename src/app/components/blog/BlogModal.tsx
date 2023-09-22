import React from "react";
import { motion } from "framer-motion";

interface BlogModalProps {
  id: number;
  onClose: () => void;
}

const Modal: React.FC<BlogModalProps> = ({ onClose, id }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-4 rounded shadow-md">
        <h1 className="text-xl font-bold">Modal Content</h1>
        <p className="text-black">You clicked id {id}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
