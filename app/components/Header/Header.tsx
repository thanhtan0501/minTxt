"use client";

import React from "react";
import ButtonItem from "../ButtonItem/ButtonItem";

const Header = () => {
  return (
    <header className="flex items-center justify-center overflow-x-auto overflow-hidden w-full">
      <ButtonItem
        text={"◌"}
        onClick={() => {
          console.log(123);
        }}
        title="Clear"
      />
      <ButtonItem
        text={"◌"}
        onClick={() => {
          console.log(123);
        }}
        title="Clear"
      />
    </header>
  );
};

export default Header;
