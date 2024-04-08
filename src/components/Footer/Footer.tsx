"use client";

import React, { useEffect, useState } from "react";
import { store } from "../../stores";

export const updateWordCount = (text: string) => {
  let noWord = text.match(/\S+/g)?.length || 0; // Alternative: /\w+/g
  let noChar = text.length;
  return { noChar, noWord };
};

const Footer = () => {
  let { data, isShowFooter } = store();
  const [word, setWord] = useState({
    noChar: 0,
    noWord: 0,
  });

  useEffect(() => {
    const result = updateWordCount(data);
    setWord(result);
  }, [data]);

  return (
    <footer className={`items-center justify-center ${isShowFooter ? "flex" : "hidden"}`}>
      <div className=" text-third-color text-[1rem] border-0 rounded-button-rounded mt-0 mx-auto mb-margin-spacing flex gap-2">
        <span>{word.noWord}w</span>
        <span>{word.noChar}c</span>
      </div>
    </footer>
  );
};

export default Footer;
