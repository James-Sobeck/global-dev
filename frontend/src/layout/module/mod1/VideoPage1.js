import Video from "../Video";
import { Link } from "react-router-dom";
import react, { useState } from "react";
import logo from "../../../img/GlobalUnderstandingLogo.37b38633.png";


export default function VideoPage() {
  return (
    <>
      <section class="relative w-full px-8 text-gray-700 bg-white body-font">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <a
            href="http://localhost:3000/"
            class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none no-underline"
          >
            <img src={logo} style={{ height: "35px", paddingRight: "10px" }} />
            The Five Principles
          </a>

          <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
            <span class="inline-flex rounded-md shadow-sm">
              <a
  
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#5b7bf0] border-[#5b7bf0] rounded-md shadow-sm hover:bg-[#435aaf] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5b7bf0] no-underline"
              >
                Sign Out
              </a>
            </span>
          </div>
        </div>
      </section>

      <section class="w-full py-16 overflow-hidden bg-white relative">
        <div class=" h-full bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"></div>
        <div class=" h-full bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg] -skew-x-12 left-0 top-0"></div>
        <div class=" relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
          <img src={logo} class="w-24" />
          <h2 class="text-gray-900 text-3xl font-bold font-serif">Module 1</h2>
          <span class="text-gray-900 text-xl font-bold font-serif">
           Psychology of Law Enforcement
          </span>
          <div class="w-auto pt-4">
            <Video id="nreeKv32DO4" />
          </div>
          
        </div>
      </section>
    </>
  );
}
