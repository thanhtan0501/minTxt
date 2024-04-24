import { AiOutlineClear, AiOutlineRedo, AiOutlineUndo } from "react-icons/ai";
import { StoreTypes } from "../stores";
import { GrBlockQuote } from "react-icons/gr";
import { RxDash, RxLetterCaseLowercase, RxLetterCaseUppercase } from "react-icons/rx";
import { BsDash } from "react-icons/bs";
import { TbHexagonLetterO, TbLayoutBottombarCollapse, TbLayoutBottombarExpand } from "react-icons/tb";
import {
  MdContentCopy,
  MdContentPasteGo,
  MdOutlineTextDecrease,
  MdOutlineTextIncrease,
  MdWrapText,
} from "react-icons/md";

const insertText = (
  positionCursor: {
    selStart: number;
    selEnd: number;
  },
  data: StoreTypes,
  openText: string,
  closeText?: string
) => {
  let old = data.data;

  if (closeText === undefined) closeText = "";

  let newData =
    old.slice(0, positionCursor.selStart) +
    openText +
    old.slice(positionCursor.selStart, positionCursor.selEnd) +
    closeText +
    old.slice(positionCursor.selEnd);

  data.setData(newData);

  data.setPositionCursor({
    selStart: positionCursor.selStart + openText.length,
    selEnd: positionCursor.selEnd + (closeText.length || openText.length),
  });
  setPositionCursorInText(positionCursor, openText, closeText);
};

const setPositionCursorInText = (
  positionCursor: {
    selStart: number;
    selEnd: number;
  },
  openText?: string,
  closeText?: string
) => {
  const textField = document.getElementById("textareaID") as HTMLInputElement;
  setTimeout(() => {
    textField.setSelectionRange(
      positionCursor.selStart + (openText?.length || 0),
      positionCursor.selEnd + (closeText?.length || openText?.length || 0)
    );
    textField.focus();
  }, 100);
};

export const ButtonItems = [
  {
    icon: <AiOutlineClear size={20} />,
    title: "Clear",
    onClickButton: (data: StoreTypes) => {
      if (data.data?.trim()?.length > 0 && window.confirm("Do you really want to clear all content?")) {
        data.setData("");
      }
    },
  },
  {
    icon: <AiOutlineUndo size={20} />,
    title: "Undo",
    onClickButton: (data: StoreTypes) => {
      document.execCommand("undo");
    },
  },
  {
    icon: <AiOutlineRedo size={20} />,
    title: "Redo",
    onClickButton: (data: StoreTypes) => {
      document.execCommand("redo");
    },
  },
  {
    icon: <GrBlockQuote size={20} />,
    title: "Quote",
    onClickButton: (data: StoreTypes) => {
      insertText(data.positionCursor, data, "“", "”");
    },
  },
  {
    icon: <RxDash size={20} />,
    title: "En Dash",
    onClickButton: (data: StoreTypes) => {
      insertText(data.positionCursor, data, "–");
    },
  },
  {
    icon: <BsDash size={20} />,
    title: "Em Dash",
    onClickButton: (data: StoreTypes) => {
      insertText(data.positionCursor, data, "—");
    },
  },
  {
    icon: <TbHexagonLetterO size={20} />,
    title: "Chōon",
    onClickButton: (data: StoreTypes) => {
      let selStart = data.positionCursor.selStart;
      let selEnd = data.positionCursor.selEnd;
      let old = data.data;
      if (selStart === selEnd && selStart > 0) selStart--;

      let selected = old.slice(selStart, selEnd);
      if (selected.length !== 1) return;
      switch (selected) {
        case "a":
          selected = "ā";
          break;
        case "i":
          selected = "ī";
          break;
        case "u":
          selected = "ū";
          break;
        case "e":
          selected = "ē";
          break;
        case "o":
          selected = "ō";
          break;
        case "A":
          selected = "Ā";
          break;
        case "I":
          selected = "Ī";
          break;
        case "U":
          selected = "Ū";
          break;
        case "E":
          selected = "Ē";
          break;
        case "O":
          selected = "Ō";
      }
      const newData = old.slice(0, selStart) + selected + old.slice(selEnd);
      data.setData(newData);
    },
  },
  {
    icon: <RxLetterCaseUppercase size={20} />,
    title: "UPPER CASE",
    onClickButton: (data: StoreTypes) => {
      let selStart = data.positionCursor.selStart;
      let selEnd = data.positionCursor.selEnd;
      let old = data.data;
      const newData = old.slice(0, selStart) + old.slice(selStart, selEnd).toUpperCase() + old.slice(selEnd);

      setPositionCursorInText(data.positionCursor);

      data.setPositionCursor({ selStart, selEnd });
      data.setData(newData);
    },
  },
  {
    icon: <RxLetterCaseLowercase size={20} />,
    title: "lower case",
    onClickButton: (data: StoreTypes) => {
      let selStart = data.positionCursor.selStart;
      let selEnd = data.positionCursor.selEnd;

      let old = data.data;
      const newData = old.slice(0, selStart) + old.slice(selStart, selEnd).toLowerCase() + old.slice(selEnd);
      setPositionCursorInText(data.positionCursor);
      data.setPositionCursor({ selStart, selEnd });
      data.setData(newData);
    },
  },
  {
    icon: <MdContentCopy size={20} />,
    title: "Copy",
    onClickButton: (data: StoreTypes) => {
      if (data.data.trim().length > 0) navigator.clipboard.writeText(data.data);
    },
  },
  {
    icon: <MdContentPasteGo size={20} />,
    title: "Paste",
    onClickButton: (data: StoreTypes) => {
      navigator.clipboard.readText().then((clip) => {
        let selStart = data.positionCursor.selStart;
        let selEnd = data.positionCursor.selEnd;
        let old = data.data;
        const newData = old.slice(0, selStart) + clip + old.slice(selEnd);
        data.setData(newData);
      });
    },
  },
  {
    icon: <MdWrapText size={20} />,
    title: "Toggle Wrap",
    onClickButton: (data: StoreTypes) => {
      data.setIsWrap(!data.isWrap);
    },
  },
  {
    icon: <TbLayoutBottombarCollapse size={20} />,
    icon_active: <TbLayoutBottombarExpand size={20} />,
    title: "Toggle Status bar",
    onClickButton: (data: StoreTypes) => {
      data.setIsShowFooter(!data.isShowFooter);
    },
  },
  {
    icon: <MdOutlineTextDecrease size={20} />,
    title: "Decrease",
    onClickButton: (data: StoreTypes) => {
      if (data.fontSize > 0.5) {
        data.setFontSize(Number(data.fontSize - 0.5));
      }
    },
  },
  {
    icon: <MdOutlineTextIncrease size={20} />,
    title: "Increase",
    onClickButton: (data: StoreTypes) => {
      data.setFontSize(Number(data.fontSize + 0.5));
    },
  },
];
