"use client";

import React from "react";
import ButtonItem from "../ButtonItem/ButtonItem";
import { ButtonItems } from "@/app/utils/buttonItems";
import ThemeChanger from "../ThemeChanger/ThemeChanger";

const Header = () => {
  return (
    <header className="flex items-center justify-start w-full pt-[calc(var(--spacing))] mx-auto px-[calc(var(--spacing)*2)] flex-wrap overflow-hidden">
      {ButtonItems.map((item) => (
        <ButtonItem key={item.title} icon={item.icon} onClickButton={item.onClickButton} title={item.title} />
      ))}
      <ThemeChanger />
    </header>
  );
};

export default Header;
