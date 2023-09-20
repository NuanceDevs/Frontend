"use client";
import React from "react";
import BlogContent from "../components/blogcontent";
import "./BlogPage.css";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FadeInText } from "../components/fadeintext"; // Import the FadeInText component

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="header">
        <div className="image-box">
          {/* Wrap the Image component with motion.div */}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Image
              src="/nuanceelogo.svg" // Use a relative path for the image
              width={400}
              height={400}
              alt="Image Alt Text"
            />
          </motion.div>
        </div>
        <div className="welcome-box">
          <FadeInText duration={5} delay={0}>
            Welcome to my blog.
          </FadeInText>
          <FadeInText duration={5} delay={2}>
            Here you can read everything Im doing. Donec finibus ante erat, vel
            tristique ipsum efficitur eu. Praesent efficitur accumsan risus eu
            malesuada. Fusce euismod auctor libero sed vulputate. Cras nunc
            dolor, rhoncus non metus a, consequat tempor justo. Sed pulvinar
            lorem sed luctus viverra.Praesent efficitur accumsan risus eu
            malesuada. Fusce euismod auctor libero sed vulputate. Cras nunc
            dolor, rhoncus non metus a, consequat tempor justo. Sed pulvinar
            lorem sed luctus viverra.
          </FadeInText>
        </div>
      </div>
      <div className="blog-content">
        <BlogContent
          title="New art"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet quam dolor. Curabitur in eleifend magna. Donec pretium odio massa, et molestie lectus iaculis eu. Donec finibus ante erat, vel tristique ipsum efficitur eu. Praesent efficitur accumsan risus eu malesuada. Fusce euismod auctor libero sed vulputate. Cras nunc dolor, rhoncus non metus a, consequat tempor justo. Sed pulvinar lorem sed luctus viverra."
          author="Noah"
          publishingDate="20 sep 2023"
        ></BlogContent>

        <BlogContent
          title="New art"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet quam dolor. Curabitur in eleifend magna. Donec pretium odio massa, et molestie lectus iaculis eu. Donec finibus ante erat, vel tristique ipsum efficitur eu. Praesent efficitur accumsan risus eu malesuada. Fusce euismod auctor libero sed vulputate. Cras nunc dolor, rhoncus non metus a, consequat tempor justo. Sed pulvinar lorem sed luctus viverra."
          author="Noah"
          publishingDate="20 sep 2023"
        ></BlogContent>
      </div>
    </div>
  );
};

export default BlogPage;
