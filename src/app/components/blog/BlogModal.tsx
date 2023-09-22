import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Title } from "./Title";

interface BlogModalProps {
  id: number;
  onClose: () => void;
}

const Modal: React.FC<BlogModalProps> = ({ onClose, id }) => {
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
    // Add the event listener for Escape key when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Remove the event listener for Escape key when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50"
      onClick={handleClick}
    >
      <div className="bg-white p-4 rounded shadow-md text-black w-4/5">
        <Title>My first blog</Title>
        <p className="text-sm">Published on: 2021-01-01</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          vehicula ipsum eros, sit amet pretium justo maximus eu. Donec et
          malesuada nibh, quis mattis ligula. Nulla id eleifend ligula. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Nunc eu felis ligula. Phasellus imperdiet condimentum
          porttitor. Praesent eget interdum lacus, quis pharetra ipsum. Fusce
          ultrices libero non mollis facilisis. Maecenas dapibus dictum turpis
          vel semper. Phasellus at vestibulum metus. Mauris tempus mattis nibh a
          pellentesque. Duis sed nisl quis risus vulputate vulputate et id diam.
          Nam posuere erat vel lacinia cursus. Cras sollicitudin pretium felis,
          et egestas augue bibendum eu. Vestibulum dapibus tellus in mauris
          elementum egestas. Phasellus sed tristique massa, nec eleifend augue.
          Integer et enim vitae mauris ultricies feugiat sed vitae nunc.
          Pellentesque accumsan nisl mauris, quis iaculis tellus lacinia at.
          Integer dignissim eleifend sapien, in gravida leo ullamcorper in.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut
          magna sapien. Vivamus at sapien a neque tincidunt elementum. Sed eu
          commodo felis. Pellentesque viverra, risus nec efficitur fringilla,
          arcu est sodales felis, in ornare est nisl at magna. Donec placerat
          sapien sit amet suscipit accumsan. Duis feugiat est sit amet placerat
          vulputate. Donec id orci elit. Quisque ullamcorper porttitor enim vel
          condimentum. Nulla lobortis arcu nec ullamcorper scelerisque. Vivamus
          lectus ante, ornare ac felis vestibulum, scelerisque elementum elit.
          Nam commodo purus lectus, eget mattis augue accumsan vitae. Cras
          volutpat sit amet ipsum non venenatis. Vestibulum ac ante ut augue
          ornare mattis. Quisque id vestibulum eros, iaculis suscipit velit.
          Proin ullamcorper aliquet sem a vestibulum. Vivamus blandit magna at
          mollis pellentesque. Cras ac lorem vestibulum, vulputate mi eu,
          egestas lorem. Ut pretium facilisis imperdiet. Nulla bibendum ut metus
          quis feugiat. Aliquam eu quam ut augue vulputate tempus. Proin
          condimentum, purus ut consequat scelerisque, lectus dolor cursus
          purus, eu semper arcu libero vel arcu. Integer ac nisl ut est aliquam
          aliquet. Aliquam risus lorem, interdum sed vulputate eu, pretium nec
          magna. Suspendisse faucibus magna eget nunc pellentesque lobortis.
          Integer condimentum ligula id magna tristique fringilla. Nulla
          facilisi. Fusce non pharetra nunc. Donec erat arcu, pulvinar lobortis
          nisl quis, iaculis bibendum turpis. Nullam condimentum purus vitae
          cursus malesuada. Integer libero ante, molestie a porta vel, gravida
          sed justo. Suspendisse euismod sem ac libero accumsan vestibulum.
          Quisque volutpat lacinia mauris, id dapibus nisl cursus tincidunt.
          Fusce finibus risus mollis, finibus magna sed, fringilla nibh. Cras
          sed lacus sed diam tempus semper eget sit amet est. Duis fermentum
          sagittis tempus. Vivamus et sollicitudin justo, in laoreet diam. Sed
          at urna suscipit, fringilla turpis sit amet, consectetur eros. Aliquam
          nec molestie neque, eu ornare nibh. Nam ultrices nisi nisl, a sagittis
          purus dictum vitae.
        </p>
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

export default Modal;
