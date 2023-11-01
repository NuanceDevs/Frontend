import React, { ReactNode, useEffect } from "react";

type BlogModalProps = {
  id?: number;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ onClose, id, children }: BlogModalProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const closeModal = () => {
    onClose();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
      onClick={handleClick}
    >
      <div className="bg-white p-4 rounded shadow-md text-black w-4/5">
        {children}
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
