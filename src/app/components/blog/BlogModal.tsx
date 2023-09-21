import React from "react";
import "../blog/BlogModal.css"; // Create a separate CSS file for your modal styles
import { motion } from "framer-motion"; // You might want to use motion from framer-motion

interface BlogModalProps {
  onClose: () => void;
}

const Modal: React.FC<BlogModalProps> = ({ onClose }) => {
  return (
    <div className="blog-modal">
      <div className="modal-content">
        <h1>Modal Content</h1>
        <button style={{ color: "red" }} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
