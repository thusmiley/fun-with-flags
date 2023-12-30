"use client";

import CountryCard from "@/components/CountryCard";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

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
        return setFilteredData(data.filter((item) => item.region === "Africa"));
      case "americas":
        return setFilteredData(data.filter((item) => item.region === "Americas"));
      case "asia":
        return setFilteredData(data.filter((item) => item.region === "Asia"));
      case "europe":
        return setFilteredData(data.filter((item) => item.region === "Europe"));
      case "oceania":
        return setFilteredData(data.filter((item) => item.region === "Oceania"));
      case "all":
        return setFilteredData(data);
        console.log(filteredData);
    }
  }, [filterStatus]);

  return (
    <main className="min-h-screen px-4 mx-auto pt-6 pb-[65px] max-w-[1280px] md:px-10 xl:pt-[48px]">
      <section className="space-y-[40px] lg:flex lg:justify-between lg:items-center lg:space-y-0">
        <Search filteredData={filteredData} setFilteredData={setFilteredData} />
        <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} filteredData={filteredData} setFilteredData={setFilteredData} />
      </section>

      <section className="mt-8 grid grid-cols-1 gap-y-10 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mt-[48px] xl:gap-[75px]">
        {filteredData.map((country, index) => (
          <CountryCard key={index} country={country} />
        ))}
      </section>
    </main>
  );
}
