import Image from "next/image";

export default function Card3() {
  return (
    <>
      <div className="sm:w-60 w-full  bg-primary-veryDarkCyan p-8  max-sm:rounded-b-lg sm:rounded-r-lg flex flex-col gap-4">
        <div>
          <Image
            src={"/images/icon-luxury.svg"}
            alt="sedan"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h1 className="font-bold text-second-veryLightGray text-3xl">
            LUXURY
          </h1>
        </div>
        <div>
          <p className="text-second-transparentWhite font-lexend-deca font-light text-xs leading-5">
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
        </div>
        <div className="flex h-full items-end">
          <button className="p-3 px-4 text-primary-veryDarkCyan bg-second-veryLightGray rounded-full hover:bg-primary-veryDarkCyan border-2 border-second-veryLightGray hover:text-second-veryLightGray">
            <h1 className=" font-lexend-deca text-xs">Learn More</h1>
          </button>
        </div>
      </div>
    </>
  );
}
