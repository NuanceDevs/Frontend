"use client";
import React, { useState } from "react";
import Content from "../components/blog/Content";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInText } from "../components/fadeintext";
import Modal from "../components/blog/BlogModal";
import "./BlogPage.css";

const BlogPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBlogClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="blog-page">
      <div className="header">
        <div className="image-box">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              src="/nuanceelogo.svg"
              width={400}
              height={400}
              alt="Nuancee logo"
            />
          </motion.div>
        </div>
        <div className="welcome-box">
          <FadeInText duration={5} delay={0}>
            Welcome to my blog.
          </FadeInText>
          <FadeInText duration={5} delay={2}>
            Welcome to my Art Blog, where Im excited to share the latest
            developments in my creative journey. Hailing from the Netherlands,
            Im passionate about art and the pursuit of success. My dedication to
            honing my craft is unwavering. Join me as I explore new artistic
            horizons, experiment with various mediums, and share the stories
            behind my creations.
          </FadeInText>
        </div>
      </div>
      <div className="blog-content" onClick={handleBlogClick}>
        <Content
          id={1}
          title="New art"
          summary="Lorem ipsum dolor sit amet..."
          author="Noah"
          publishingDate="20 sep 2023"
        />

        <Content
          id={2}
          title="Another new art"
          summary="Lorem ipsum dolor sit amet..."
          author="Noah"
          publishingDate="20 sep 2023"
        />
      </div>

      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default BlogPage;
