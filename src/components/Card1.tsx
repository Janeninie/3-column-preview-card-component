import Image from "next/image";

export default function Card1() {
  return (
    <>
      <div className="sm:w-60 w-full  bg-primary-brightOrange p-8  max-sm:rounded-t-lg sm:rounded-l-lg flex flex-col gap-4">
        <div>
          <Image
            src={"/images/icon-sedans.svg"}
            alt="sedan"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h1 className="font-bold text-second-veryLightGray text-3xl">
            SEDANS
          </h1>
        </div>
        <div>
          <p className="text-second-transparentWhite font-lexend-deca font-light text-xs leading-5">
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
        </div>
        <div className="flex h-full items-end">
          <button className="p-3 px-4 text-primary-brightOrange bg-second-veryLightGray rounded-full hover:bg-primary-brightOrange border-2 border-second-veryLightGray hover:text-second-veryLightGray">
            <h1 className="font-lexend-deca text-xs">Learn More</h1>
          </button>
        </div>
      </div>
    </>
  );
}
