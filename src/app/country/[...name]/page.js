"use client";

import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import useFetch from "@/hooks/useFetch";
import Border from "@/components/Border";
import { notFound } from "next/navigation";

export default function Country({ params }) {
  const router = useRouter();
  const { countries, isLoading, error } = useFetch(
    `name/${params.name.toString().replace(/-/g, " ")}?fullText=true`
  );

  return (
    <main className="min-h-screen px-4 mx-auto pt-6 pb-[65px] max-w-[1280px] md:px-10 xl:pt-[48px]">
      {error ? (
        <p className="mt-8 xl:mt-[48px] text-[12px] leading-[20px] text-center">
          {/* {error.message} */}
          {notFound()}
        </p>
      ) : isLoading ? (
        <p className="mt-8 xl:mt-[48px] text-[12px] leading-[20px] text-center">
          Loading...
        </p>
      ) : (
        <div>
          <button
            type="button"
            className="border-none outline-none bg-white box-shadow text-[14px] leading-5 dark:bg-darkModeInputBg inline-flex items-center py-[7px] px-6 rounded-[5px]"
            onClick={() => router.back()}
          >
            <svg
              width="18"
              height="18"
              className="mr-2"
              alt=""
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            {countries[0] && (
              <Image
                src={countries[0].flags.svg}
                width={320}
                height={229}
                alt="flag image"
                className="w-[320px] h-[229px] object-fill object-center mx-auto mb-[44px] lg:mx-0 lg:w-[560px] lg:h-[401px] lg:mb-0"
                priority
              />
            )}

            <div className="lg:ml-[120px]">
              <h2 className="text-[22px] font-extrabold mb-4">
                {countries[0].name.common}
              </h2>
              <div className="space-y-8 xl:flex xl:justify-start xl:items-start xl:space-x-[50px] xl:space-y-0">
                <div>
                  <p className="text-[14px] leading-8 font-semibold">
                    Native Name:&nbsp;
                    <span className="font-light">
                      {typeof countries[0].name.nativeName != "undefined" &&
                      countries[0].name.nativeName != null
                        ? Object.values(countries[0].name.nativeName)[0]
                            .official
                        : "NA"}
                    </span>
                  </p>

                  <p className="text-[14px] leading-8 font-semibold">
                    Population:&nbsp;
                    <span className="font-light">
                      {countries[0].population.toLocaleString() || "NA"}
                    </span>
                  </p>
                  <p className="text-[14px] leading-8 font-semibold">
                    Region:&nbsp;
                    <span className="font-light">
                      {countries[0].region || "NA"}
                    </span>
                  </p>
                  <p className="text-[14px] leading-8 font-semibold">
                    Sub Region:&nbsp;
                    <span className="font-light">
                      {countries[0].subregion ? countries[0].subregion : "NA"}
                    </span>
                  </p>
                  <p className="text-[14px] leading-8 font-semibold">
                    Capital:&nbsp;
                    <span className="font-light">
                      {countries[0].capital ? countries[0].capital : "NA"}
                    </span>
                  </p>
                </div>

                <div>
                  <p className="text-[14px] leading-8 font-semibold">
                    Top Level Domain:&nbsp;
                    {countries[0]
                      ? countries[0].tld.map((domain, index) => (
                          <span key={index} className="font-light">
                            {(index ? ", " : "") + domain}
                          </span>
                        ))
                      : "NA"}
                  </p>
                  <p className="text-[14px] leading-8 font-semibold">
                    Currencies:&nbsp;
                    <span className="font-light">
                      {typeof countries[0].currencies != "undefined" &&
                      countries[0].currencies != null
                        ? Object.values(countries[0].currencies)[0].name
                        : "NA"}
                    </span>
                  </p>

                  <p className="text-[14px] leading-8 font-semibold">
                    Languages:&nbsp;
                    <span className="font-light">
                      {typeof countries[0].languages != "undefined" &&
                      countries[0].languages != null
                        ? Object.values(countries[0].languages).join(", ")
                        : "NA"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-[34px]">
                <h3 className="text-[16px] leading-[24px] mb-4">
                  Border Countries:
                </h3>

                {countries[0].borders ? (
                  <ul className="flex flex-wrap gap-[10px]">
                    {countries[0].borders.map((item, index) => (
                      <li
                        className="bg-white w-auto text-[12px] font-light py-[6px] px-[30px] box-shadow rounded-[5px] dark:bg-darkModeInputBg"
                        key={index}
                      >
                        <Border countryCode={item} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[14px] leading-8">None</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
