import Image from "next/image";

const CountryCard = ({ country }) => {
  return (
    <div className="bg-white rounded-[5px] mx-auto max-w-[264px] cursor-pointer dark:bg-darkModeInputBg">
      <Image
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        width={264}
        height={160}
        className="object-cover object-center rounded-t-[5px] w-[264px] h-[160px]"
        priority="false"
      />
      <div className="pt-6 px-6 pb-[46px]">
        <h2 className="text-[18px] leading-[26px] font-extrabold mb-4">{country.name.common}</h2>
        <p className="text-[14px] leading-[16px] font-semibold">
          Population: <span className="font-light">{country.population.toLocaleString()}</span>
        </p>
        <p className="text-[14px] leading-[16px] font-semibold my-2">
          Region: <span className="font-light">{country.region}</span>
        </p>
        <p className="text-[14px] leading-[16px] font-semibold">
          Capital: <span className="font-light">{country.capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
