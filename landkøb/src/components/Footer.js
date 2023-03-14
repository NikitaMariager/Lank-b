import React from "react";
import Newsletter from "./newsletter";

function Footer() {
  return (
    <div className="bg-hero-pattern grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20 gap-10 xl:px-32">
      <div>
        <h5 className="font-handwritten text-3xl">Find os her:</h5>
        <address>
          Landkøb.dk <br></br> Lundhuse 2C <br></br> 7400 Herning
        </address>
        <a href="mailto: info@ditlandkoeb.dk">info@ditlandkoeb.dk</a>
        <p>CVR: 36478195</p>
      </div>

      <div className="md:col-start-2 md:row-start-1">
        <Newsletter />
      </div>

      <div className="md:row-start-1 md:col-start-1 md:pt-10 lg:pt-0 lg:col-start-3">
        <p className="hidden md:block rotate-15 md:px-20 font-handwritten">
          Modtag Dit Landkøb’s nyhedsmail med informationer om vores
          gårdbutikker, arrangementer, nyheder og gode tilbud.
        </p>
        {/* so me icons */}
        <div className="flex justify-center  gap-4 md:mt-20">
          <a href="/" className="transform hover:scale-105">
            {" "}
            <svg
              className=" opacity-40 hover:opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="71"
              height="61"
              viewBox="0 0 91 81"
            >
              <defs>
                <clipPath id="clip-path">
                  <rect
                    id="Rectangle_22"
                    data-name="Rectangle 22"
                    width="91"
                    height="81"
                    transform="translate(1242 9246.132)"
                    fill="#fff"
                    stroke="#707070"
                    stroke-width="1"
                  />
                </clipPath>
              </defs>
              <g
                id="Mask_Group_1"
                data-name="Mask Group 1"
                transform="translate(-1242 -9246.132)"
                opacity=""
                clip-path="url(#clip-path)"
              >
                <path
                  id="facebook-svgrepo-com"
                  d="M4.63,39.508H76.481a4.794,4.794,0,0,1,4.63,4.63v71.852a4.794,4.794,0,0,1-4.63,4.63H4.63A4.794,4.794,0,0,1,0,115.989V44.137a4.794,4.794,0,0,1,4.63-4.63ZM57.6,85.051H68.8l.487-10.717H57.6V66.42c0-3.044.608-4.75,4.5-4.75h6.82l.246-9.988a51.946,51.946,0,0,0-7.428-.487c-10.717,0-15.467,6.7-15.467,13.885v9.255H38.361V85.051h7.915v29.714H57.6Z"
                  transform="translate(1246.966 9206.513)"
                />
              </g>
            </svg>
          </a>

          <a href="/" className="transform hover:scale-105">
            <svg
              className=" opacity-40 hover:opacity-60 "
              xmlns="http://www.w3.org/2000/svg"
              width="61"
              height="61"
              viewBox="0 0 81 81"
            >
              <path
                id="twitter-rounded-svgrepo-com"
                d="M52.049,22.939H-16.295a6.326,6.326,0,0,0-6.328,6.328V97.611a6.326,6.326,0,0,0,6.328,6.328H52.049a6.326,6.326,0,0,0,6.328-6.328V29.268A6.326,6.326,0,0,0,52.049,22.939Zm-18,34.2c.016.348.016.712.016,1.076,0,11-8.369,23.683-23.683,23.683A23.536,23.536,0,0,1-2.373,78.168a16.47,16.47,0,0,0,1.993.111,16.7,16.7,0,0,0,10.331-3.56,8.3,8.3,0,0,1-7.768-5.774,8.482,8.482,0,0,0,1.566.142,7.772,7.772,0,0,0,2.2-.3A8.319,8.319,0,0,1-.728,60.623v-.095a8.425,8.425,0,0,0,3.765,1.044A8.353,8.353,0,0,1,.459,50.451a23.607,23.607,0,0,0,17.149,8.7,8.211,8.211,0,0,1-.221-1.9,8.327,8.327,0,0,1,14.4-5.7,16.58,16.58,0,0,0,5.284-2.025,8.346,8.346,0,0,1-3.654,4.6,16.7,16.7,0,0,0,4.778-1.313A16.811,16.811,0,0,1,34.045,57.143Z"
                transform="translate(22.623 -22.939)"
              />
            </svg>
          </a>

          <a href="/" className="transform hover:scale-105">
            <svg
              className=" opacity-40 hover:opacity-60"
              fill="#000000"
              width="71px"
              height="71px"
              viewBox="0 3 31 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title />

              <g id="Instagram">
                <path d="M26.49,30H5.5A3.35,3.35,0,0,1,3,29a3.35,3.35,0,0,1-1-2.48V5.5A3.35,3.35,0,0,1,3,3,3.35,3.35,0,0,1,5.5,2h21A3.35,3.35,0,0,1,29,3,3.35,3.35,0,0,1,30,5.5v21A3.52,3.52,0,0,1,26.49,30ZM24.74,10.56a3.45,3.45,0,0,0-3.48-3.49H10.71a3.47,3.47,0,0,0-3.48,3.49V21.1a3.45,3.45,0,0,0,3.48,3.49H21.26a3.43,3.43,0,0,0,3.48-3.49Zm-8.73.9a4.09,4.09,0,0,0-1.38.24,5.36,5.36,0,0,0-1.24.63H9v-.87a2.56,2.56,0,0,1,2.61-2.62h8.75a2.63,2.63,0,0,1,1.89.75A2.48,2.48,0,0,1,23,11.46v.87H18.6a6.14,6.14,0,0,0-1.22-.63A3.87,3.87,0,0,0,16,11.46Zm4.35,11.41H11.61a2.48,2.48,0,0,1-1.86-.78A2.57,2.57,0,0,1,9,20.24v-7h3.49a5.49,5.49,0,0,0-.63,1.23,3.82,3.82,0,0,0-.25,1.4A4.19,4.19,0,0,0,12,17.55a5,5,0,0,0,.93,1.39,4.28,4.28,0,0,0,1.4.95,4.24,4.24,0,0,0,1.72.35,4.29,4.29,0,0,0,3.08-1.3A5,5,0,0,0,20,17.55a4.19,4.19,0,0,0,.35-1.69,3.82,3.82,0,0,0-.25-1.4,6.37,6.37,0,0,0-.6-1.23H23v7a2.52,2.52,0,0,1-.78,1.85A2.57,2.57,0,0,1,20.36,22.87ZM16,13.23a2.55,2.55,0,0,1,1.85.75,2.63,2.63,0,0,1,0,3.74,2.55,2.55,0,0,1-1.85.75,2.63,2.63,0,0,1-1.9-.75,2.66,2.66,0,0,1,0-3.74A2.63,2.63,0,0,1,16,13.23Zm3.5-1.77h1.75V9.71H19.51Z" />
              </g>
            </svg>
          </a>

          <a href="/" className="transform hover:scale-105">
            <svg
              className=" opacity-40 hover:opacity-60 "
              fill="#000000"
              height="61px"
              width="61px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="-143 145 512 512"
              xmlSpace="preserve"
            >
              <path
                d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7
	c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4
	c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6
	c35.5,0,63.3,23,63.3,72.4V508.1z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
