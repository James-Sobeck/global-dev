import Video from "./Video";
import { Link } from "react-router-dom";
import react, { useState } from "react";
import logo from "../../../img/GlobalUnderstandingLogo.37b38633.png";

export default function VideoPage3() {
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

          
        </div>
      </section>

      <section class="w-full py-16 overflow-hidden bg-white relative">
        <div class=" h-full bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"></div>
        <div class=" h-full bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg] -skew-x-12 left-0 top-0"></div>
        <div class=" relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
          <img src={logo} class="w-24" />
          <h2 class="text-gray-900 text-3xl font-bold font-serif">Module 3</h2>
          <span class="text-gray-900 text-xl font-bold font-serif">
          Non-Evasive Restraint Techniques and Levels of Force
          </span>
          <div class="w-auto pt-4">
            <Video id="gVEzj1cecmU" />
          </div>
          
        </div>
      </section>
      <section class="bg-white">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            <span class="block">
              The Five Principles of Law Enforcement Professional Development
            </span>
            <span class="block">© Global Understanding LLC</span>
          </p>
        </div>
      </section>
    </>
  );
}
