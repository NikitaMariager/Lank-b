import React from "react";

function Newsletter() {
  return (
    <form>
      <h5 className="font-handwritten text-3xl pb-3">Hold dig opdateret:</h5>
      <p className="  font-handwritten md:hidden">
        Modtag Dit Landkøb’s nyhedsmail med informationer om vores gårdbutikker,
        arrangementer, nyheder og gode tilbud.
      </p>
      <input
        className="block bg-black/50 p-4 placeholder-black rounded-md  w-full"
        type="text"
        placeholder="Indtast venligst navn"
      ></input>
      <input
        className="block bg-black/50 p-4 placeholder-black rounded-md mt-5 w-full"
        type="email"
        placeholder="Indtast venligst email"
      ></input>

      <button className="w-full">
        <svg
          className=" mx-auto w-1/2 transform hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
          width="345.547"
          height="124.038"
          viewBox="0 0 345.547 124.038"
        >
          <g
            id="Group_18"
            data-name="Group 18"
            transform="translate(-883.977 -6096.5)"
          >
            <text
              id="Se_flere_events"
              data-name="Se flere events"
              transform="translate(936 6179)"
              fontSize="45"
              fontFamily="ThrowMyHandsUpintheAir, Throw My Hands Up in the Air"
            >
              <tspan x="0" y="0">
                Find opskrift
              </tspan>
            </text>
            <line
              id="Line_8"
              data-name="Line 8"
              y1="4"
              x2="330"
              transform="translate(897.5 6112.5)"
              fill="none"
              stroke="#070404"
              strokeLinecap="round"
              strokeWidth="4"
            />
            <line
              id="Line_9"
              data-name="Line 9"
              y2="107"
              transform="translate(894.5 6099.5)"
              fill="none"
              stroke="#000"
              l="round"
              strokeWidth="6"
            />
            <line
              id="Line_10"
              data-name="Line 10"
              x2="2"
              y2="104"
              transform="translate(1216.5 6114.5)"
              fill="none"
              stroke="#000"
              l="round"
              strokeWidth="4"
            />
            <line
              id="Line_11"
              data-name="Line 11"
              x1="331"
              y2="3"
              transform="translate(886.5 6206.5)"
              fill="none"
              stroke="#000"
              l="round"
              strokeWidth="5"
            />
          </g>
        </svg>
      </button>
    </form>
  );
}

export default Newsletter;
