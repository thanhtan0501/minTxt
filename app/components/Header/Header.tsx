"use client";

import React from "react";
import ButtonItem from "../ButtonItem/ButtonItem";
import { ButtonItems } from "@/app/utils";

const Header = () => {
  return (
    <header className="flex items-center justify-center overflow-x-auto overflow-hidden w-full pt-[calc(var(--spacing))] mx-auto px-[calc(var(--spacing)*2)]">
      {ButtonItems.map((item) => (
        <ButtonItem key={item.title} text={item.text} onClickButton={item.onClickButton} title={item.title} />
      ))}
    </header>
  );
};

export default Header;
