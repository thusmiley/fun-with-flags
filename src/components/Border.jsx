import Link from "next/link";
import { useContext } from "react";
import { CountriesContext } from "@/context/countriesContext";
import useFetch from "@/hooks/useFetch";

const Border = ({ countryCode }) => {
  const { countries, isLoading, error } = useFetch(
    `alpha?codes=${countryCode}`
  );
  return error ? (
    <p className="mt-8 xl:mt-[48px] text-[12px] leading-[20px] text-center">
      {error.message}
    </p>
  ) : isLoading ? (
    <p className="mt-8 xl:mt-[48px] text-[12px] leading-[20px] text-center">
      Loading...
    </p>
  ) : (
    <div>
      <Link href={`/country/${countries[0].name.common}`}>
        {countries[0].name.common}
      </Link>
    </div>
  );
};

export default Border;
