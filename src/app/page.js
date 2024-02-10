"use client";

import CountryCard from "@/components/CountryCard";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { useEffect, useState, useContext } from "react";
import { regions } from "@/config/regionList";
import { CountriesContext } from "@/context/countriesContext";
import useFetch from "@/hooks/useFetch";

export default function Home() {
  const { searchFilterData } = useContext(CountriesContext);
  const { countries, isLoading, error } = useFetch("all");
  const [loadMore, setLoadMore] = useState(20);

  const filterResults = (countries, filterInput, searchInput) => {
    if (!searchInput && filterInput) {
      return countries.filter(
        (country) => country.region === regions[filterInput]
      );
    } else if (searchInput && !filterInput) {
      return countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else if (searchInput && filterInput) {
      return countries.filter(
        (country) =>
          country.region === regions[filterInput] &&
          country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else return countries;
    setLoadMore(20);
  };

  const handleLoadMore = () => {
    setLoadMore(loadMore + 20);
  };

  return (
    <main className="min-h-screen px-4 mx-auto pt-6 pb-[100px] max-w-[1280px] md:px-10 xl:pt-[48px]">
      <div className="space-y-[40px] lg:flex lg:justify-between lg:items-center lg:space-y-0">
        <Search />
        <Filter />
      </div>
      {error ? (
        <p className="mt-8 xl:mt-[48px] text-[12px] leading-[20px] text-center">
          {error.message}
        </p>
      ) : isLoading ? (
        <p className="mt-8 xl:mt-[48px] text-[12px] leading-[20px] text-center">
          Loading...
        </p>
      ) : filterResults(
          countries,
          searchFilterData?.filterInput,
          searchFilterData?.searchInput
        ).length !== 0 ? (
        <div className="text-center relative">
          <div className="mt-8 text-left grid grid-cols-1 gap-y-10 gap-x-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mt-[48px] xl:gap-[75px]">
            {filterResults(
              countries,
              searchFilterData?.filterInput,
              searchFilterData?.searchInput
            )
              .slice(0, loadMore)
              .map((country, index) => (
                <CountryCard key={index} country={country} />
              ))}
          </div>
          {filterResults(
            countries,
            searchFilterData?.filterInput,
            searchFilterData?.searchInput
          ).length > 20 && (
            <button
              className="text-[14px] font-bold py-2 px-4 border-white border-[1px] mt-16 transition-colors duration-200 ease-in-out text-center rounded-[5px] hover:underline xl:text-[16px]"
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </div>
      ) : (
        <p className="mt-8 xl:mt-[48px] text-[12px] leading-[20px] text-center">
          <span className="capitalize">{searchFilterData?.searchInput}</span>
          {`${searchFilterData?.filterInput ? " is" : ""} not found${
            searchFilterData?.filterInput
              ? " in " + regions[searchFilterData?.filterInput]
              : ""
          }.`}
        </p>
      )}
    </main>
  );
}
