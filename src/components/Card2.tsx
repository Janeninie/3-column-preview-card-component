import Image from "next/image";

export default function Card2() {
  return (
    <>
      <div className="sm:w-60 w-full  bg-primary-darkCyan p-8  flex flex-col gap-4">
        <div>
          <Image
            src={"/images/icon-suvs.svg"}
            alt="sedan"
            width={50}
            height={50}
          />
        </div>
        <div>
          <h1 className="font-bold text-second-veryLightGray text-3xl">SUVS</h1>
        </div>
        <div>
          <p className="text-second-transparentWhite font-lexend-deca font-light text-xs leading-5">
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures
          </p>
        </div>
        <div className="flex h-full items-end">
          <button className="p-3 px-4 text-primary-darkCyan bg-second-veryLightGray rounded-full hover:bg-primary-darkCyan border-2 border-second-veryLightGray hover:text-second-veryLightGray">
            <h1 className=" font-lexend-deca text-xs">Learn More</h1>
          </button>
        </div>
      </div>
    </>
  );
}
