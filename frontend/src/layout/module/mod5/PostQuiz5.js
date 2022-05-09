import { Link } from "react-router-dom";
import react, { useState } from "react";
import logo from "../../../img/GlobalUnderstandingLogo.37b38633.png";
export default function PostQuiz5() {
  
  const [start, setStart] = useState(false);
  function changeButton() {
    setStart(!start);
  }
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
                href="#"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#5b7bf0] border-[#5b7bf0] rounded-md shadow-sm hover:bg-[#435aaf] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5b7bf0] no-underline"
              >
                Sign Out
              </a>
            </span>
          </div>
        </div>
      </section>
      <section class="px-2 pt-32 bg-white md:px-0">
        <div class="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
          <h1 class="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center">
            <span class="block">Post-Learning Quiz </span>
          </h1>
          <p class="w-full mx-auto text-base text-left text-gray-500 md:max-w-md sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">
            Test your knownledge after training!
          </p>
          <div class="relative flex flex-col justify-center md:flex-row md:space-x-4">
            <button onClick={() => changeButton()}>
              <a
                href="#_"
                class="flex items-center w-full px-6 py-2 mb-3 text-lg text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf] sm:w-auto no-underline"
              >
                Start Now!
              </a>
            </button>
          </div>
          {start && (
            <>
              <div class="my-10 border-b border-gray-300 justify-center pr-5">
                <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                  <h3 class="mb-6 text-2xl font-medium text-center">
                    Module 5 Post-Quiz
                  </h3>
                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <form id="preQuiz">
                    <legend>
                      1.Police work is all about making __________ about other people’s lives.
                    </legend>
                    <div >
                    <label class="text-center text-gray-800 xl:text-xl pt-4">
                    Jokes
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="A"
                    ></input>
                    <label class="text-center text-gray-800 xl:text-xl">
                    Sense
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="B"
                    />
                    <label class="text-center text-gray-800 xl:text-xl">
                    Critical decisions
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="C"
                    />
                    <label class="text-center text-gray-800 xl:text-xl">
                    Easy choices
                    </label>
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="D"
                    />
                    </div>
                    <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                    <legend>
                      2. The essential element in police professionalism is?
                    </legend>
                    <div >
                    <label class="text-center text-gray-800 xl:text-xl pt-4">
                    Good character
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="A"
                    ></input>
                    <label class="text-center text-gray-800 xl:text-xl">
                    Compassion
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="B"
                    />
                    <label class="text-center text-gray-800 xl:text-xl">
                    Willingness to learn
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="C"
                    />
                    <label class="text-center text-gray-800 xl:text-xl">
                    Tolerance
                    </label>
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="D"
                    />
                    </div>
                     <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                    <legend>
                      3. The application of the law must be done fairly and in an impartial manner. This statement implies that officers must not care about people.
                    </legend>
                    <div >
                    <label class="text-center text-gray-800 xl:text-xl pt-4">True</label>{" "}
                    <input
                      type="checkbox"
                      name="q3"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="True"
                    />
                    <label class="text-center text-gray-800 xl:text-xl">False</label>
                    <input
                      type="checkbox"
                      name="q3"
                      class="block w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="False"
                    /></div>
                     <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                    <legend>
                      4. Why is police ethics important?
                    </legend>
                    <textarea
                      type="text"
                      name="Answer"
                      class="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      placeholder="Answer"
                    />
                     
                    <div class="block pt-4">
                      <Link to="/modules">
                      <button class="w-full px-3 py-4 font-medium text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf]">
                        Send
                      </button></Link>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
        <div class="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
          {!start && (
            <img src="https://cdn.devdojo.com/images/november2020/hero-image.png" />
          )}
        </div>
      </section>
    </>
  );
}
