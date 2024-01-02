"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import lightMoon from "../../public/images/darkMoon.svg";
import darkMoon from "../../public/images/lightMoon.svg";
import { useToggle } from "@/hooks/useToggle";

const NavBar = () => {
    const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, [darkMode]);

   const toggleTheme = () => {
     const theme = localStorage.getItem("theme");
     if (theme) {
       localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
     } else {
       localStorage.setItem("theme", "dark");
     }
     setDarkMode(!darkMode);
   };

  return (
    <header className="bg-white dark:bg-darkModeInputBg box-shadow">
      <div className="px-4 py-[30px] flex justify-between items-center mx-auto max-w-[1280px] dark:text-white md:px-10">
        <Link href="/" className="text-[14px] font-extrabold leading-[20px] xl:text-[24px] xl:leading-auto">
          Fun with flags
        </Link>
        <div className="flex justify-end items-center cursor-pointer" onClick={toggleTheme}>
          <Image src={darkMode ? darkMoon : lightMoon} width={16} height={16} alt="dark mode switch" className="w-4 h-auto object-cover object-center xl:w-5" />
          <p className="text-[12px] ml-2 font-semibold xl:text-[16px]">Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
