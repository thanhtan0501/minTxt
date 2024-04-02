import { StoreTypes } from "../stores";

const insertText = (
  positionCursor: {
    selStart: number;
    selEnd: number;
  },
  data: string,
  openText: string,
  closeText?: string
) => {
  // If supplied just one: insert {openText}.
  // If supplied both: insert or wrap with both.

  let old = data;

  if (closeText === undefined) closeText = "";

  let newData =
    old.slice(0, positionCursor.selStart) +
    openText +
    old.slice(positionCursor.selStart, positionCursor.selEnd) +
    closeText +
    old.slice(positionCursor.selEnd);
  return newData;
};

export const ButtonItems = [
  {
    text: "◌",
    title: "Clear",
    onClickButton: ({ data, setData, isShowFooter, setIsShowFooter, setIsWrap, isWrap }: StoreTypes) => {
      if (data?.trim()?.length > 0 && window.confirm("Do you really want to clear all content?")) {
        setData("");
      }
    },
  },
  {
    text: "↻",
    title: "Undo",
    onClickButton: ({ data, setData, isShowFooter, setIsShowFooter, setIsWrap, isWrap }: StoreTypes) => {
      document.execCommand("undo");
    },
  },
  {
    text: "↺",
    title: "Redo",
    onClickButton: ({ data, setData, isShowFooter, setIsShowFooter, setIsWrap, isWrap }: StoreTypes) => {
      document.execCommand("redo");
    },
  },
  {
    text: "“”",
    title: "Quote",
    onClickButton: ({
      data,
      setData,
      isShowFooter,
      setIsShowFooter,
      setIsWrap,
      isWrap,
      positionCursor,
    }: StoreTypes) => {
      const res = insertText(positionCursor, data, "“", "”");
      setData(res);
    },
  },
  {
    text: "–",
    title: "En Dash",
    onClickButton: ({
      data,
      setData,
      isShowFooter,
      setIsShowFooter,
      setIsWrap,
      isWrap,
      positionCursor,
    }: StoreTypes) => {
      const res = insertText(positionCursor, data, "–");
      setData(res);
    },
  },
  {
    text: "—",
    title: "Em Dash",
    onClickButton: ({
      data,
      setData,
      isShowFooter,
      setIsShowFooter,
      setIsWrap,
      isWrap,
      positionCursor,
    }: StoreTypes) => {
      const res = insertText(positionCursor, data, "—");
      setData(res);
    },
  },
  {
    text: "ō",
    title: "Chōon",
    onClickButton: ({
      data,
      setData,
      isShowFooter,
      setIsShowFooter,
      setIsWrap,
      isWrap,
      positionCursor,
    }: StoreTypes) => {
      let selStart = positionCursor.selStart;
      let selEnd = positionCursor.selEnd;
      let old = data;
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
      setData(newData);
    },
  },
  {
    text: "AB",
    title: "UPPER CASE",
    onClickButton: ({
      data,
      setData,
      isShowFooter,
      setIsShowFooter,
      setIsWrap,
      isWrap,
      positionCursor,
    }: StoreTypes) => {
      let selStart = positionCursor.selStart;
      let selEnd = positionCursor.selEnd;
      let old = data;
      const newData = old.slice(0, selStart) + old.slice(selStart, selEnd).toUpperCase() + old.slice(selEnd);
      setData(newData);
    },
  },
  {
    text: "ab",
    title: "lower case",
    onClickButton: ({
      data,
      setData,
      isShowFooter,
      setIsShowFooter,
      setIsWrap,
      isWrap,
      positionCursor,
    }: StoreTypes) => {
      let selStart = positionCursor.selStart;
      let selEnd = positionCursor.selEnd;
      let old = data;
      const newData = old.slice(0, selStart) + old.slice(selStart, selEnd).toLowerCase() + old.slice(selEnd);
      setData(newData);
    },
  },
  {
    text: "⧉",
    title: "Copy",
    onClickButton: ({ data, setData, isShowFooter, setIsShowFooter, setIsWrap, isWrap }: StoreTypes) => {
      if (data.trim().length > 0) navigator.clipboard.writeText(data);
    },
  },
  {
    text: "📋",
    title: "Paste",
    onClickButton: ({
      data,
      setData,
      isShowFooter,
      setIsShowFooter,
      setIsWrap,
      isWrap,
      positionCursor,
    }: StoreTypes) => {
      navigator.clipboard.readText().then((clip) => {
        let selStart = positionCursor.selStart;
        let selEnd = positionCursor.selEnd;
        let old = data;
        const newData = old.slice(0, selStart) + clip + old.slice(selEnd);
        setData(newData);
      });
    },
  },
  {
    text: "⥻",
    title: "Toggle Wrap",
    onClickButton: ({ data, setData, isShowFooter, setIsShowFooter, setIsWrap, isWrap }: StoreTypes) => {
      setIsWrap(!isWrap);
    },
  },
  {
    text: "‗",
    title: "Toggle Status bar",
    onClickButton: ({ data, setData, isShowFooter, setIsShowFooter, setIsWrap, isWrap }: StoreTypes) => {
      setIsShowFooter(!isShowFooter);
    },
  },
];
