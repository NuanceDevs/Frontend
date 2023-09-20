import React from "react";
import BlogContent from "../components/blogcontent";
import "./BlogPage.css";
import Image from "next/image";

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="header">
        <div className="image-box">
          <Image
            src="./nuanceelogo.svg"
            width={400}
            height={400}
            alt="Image Alt Text"
          />
        </div>
        <div className="welcome-box">
          <p>
            Welcome to my blog. Here you can read everything Im doing. Donec
            finibus ante erat, vel tristique ipsum efficitur eu. Praesent
            efficitur accumsan risus eu malesuada. Fusce euismod auctor libero
            sed vulputate. Cras nunc dolor, rhoncus non metus a, consequat
            tempor justo. Sed pulvinar lorem sed luctus viverra.
          </p>
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
