"use client";

import { useState, Fragment, useContext } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CountriesContext } from "@/context/countriesContext";
import { regions } from "@/config/regionList";

const Filter = () => {
  const { handleRegionSelect, setSearchFilterData, searchFilterData } =
    useContext(CountriesContext);

  return (
    <div className="bg-white w-[200px] px-6 py-[14px] box-shadow rounded-[5px] text-[12px] leading-[20px] dark:bg-darkModeInputBg">
      <Listbox value={regions[searchFilterData?.filterInput]}>
        <Listbox.Button as={Fragment}>
          <span className="flex justify-between items-center w-[152px] cursor-pointer">
            {regions[searchFilterData?.filterInput]}
            <svg
              alt="filter by region"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                className="dark:fill-white"
                clipRule="evenodd"
                d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
                fill="black"
              />
            </svg>
          </span>
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options as={Fragment}>
            <ul className="absolute top-[18px] -left-6 bg-white w-[200px] py-[14px] box-shadow rounded-[5px] leading-[16px] outline-none dark:bg-darkModeInputBg">
              {regions.map((item, index) => (
                <Listbox.Option id={index} as={Fragment}>
                  {({ active, selected }) => (
                    <li
                      className={`${
                        active && "bg-lightModeBg dark:bg-darkModeBg"
                      } ${
                        index === 0 ? "hidden" : ""
                      } cursor-pointer py-1 px-6`}
                      onClick={() => handleRegionSelect(index)}
                    >
                      {item}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </ul>
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default Filter;
