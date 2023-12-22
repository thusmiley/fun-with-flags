"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import darkMoon from "../../public/images/darkMoon.svg";
import lightMoon from "../../public/images/lightMoon.svg";
import { useToggle } from "@/hooks/useToggle";

const NavBar = () => {
  const [isDark, setIsDark] = useToggle(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme-color") === "dark") {
      console.log(localStorage.getItem("theme-color"));
      return true;
    } else {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.className = isDark ? "dark" : "";
    localStorage.setItem("theme-color", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="bg-white px-4 py-[30px] flex justify-between items-center dark:bg-darkModeInputBg dark:text-white box-shadow">
      <h1 className="text-[14px] font-extrabold leading-[20px]">Fun with flags</h1>
      <div className="flex justify-end items-center cursor-pointer" onClick={setIsDark}>
        <Image src={!isDark ? darkMoon : lightMoon} alt="dark mode switch" className="w-4 h-full object-contain object-center" />
        <p className="text-[12px] ml-2 font-semibold">Dark Mode</p>
      </div>
    </header>
  );
};

export default NavBar;
