import React, { useEffect, useState } from "react";
import { Title } from "./Title";
import { ApiGateway } from "@/app/misc/ApiGateway";

interface BlogModalProps {
  id?: number;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ onClose, id }) => {
  const [blogData, setBlogData] = useState<any>(null);

  const closeModal = () => {
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiGateway.fetchData(`blog/${id}`);
        setBlogData(response); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();

    // Add the event listener for Escape key when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Remove the event listener for Escape key when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Render the blog content if data is available
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
      onClick={handleClick}
    >
      <div className="bg-white p-4 rounded shadow-md text-black w-4/5">
        {blogData ? (
          <>
            <Title>{blogData.title}</Title>
            <p className="text-sm">Published on: </p>

            <p>{blogData.content}</p>
          </>
        ) : (
          // Display a loading indicator or message while data is being fetched
          <p>Loading...</p>
        )}

        <p>You clicked id {id}</p>
        <button
          className="mt-4 px-4 py-2 bg-black text-white rounded-md"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BlogModal;
