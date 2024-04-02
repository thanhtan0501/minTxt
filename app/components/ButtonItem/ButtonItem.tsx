import { StoreTypes, store } from "@/app/stores";
import React from "react";

interface ButtonTypes {
  text: string;
  onClickButton: ({
    data,
    setData,
    isShowFooter,
    setIsShowFooter,
    setIsWrap,
    isWrap,
    positionCursor,
    setPositionCursor,
  }: StoreTypes) => void;
  title: string;
}

const ButtonItem = ({ text, onClickButton, title }: ButtonTypes) => {
  let { data, setData, isShowFooter, setIsShowFooter, setIsWrap, isWrap, positionCursor, setPositionCursor } = store();

  return (
    <button
      type="button"
      className="bg-second-color text-text-color w-[35px] h-[35px] m-margin-spacing transition-all hover:bg-third-color rounded-button-rounded truncate"
      title={title}
      onClick={() =>
        onClickButton({
          data,
          setData,
          isShowFooter,
          setIsShowFooter,
          setIsWrap,
          isWrap,
          positionCursor,
          setPositionCursor,
        })
      }
    >
      {text}
    </button>
  );
};

export default ButtonItem;
