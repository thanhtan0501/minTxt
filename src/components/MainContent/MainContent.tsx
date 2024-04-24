import { useEffect } from "react";
import { store } from "../../stores";

const MainContent = () => {
  let { data, setData, isWrap, setPositionCursor, fontSize, setFontSize } = store();
  useEffect(() => {
    const value = window.innerWidth;
    if (value > 500) {
      setFontSize(1.5);
    } else if (value > 800) {
      setFontSize(Number(1.7));
    }
  }, []);
  const handleChangeInput = (e: any) => {
    setData(e.target.value);
    let selStart = e.target.selectionStart;
    let selEnd = e.target.selectionEnd;
    setPositionCursor({ selStart, selEnd });
  };
  const insertMyText = (e: any) => {
    let selStart = e.target.selectionStart;
    let selEnd = e.target.selectionEnd;
    setPositionCursor({ selStart, selEnd });
  };
  return (
    <>
      <div className="w-full h-full p-[calc(var(--spacing)*2)] flex">
        <textarea
          id="textareaID"
          className={`flex-1 w-full h-full grow-[2]  bg-second-color text-text-color rounded-[calc(var(--spacing)*2)] border border-third-color outline-0 resize-none p-[0.5rem] text-[1.3rem] min-[500px]:text-[1.5rem] min-[800px]:text-[1.7rem]`}
          style={{ fontSize: `${fontSize}rem` }}
          value={data}
          onChange={handleChangeInput}
          onKeyUp={insertMyText}
          wrap={isWrap ? "soft" : "off"}
          onMouseOut={(e: any) => {
            e.preventDefault();
            insertMyText(e);
          }}
        ></textarea>
      </div>
    </>
  );
};

export default MainContent;
