"use client";
import { useState, useEffect } from "react";

const Search = ({ setData, setFilteredData, setSearchedData, setSearchError, searchKeyword, setSearchKeyword }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchKeyword(e.target.search.value);
  };

  useEffect(() => {
    if (searchKeyword === null || searchKeyword === "" || searchKeyword === undefined) {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((response) => response.json())
        .then((response) => {
          setData(response);
          setSearchedData(response);
          setFilteredData(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch(`https://restcountries.com/v3.1/name/${searchKeyword}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Country does not exist.");
          }
        })
        .then((response) => {
          setSearchedData(response);
          setFilteredData(response);
          setSearchError(false);
          setSearchKeyword(searchKeyword);
        })
        .catch((error) => {
          setSearchKeyword(searchKeyword);
          setSearchError(true);
        });
    }
  }, [searchKeyword]);

  return (
    <form action="" onSubmit={handleSubmit} autoComplete="off">
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
          className={`py-[14px] pl-[74px] bg-white w-full text-[12px] leading-[20px] text-lightModeText placeholder:text-[#c4c4c4] outline-[1px] outline-offset-2 outline-lightModeText border-[1px] box-shadow rounded-[5px] caret-lightModeText dark:bg-darkModeInputBg dark:text-white dark:caret-white md:w-[480px]`}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;
