import React from "react";
import { useGetData } from "../hooks/useRequestData";
import { useEffect } from "react";

function Articles() {
  const { error, loading, data, getData } = useGetData();

  useEffect(() => {
    getData("http://localhost:5100/api/article");
  }, []);

  const dateShort = (articleDate) => {
    const formatetDate = articleDate.substring(0, 10);

    const date = new Date(formatetDate).toLocaleString("da", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    return date;
  };

  return (
    <div
      className="grid md:grid-rows-[1fr_30%] md:grid-cols-3 lg:grid-cols-2  gap-10 px-5 md:px-10 lg:px-20 py-20 
     [&>div:first-child>div]:block 
     [&>div:first-child>div>h4:first-child]:text-3xl
     [&>div:first-child>div>p:nth-child(3)]:line-clamp-6
     "
    >
      {data &&
        data.article.slice(0, 4).map((e) => (
          <div
            className="flex flex-col justify-between md:first:col-span-3  lg:first:row-span-3 lg:first:col-span-1 p-6 bg-offwhite shadow-polaroid "
            key={e._id}
          >
            <div className="w-full md:hidden">
              <img
                className=" object-cover w-full h-full"
                src={"http://localhost:5100/images/" + e.articleimage}
                alt={e.titel}
              ></img>
            </div>

            <div>
              <h4 className="font-handwritten font-bold text-xl pt-4">
                {e.titel}
              </h4>
              <p className="text-sage">{dateShort(e.created)}</p>
            </div>
            <div className="">
              <p className="pt-3 mb-3 line-clamp-3 text-sm">{e.article}</p>
            </div>
            <a
              href="/"
              className="font-handwritten 
              "
            >
              Læs mere
            </a>
          </div>
        ))}
    </div>
  );
}

export default Articles;
