"use client";
import { store } from "../stores";

export default function Home() {
  let { data, setData, isWrap, setPositionCursor } = store();

  const handleChangeInput = (e: any) => {
    setData(e.target.value);
  };
  const insertMyText = (e: any) => {
    let selStart = e.target.selectionStart;
    let selEnd = e.target.selectionEnd;
    setPositionCursor({ selStart, selEnd });
  };

  return (
    <div className="w-full h-full p-[calc(var(--spacing)*2)] flex">
      <textarea
        id="textareaID"
        className="flex-1 w-full h-full grow-[2]  bg-second-color text-text-color text-[1.3rem] min-[500px]:text-[1.5rem] min-[800px]:text-[1.7rem] rounded-[calc(var(--spacing)*2)] border border-third-color outline-0 resize-none p-[0.5rem]"
        autoFocus
        value={data}
        onChange={handleChangeInput}
        wrap={isWrap ? "soft" : "off"}
        onClick={insertMyText}
      ></textarea>
    </div>
  );
}
