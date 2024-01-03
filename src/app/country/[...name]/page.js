"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Country({ params }) {
  const router = useRouter();
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.name.toString().replace(/-/g, " ")}`)
      .then((response) => response.json())
      .then((response) => response?.filter((item) => item.name.common === params.name.toString().replace(/-/g, " ")))
      .then((response) => {
        return convertCountryCodes(response)
      })
      .then((country) => setCountryData(country))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  async function convertCountryCodes(countryObject){
    let convertedCountries = []
    for(let countryCode of countryObject[0].borders){
      let response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCode}`)
      .then((response) => response.json()) 
      convertedCountries.push(response[0].name.common)
    }
    countryObject[0].borders = convertedCountries
    return countryObject
  }

  return (
    <main className="min-h-screen px-4 mx-auto pt-6 pb-[65px] max-w-[1280px] md:px-10 xl:pt-[48px]">
      <button
        type="button"
        className="border-none outline-none bg-white box-shadow text-[14px] leading-5 dark:bg-darkModeInputBg inline-flex items-center py-[7px] px-6 rounded-[5px]"
        onClick={() => router.back()}
      >
        <svg width="18" height="18" className="mr-2" alt="" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="call-made">
            <path
              className="dark:fill-white"
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
              fill="#111517"
            />
          </g>
        </svg>
        Back
      </button>

      <div className="mt-8 mx-auto lg:flex lg:justify-start lg:items-center lg:mt-[80px]">
        {countryData[0] && (
          <Image
            src={countryData[0]?.flags.svg}
            width={320}
            height={229}
            alt="flag image"
            className="w-[320px] h-[229px] object-fill object-center mx-auto mb-[44px] lg:mx-0 lg:w-[560px] lg:h-[401px] lg:mb-0"
          />
        )}

        <div className="lg:ml-[120px]">
          <h2 className="text-[22px] font-extrabold mb-4">{countryData[0]?.name.common}</h2>
          <div className="space-y-8 xl:flex xl:justify-start xl:items-start xl:space-x-[50px] xl:space-y-0">
            <div>
              <p className="text-[14px] leading-8 font-semibold">
                Native Name: <span className="font-light">{countryData[0]?.name.nativeName[Object.keys(countryData[0]?.name.nativeName)[0]].common}</span>
              </p>

              <p className="text-[14px] leading-8 font-semibold">
                Population: <span className="font-light">{countryData[0]?.population.toLocaleString()}</span>
              </p>
              <p className="text-[14px] leading-8 font-semibold">
                Region: <span className="font-light">{countryData[0]?.region}</span>
              </p>
              <p className="text-[14px] leading-8 font-semibold">
                Sub Region: <span className="font-light">{countryData[0]?.subregion}</span>
              </p>
              <p className="text-[14px] leading-8 font-semibold">
                Capital: <span className="font-light">{countryData[0]?.capital}</span>
              </p>
            </div>

            <div>
              <p className="text-[14px] leading-8 font-semibold">
                Top Level Domain: &nbsp;
                {countryData[0]
                  ? countryData[0].tld.map((domain, index) => (
                      <span key={index} className="font-light">
                        {(index ? ", " : "") + domain}
                      </span>
                    ))
                  : []}
              </p>
              <p className="text-[14px] leading-8 font-semibold">
                Currencies: <span className="font-light">{countryData[0]?.currencies[Object.keys(countryData[0]?.currencies)[0]].name}</span>
              </p>

              <p className="text-[14px] leading-8 font-semibold">
                Languages: &nbsp;
                {countryData[0]
                  ? Object.keys(countryData[0]?.languages).map((langKey, index) => (
                      <span key={index} className="font-light">
                        {(index ? ", " : "") + countryData[0]?.languages[langKey]}
                      </span>
                    ))
                  : []}
              </p>
            </div>
          </div>
          <div className="mt-[34px]">
            <h3 className="text-[16px] leading-[24px] mb-4">Border Countries: </h3>

            {countryData[0] && countryData[0].borders?.length > 0 ? (
              <ul className="flex flex-wrap gap-[10px]">
                {countryData[0]?.borders?.map((item, index) => (
                  <li className="bg-white w-auto text-[12px] font-light py-[6px] px-[30px] box-shadow rounded-[5px] dark:bg-darkModeInputBg" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[14px] leading-8">None</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
