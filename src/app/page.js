"use client";

import CountryCard from "@/components/CountryCard";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredData, setFilteredData] = useState([]);
  const [regionData, setRegionData] = useState(filteredData);
  const [searchError, setSearchError] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        setFilteredData(response);
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    switch (filterStatus) {
      case "africa":
        return setRegionData(filteredData.filter((item) => item.region === "Africa"));
      case "americas":
        return setRegionData(filteredData.filter((item) => item.region === "Americas"));
      case "asia":
        return setRegionData(filteredData.filter((item) => item.region === "Asia"));
      case "europe":
        return setRegionData(filteredData.filter((item) => item.region === "Europe"));
      case "oceania":
        return setRegionData(filteredData.filter((item) => item.region === "Oceania"));
      case "all":
        return setRegionData(filteredData);

        console.log(regionData);
        console.log(filteredData);
        setFilteredData(regionData);
    }
  }, [filterStatus]);

  return (
    <main className="min-h-screen px-4 mx-auto pt-6 pb-[65px] max-w-[1280px] md:px-10 xl:pt-[48px]">
      <div className="space-y-[40px] lg:flex lg:justify-between lg:items-center lg:space-y-0">
        <Search setFilteredData={setFilteredData} setSearchError={setSearchError} setSearchKeyword={setSearchKeyword} />
        <Filter setFilterStatus={setFilterStatus} />
      </div>
      {searchError ? (
        <p className="mt-8 xl:mt-[48px] text-[12px] leading-[20px] text-center">Country "{searchKeyword}" doesn't exist.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mt-[48px] xl:gap-[75px]">
          {filteredData?.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      )}
    </main>
  );
}
