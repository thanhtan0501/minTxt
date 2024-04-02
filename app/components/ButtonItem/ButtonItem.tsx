import { ButtonTypes } from "@/app/types/types";
import React from "react";

const ButtonItem = ({ text, onClick, title, type = "button" }: ButtonTypes) => {
  return (
    <button
      type={type}
      className="bg-second-color text-text-color w-[35px] h-[35px] m-margin-spacing transition-all hover:bg-third-color rounded-button-rounded truncate"
      title={title}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default ButtonItem;
