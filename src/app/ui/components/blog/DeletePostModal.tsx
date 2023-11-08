import React from "react";
import { Button } from "./Button";
import { ApiGateway } from "@/app/lib/ApiGateway";

type DeletePostModalProps = {
  id?: number;
  onYes: (id: number) => void;
};

export const DeletePostModal = ({ id, onYes }: DeletePostModalProps) => {
  return id ? (
    <>
      <p>Are you sure you want to delete this post?</p>
      <button onClick={() => onYes(id)}>Yes</button>{" "}
    </>
  ) : (
    <p>Cant find post</p>
  );
};
