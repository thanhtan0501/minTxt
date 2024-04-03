import { StoreTypes, store } from "@/app/stores";
import React, { ReactElement } from "react";

interface ButtonTypes {
  icon: ReactElement;
  onClickButton: (data: StoreTypes) => void;
  title: string;
}

const ButtonItem = ({ icon, onClickButton, title }: ButtonTypes) => {
  let data = store();

  return (
    <button
      type="button"
      className="bg-second-color text-text-color w-[35px] h-[35px] m-margin-spacing transition-all hover:bg-third-color rounded-button-rounded truncate flex items-center justify-center"
      title={title}
      onClick={() => onClickButton(data)}
    >
      {icon}
    </button>
  );
};

export default ButtonItem;
