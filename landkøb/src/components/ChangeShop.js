import React from "react";
import { useGetData } from "../hooks/useRequestData";
import { useEffect, useState } from "react";

function ChangeShop() {
  const { error, loading, data: shops, getData } = useGetData();

  useEffect(() => {
    getData("http://localhost:5100/api/farmshops/");
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === shops.shop.length - 3) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentIndex, shops]);

  return (
    <div>
      {shops && (
        <div className="px-5 md:px-0 md:grid md:grid-cols-[5%_1fr_1fr_1fr_1fr_5%] lg:grid-cols-[10%_1fr_1fr_1fr_1fr_1fr_1fr_10%]  grid-rows-3 py-20 lg:grid-rows-2 xl:px-20">
          <h2 className="font-handwritten text-center text-3xl pb-10 md:hidden ">
            Udvalgte gårdbutikker
          </h2>

          {/* farm polaroid #1 */}
          <div
            className=" col-start-2 col-span-2 p-6 bg-offwhite shadow-polaroid 
             w-full lg:h-49  overflow-hidden"
          >
            {/* image container */}
            <div className="h-72 w-full">
              <img
                className="object-cover w-full h-full"
                src={
                  "http://localhost:5100/images/" +
                  shops.shop[currentIndex].shopimage
                }
                alt={shops.shop[currentIndex].name}
              ></img>
            </div>

            {/* text container */}
            <div>
              <h1 className="font-handwritten text-2xl font-bold py-4">
                {shops.shop[currentIndex].name} -{" "}
                {shops.shop[currentIndex].city}{" "}
              </h1>
              <p className="pb-4 line-clamp-3 ">
                {shops.shop[currentIndex].short}
              </p>
            </div>
          </div>

          {/* text #1 */}
          <div className="hidden md:block col-span-2 ">
            <p className="px-20 pt-40 rotate-3 font-handwritten text-xl">
              Du finder snart Gårdbutikker i alle byer i Danmark
            </p>
          </div>

          {/* farm polaroid #2 */}
          <div className=" p-6 bg-offwhite shadow-polaroid mt-10 lg:mt-20 lg:h-49 w-full overflow-hidden col-span-2 md:row-start-2 md:col-start-4  lg:row-start-1 lg:col-start-6">
            {/* image container */}
            <div className="h-72 w-full">
              <img
                className="object-cover w-full h-full"
                src={
                  "http://localhost:5100/images/" +
                  shops.shop[currentIndex + 1].shopimage
                }
                alt={shops.shop[currentIndex + 1].name}
              ></img>
            </div>

            {/* text container */}
            <div>
              <h1 className="font-handwritten text-2xl font-bold py-4">
                {shops.shop[currentIndex + 1].name} -{" "}
                {shops.shop[currentIndex + 1].city}{" "}
              </h1>
              <p className="pb-4 line-clamp-3 ">
                {shops.shop[currentIndex + 1].short}
              </p>
            </div>
          </div>

          {/* farm polaroid #3 */}
          <div className="lg:col-start-3 col-span-2  p-6 bg-offwhite shadow-polaroid  lg:h-49 w-full overflow-hidden lg:ml-24 mt-10 md:row-start-3 md:col-start-2 md:ml-0 lg:row-start-2  ">
            {/* image container */}
            <div className="h-72 w-full">
              <img
                className="object-cover w-full h-full "
                src={
                  "http://localhost:5100/images/" +
                  shops.shop[currentIndex + 2].shopimage
                }
                alt={shops.shop[currentIndex + 2].name}
              ></img>
            </div>

            {/* text container */}
            <div>
              <h1 className="font-handwritten text-2xl font-bold py-4 ">
                {shops.shop[currentIndex + 2].name} -{" "}
                {shops.shop[currentIndex + 2].city}{" "}
              </h1>
              <p className="pb-4 line-clamp-3 ">
                {shops.shop[currentIndex + 2].short}
              </p>
            </div>
          </div>

          {/* text #2 */}
          <div className="hidden md:block col-span-3 lg:col-start-5 ml-20 md:row-start-3  md:col-start-4 lg:row-start-2">
            <p className="px-20 pt-40 rotate-[-5deg] font-handwritten text-xl">
              Hvis du gerne vil støtte dit lokalsamfund er det med at handle
              lokalt. Det er den helt rigtig måde at støtte de lokale landmænd
              og fødevareproducenter på.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChangeShop;
