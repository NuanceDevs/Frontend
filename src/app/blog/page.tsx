"use client";
import React, { useState } from "react";
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
    <CardContainer>
      <Card
        id={1}
        publishedOn="12 May 2021"
        imagePath="/nuanceelogo.svg"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra pretium turpis. Curabitur nec congue libero. Nunc bibendum in orci sed maximus. Mauris aliquet vitae diam et luctus. Quisque augue turpis, aliquam nec mattis et, tempus ut urna. Vivamus sed orci eget lorem lacinia fringilla. Vivamus ex nulla, viverra et magna ac, rhoncus venenatis lacus. Donec eros risus, fermentum non molestie eget, vulputate at justo. Ut et dui bibendum, "
      />
      <Card
        id={2}
        publishedOn="12 May 2022"
        imagePath="/nuanceelogo.svg"
        text="Lorem ipsum dr sed maximus. Mauris aliquet vitae diam et luctus. Quisque augue turpis, aliquam nec mattis et, tempus ut urna. Vivamus sed orci eget lorem lacinia fringilla. Vivamus ex nulla, viverra et magna ac, rhoncus venenatis lacus. Donec eros risus, fermentum non molestie eget, vulputate at justo. Ut et dui bibendum, "
      />
      <Card
        id={3}
        publishedOn="12 May 2023"
        imagePath="/nuanceelogo.svg"
        text="Lorem et lorem lacinia fringilla. Vivamus ex nulla, viverra et magna ac, rhoncus venenatis lacus. Donec eros risus, fermentum non molestie eget, vulputate at justo. Ut et dui bibendum, "
      />
    </CardContainer>
  );
};

export default BlogPage;
