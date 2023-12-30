"use client";

import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const regions = [
  { id: 0, name: "Filter by Region" },
  { id: 1, name: "Africa" },
  { id: 2, name: "Americas" },
  { id: 3, name: "Asia" },
  { id: 4, name: "Europe" },
  { id: 5, name: "Oceania" },
];

const Filter = ({ filterStatus, setFilterStatus, filteredData, setFilteredData }) => {
  const [selected, setSelected] = useState(regions[0]);

  return (
    <div className="bg-white w-[200px] px-6 py-[14px] box-shadow rounded-[5px] text-[12px] leading-[20px] dark:bg-darkModeInputBg">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button as={Fragment}>
          <span className="flex justify-between items-center w-[152px] cursor-pointer">
            {selected.name}
            <svg alt="filter by region" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" className="dark:fill-white" clipRule="evenodd" d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z" fill="black" />
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
              <Listbox.Option id={regions[1].id} value={regions[1]} as={Fragment}>
                {({ active, selected }) => (
                  <li className={`${active && "bg-lightModeBg dark:bg-darkModeBg"} cursor-pointer py-1 px-6`} onClick={() => setFilterStatus("africa")}>
                    {regions[1].name}
                  </li>
                )}
              </Listbox.Option>
              <Listbox.Option id={regions[2].id} value={regions[2]} as={Fragment}>
                {({ active, selected }) => (
                  <li className={`${active && "bg-lightModeBg dark:bg-darkModeBg"} cursor-pointer py-1 px-6`} onClick={() => setFilterStatus("americas")}>
                    {regions[2].name}
                  </li>
                )}
              </Listbox.Option>
              <Listbox.Option id={regions[3].id} value={regions[3]} as={Fragment}>
                {({ active, selected }) => (
                  <li className={`${active && "bg-lightModeBg dark:bg-darkModeBg"} cursor-pointer py-1 px-6`} onClick={() => setFilterStatus("asia")}>
                    {regions[3].name}
                  </li>
                )}
              </Listbox.Option>
              <Listbox.Option id={regions[4].id} value={regions[4]} as={Fragment}>
                {({ active, selected }) => (
                  <li className={`${active && "bg-lightModeBg dark:bg-darkModeBg"} cursor-pointer py-1 px-6`} onClick={() => setFilterStatus("europe")}>
                    {regions[4].name}
                  </li>
                )}
              </Listbox.Option>
              <Listbox.Option id={regions[5].id} value={regions[5]} as={Fragment}>
                {({ active, selected }) => (
                  <li className={`${active && "bg-lightModeBg dark:bg-darkModeBg"} cursor-pointer py-1 px-6`} onClick={() => setFilterStatus("oceania")}>
                    {regions[5].name}
                  </li>
                )}
              </Listbox.Option>
            </ul>
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default Filter;
