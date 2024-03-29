"use client";
import { useState, useEffect, useContext } from "react";
import { CountriesContext } from "@/context/countriesContext";

const Search = () => {
  const { searchFilterData, handleSearch } = useContext(CountriesContext);

  return (
    <div className="relative">
      <svg
        alt="search"
        className="w-4 h-auto object-contain object-center absolute left-8 top-[14px]"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="search">
          <path
            className="dark:fill-white"
            id="Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.1111 9.77778H10.4L10.1333 9.51111C11.0222 8.53333 11.5556 7.2 11.5556 5.77778C11.5556 2.57778 8.97778 0 5.77778 0C2.57778 0 0 2.57778 0 5.77778C0 8.97778 2.57778 11.5556 5.77778 11.5556C7.2 11.5556 8.53333 11.0222 9.51111 10.1333L9.77778 10.4V11.1111L14.2222 15.5556L15.5556 14.2222L11.1111 9.77778ZM5.77778 9.77778C3.55556 9.77778 1.77778 8 1.77778 5.77778C1.77778 3.55556 3.55556 1.77778 5.77778 1.77778C8 1.77778 9.77778 3.55556 9.77778 5.77778C9.77778 8 8 9.77778 5.77778 9.77778Z"
            fill="#B2B2B2"
          />
        </g>
      </svg>

      <input
        type="search"
        name="search"
        placeholder="Search for a country…"
        value={searchFilterData?.searchInput}
        className={`py-[14px] pl-[74px] bg-white w-full text-[12px] leading-[20px] text-lightModeText placeholder:text-[#c4c4c4] outline-[1px] outline-offset-2 outline-lightModeText border-[1px] border-white dark:border-darkModeInputBg box-shadow rounded-[5px] caret-lightModeText dark:bg-darkModeInputBg dark:text-white dark:caret-white md:w-[480px]`}
        autoComplete="off"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
