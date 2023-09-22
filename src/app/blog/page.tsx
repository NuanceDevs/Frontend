"use client";
import React, { useState } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeInText } from "../components/fadeintext";
import Modal from "../components/blog/BlogModal";
import "./BlogPage.css";
import { Card } from "../components/blog/Card";
import CardContainer from "../components/blog/Cardcontainer";

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
        <CardContainer>
          <Card
            imagePath="/nuanceelogo.svg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra pretium turpis. Curabitur nec congue libero. Nunc bibendum in orci sed maximus. Mauris aliquet vitae diam et luctus. Quisque augue turpis, aliquam nec mattis et, tempus ut urna. Vivamus sed orci eget lorem lacinia fringilla. Vivamus ex nulla, viverra et magna ac, rhoncus venenatis lacus. Donec eros risus, fermentum non molestie eget, vulputate at justo. Ut et dui bibendum, "
          />
          <Card
            imagePath="/nuanceelogo.svg"
            text=" Vivamus sed orci eget lorem lacinia fringilla. Vivamus ex nulla, viverra et magna ac, rhoncus venenatis lacus. Donec eros risus, fermentum non molestie eget, vulputate at justo. Ut et dui bibendum, "
          />
          <Card
            imagePath="/nuanceelogo.svg"
            text=" Vivamus sed orci eget lorem lacinia fringilla. Vivamus ex nulla, viverra et magna ac, rhoncus venenatis lacus. Donec eros risus, fermentum non molestie eget, vulputate at justo. Ut et dui bibendum, "
          />
          <Card
            imagePath="/nuanceelogo.svg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra pretium turpis. Curabitur nec congue libero. Nunc bibendum in orci sed maximus. Mauris aliquet vitae diam et luctus. Quisque augue turpis, aliquam nec mattis et, tempus ut urna. Vivamus sed orci eget lorem lacinia fringilla. Vivamus ex nulla, viverra et magna ac, rhoncus venenatis lacus. Donec eros risus, fermentum non molestie eget, vulputate at justo. Ut et dui bibendum, "
          />
          <Card
            imagePath="/nuanceelogo.svg"
            text=" Vivamus sed orci eget lorem lacinia fringilla. Vivamus ex nulla, viverra et magna ac, rhoncus venenatis lacus. Donec eros risus, fermentum non molestie eget, vulputate at justo. Ut et dui bibendum, "
          />
          <Card
            imagePath="/nuanceelogo.svg"
            text=" Vivamus sed orci eget lorem lacinia fringilla. Vivamus ex nulla, viverra et magna ac, rhoncus venenatis lacus. Donec eros risus, fermentum non molestie eget, vulputate at justo. Ut et dui bibendum, "
          />
        </CardContainer>
      </div>

      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default BlogPage;
