"use client";
import { createContext, useState, useEffect } from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  const [searchFilterData, setSearchFilterData] = useState({
    searchInput: "",
    filterInput: 0,
  });

  const handleRegionSelect = (index) => {
    setSearchFilterData({ ...searchFilterData, filterInput: index });
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchFilterData({ ...searchFilterData, searchInput: value });
  };

  return (
    <CountriesContext.Provider
      value={{
        handleRegionSelect,
        setSearchFilterData,
        searchFilterData,
        handleSearch,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
