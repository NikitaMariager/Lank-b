import React from "react";
import { useGetData } from "../hooks/useRequestData";
import { useEffect } from "react";

function Events() {
  const { error, loading, data, getData } = useGetData();

  useEffect(() => {
    getData("http://localhost:5100/api/events/sort");
  }, []);

  const dateConvert = (eventDate) => {
    const formatetDate = eventDate.substring(0, 10);

    const date = new Date(formatetDate).toLocaleString("da", {
      day: "numeric",
      month: "short",
    });

    return date;
  };

  return (
    <div className="grid md:grid-cols-3  md:gap-10 mx-5 md:mx-10">
      {data &&
        data.events.slice(0, 3).map((e) => (
          <div key={e._id}>
            <div className="lg:col-start-3 col-span-2  p-6 bg-offwhite shadow-event w-full  mt-10 ">
              {/* image container */}
              <div className="lg:h-72 w-full">
                <a href={e.link} target="_blank">
                  <img
                    className="object-cover w-full h-full "
                    src={"http://localhost:5100/images/" + e.eventimage}
                    alt={e.name}
                  ></img>
                </a>
              </div>

              {/* text container */}
              <div>
                <p className="text-4xl pt-4 pb-2 bg-beige text-transparent bg-clip-text text-shadow-event capitalize  font-bold ">
                  {dateConvert(e.datestart)}
                </p>
                <p>{e.titel}</p>
                <p className="text-3xl py-2 capitalize">{e.city}</p>

                <a
                  href={e.link}
                  target="_blank"
                  className="pb-4 cursor-pointer
                  w-4 h-4 hover:text-blue-900 hover:fill-blue-900 "
                >
                  Tilmeld på Facebook{" "}
                  <svg
                    className="inline-block pb-1 "
                    xmlns="http://www.w3.org/2000/svg"
                    width="12.364"
                    height="19.048"
                    viewBox="0 0 12.364 19.048"
                  >
                    <path
                      id="facebook-boxed-svgrepo-com"
                      d="M345.251,4.84a1.717,1.717,0,0,1,1.18-.364H349.3l.063-4.142-.433-.106a13.547,13.547,0,0,0-3-.227c-3.334,0-5.574,2.333-5.574,5.8v.932H337v4.477h3.357v7.834h4.477V11.214h3.539l.616-4.477h-4.154V6.051a1.591,1.591,0,0,1,.417-1.211"
                      transform="translate(-337)"
                      fillRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Events;
