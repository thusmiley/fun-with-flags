"use client";

import { useForm } from "react-hook-form";
import lightSearchIcon from "../../public/images/light-search-icon.svg";
import darkSearchIcon from "../../public/images/dark-search-icon.svg";
import Image from "next/image";


const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://api.tinyurl.com/create`, {
      method: "POST",
      headers: {
        accept: "application/json",
        authorization: `Bearer ${process.env.NEXT_PUBLIC_TINY_URL_API}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        url: data.urlInput,
        domain: "tinyurl.com",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setUrlList([...urlList, response]);
      })
      .catch((error) => {
        console.log(error);
      });
    setInputValue("");
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <Image src={lightSearchIcon} alt="search" className="w-4 h-full object-contain absolute left-8" />
        <input
          type="search"
          {...register("search", {
            required: "Please enter a country name",
            pattern: {
              value: /[a-zA-Z]{2,}/,
              message: "Invalid",
            },
          })}
          placeholder="Search for a country…"
          className="py-[14px] pl-[74px] bg-white w-full text-[12px] leading-[20px] text-lightModeText placeholder:text-[#c4c4c4] outline-[1px] outline-lightModeText box-shadow rounded-[5px] caret-lightModeText"
        />
      </div>
    </form>
  );
};

export default Search;
