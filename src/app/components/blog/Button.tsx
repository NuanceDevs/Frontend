import React, { useState } from "react";
import { motion } from "framer-motion";
import { BlogModal } from "./BlogModal";

interface ButtonProps {
  id: number;
}

export const Button = ({ id }: { id: number }) => {
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

  return (
    <>
      <motion.div
        whileHover="hover"
        initial="initial"
        variants={buttonVariants}
        className="rounded-md p-2"
        onClick={openModal}
      >
        <button>Read more</button>
      </motion.div>

      {isModalOpen && <BlogModal id={id} onClose={closeModal}></BlogModal>}
    </>
  );
};
