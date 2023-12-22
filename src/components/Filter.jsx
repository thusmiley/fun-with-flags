"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";

const regions = [
  { id: 0, name: "Filter by Region" },
  { id: 1, name: "Africa" },
  { id: 2, name: "America" },
  { id: 3, name: "Asia" },
  { id: 4, name: "Europe" },
  { id: 5, name: "Oceania" },
];

const Filter = () => {
  const [selected, setSelected] = useState(regions[0]);
    return (
      <div className="bg-white max-w-[200px] px-6 py-[14px] box-shadow rounded-[5px] text-[12px] leading-[20px]">
        <Listbox value={selected} onChange={setSelected}>
          <Listbox.Button>{selected.name}</Listbox.Button>
          <Listbox.Options>
            {regions.map((region) => (
              <Listbox.Option key={region.id} value={region} disabled={region.unavailable}>
                {region.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    );
};

export default Filter;
