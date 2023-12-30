"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import lightMoon from "../../public/images/darkMoon.svg";
import darkMoon from "../../public/images/lightMoon.svg";
import { useToggle } from "@/hooks/useToggle";

const NavBar = () => {
  const [isDark, toggleTheme] = useToggle(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme-color") === "dark";
    }
  });

  useEffect(() => {
    document.documentElement.className = isDark ? "dark" : "";
    localStorage.setItem("theme-color", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <header className="bg-white dark:bg-darkModeInputBg box-shadow">
      <div className="px-4 py-[30px] flex justify-between items-center mx-auto max-w-[1280px] dark:text-white md:px-10">
        <h1 className="text-[14px] font-extrabold leading-[20px] xl:text-[24px] xl:leading-auto">Fun with flags</h1>
        <div className="flex justify-end items-center cursor-pointer" onClick={toggleTheme}>
          <Image src={isDark ? darkMoon : lightMoon} width={16} height={16} alt="dark mode switch" className="w-4 h-full object-contain object-center xl:w-5" />
          <p className="text-[12px] ml-2 font-semibold xl:text-[16px]">Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
