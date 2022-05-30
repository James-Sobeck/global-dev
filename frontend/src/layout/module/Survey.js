import React, { useState, useEffect } from "react";
import logo from "../../img/GlobalUnderstandingLogo.37b38633.png";
import { Link, useLocation } from "react-router-dom";

export default function Survey() {
  const [about, setAbout] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState();
  
  
  useEffect(()=>{
    if(location.state.user != undefined){
    setUser(location.state.user)
  } 
  }, [])
  
  
  function handleClick() {
    setAbout(!about);
  }
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();
    console.log(formData);
    try {
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  };
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

      <section class="px-2 py-32 bg-white md:px-0" id="About">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline">Welcome</span>
                </h1>
                <p class="mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">
                  This survey will give us a feel for what your experience is
                  and how we can best serve your needs
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <button onClick={() => handleClick()}>
                    <a
                      href="#_"
                      class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf] sm:w-auto no-underline"
                    >
                      {" "}
                      Click to take your survey!
                    </a>
                  </button>
                </div>{" "}
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
              </div>
            </div>
          </div>
          {about === true && (
            <>
              <div class="my-16 border-b border-gray-300 lg:my-24 pr-5">
                <form id="preQuiz">
                  <div>
                    <legend class="text-center">What is your position title?</legend>
                    <textarea
                      type="text"
                      name="Answer"
                      class="block w-full px-4 py-3 mb-4 border-2  border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      placeholder="Answer"
                      required
                    />
                    <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                    <legend class="text-center">How long have you been on the force?</legend>{" "}
                    <div class="pt-3">
                      <label class="text-center w-full text-gray-800 xl:text-xl">
                        Less than 1 year
                      </label>{" "}
                      <input
                        type="checkbox"
                        name="q1"
                        class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        value="Less than 1 year"
                        
                      />
                      <label class="text-center w-full text-gray-800 xl:text-xl">
                        1 - 3 years
                      </label>
                      <input
                        type="checkbox"
                        name="q1"
                        class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        value="1 - 3 years"
                      />
                      <label class="text-center w-full text-gray-800 xl:text-xl">
                        3 - 5 years
                      </label>
                      <input
                        type="checkbox"
                        name="q1"
                        class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        value="3 - 5 years"
                      />
                      <label class="text-center w-full text-gray-800 xl:text-xl">
                        5+ years
                      </label>
                      <input
                        type="checkbox"
                        name="q1"
                        class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        value="5+ years"
                      />
                    </div>
                  </div>
                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">
                    What was the most challenging experience of your career?
                  </legend>
                  <textarea
                    type="text"
                    name="Answer"
                    class="block w-full px-4 py-3 mb-4 border-2  border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Answer"
                    required
                  />
                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">
                    My department is open and receptive to officer concerns.
                  </legend>
                  <div class="justify-center pt-3">
                    <label class="text-center w-full text-gray-800 xl:text-xl ">
                      True
                    </label>
                    <input
                      type="checkbox"
                      name="q4"
                      class="block h-4 w-full mt-2
                        border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="True"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      False
                    </label>
                    <input
                      type="checkbox"
                      name="q4"
                      class="block mt-2  h-4 w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="False"
                    />
                  </div>
                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">How satisfied are you with your precinct?</legend>
                  <div class=" pt-3">
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      Very Satisfied
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Very Satisfied"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      Somewhat Satisfied
                    </label>
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Somewhat Satisfied"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      Somewhat Unsatisfied
                    </label>
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Somewhat Unsatisfied"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      Very Unsatisified
                    </label>
                    <input
                      type="checkbox"
                      name="q1"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Very Unsatisified"
                    />
                  </div>
                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">
                    Have you had any disciplinary write-ups in the last...
                  </legend>
                  <div class="pt-3 text-center">
                    <label class="text-center text-gray-800 xl:text-xl">
                      6 months
                    </label>
                    <input
                      type="checkbox"
                      name="q1"
                      class="block  mt-2 w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="6 months"
                    />
                    <label class="text-center text-gray-800 xl:text-xl">
                      1 year
                    </label>
                    <input
                      type="checkbox"
                      name="q1"
                      class="block mt-2 w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="1 year"
                    />
                    <label class="text-center text-gray-800 xl:text-xl">
                      2 years
                    </label>
                    <input
                      type="checkbox"
                      name="q1"
                      class="block mt-2 w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="2 years"
                    />
                    <label class="text-center text-gray-800 xl:text-xl">
                      None
                    </label>
                    <input
                      type="checkbox"
                      name="q1"
                      class="block mt-2 w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="None"
                    />
                  </div>

                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">
                    Are you affiliated with any outside organizations other than
                    religious affiliations (Lodge/Fraternity/Etc)?
                  </legend>
                  <div class=" pt-3">
                    <label class="text-center w-full text-gray-800 xl:text-xl ">
                      Yes
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block mt-2 w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Yes"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      No
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block mt-2 w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="No"
                    />
                  </div>
                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">
                    Is your precinct aware of your affiliation with the
                    previously mentioned group?
                  </legend>
                  <div class=" pt-3">
                    <label class="text-center w-full text-gray-800 xl:text-xl ">
                      Yes
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block mt-2 w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Yes"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      No
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block mt-2 w-full px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="No"
                    />
                  </div>

                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">
                    Would your dept view any of your affiliations as extreme?
                  </legend>
                  <div class=" pt-3">
                    <label class="text-center mt-2 w-full text-gray-800 xl:text-xl ">
                      Yes
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Yes"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      No
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="No"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      Maybe
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Maybe"
                    />
                  </div>

                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">
                    Do you feel like your organization needs racial sensitivity
                    training?
                  </legend>
                  <div class="pt-3">
                    <label class="text-center w-full text-gray-800 xl:text-xl ">
                      Yes
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Yes"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      No
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="No"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      Maybe
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Maybe"
                    />
                  </div>

                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">Do you have a political affiliation?</legend>
                  <div class="pt-3">
                    <label class="text-center w-full text-gray-800 xl:text-xl ">
                      Yes
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Yes"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      No
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="No"
                    />
                  </div>

                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">Are you politically active?</legend>
                  <div class=" pt-3">
                    <label class="text-center w-full  text-gray-800 xl:text-xl">
                      Yes
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Yes"
                    />
                    <label class="text-center w-full  text-gray-800 xl:text-xl">
                      No
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="No"
                    />
                  </div>

                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">
                    Do you have any health restrictions that can impact your
                    decision making process at work?
                  </legend>
                  <div class=" pt-3">
                    <label class="text-center w-full text-gray-800 xl:text-xl ">
                      Yes
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Yes"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      No
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="No"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      Maybe
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Maybe"
                    />
                  </div>

                  <div class="my-12 border-b border-gray-300 lg:my-12"></div>
                  <legend class="text-center">
                    Is your organization aware of your health restriction?
                  </legend>
                  <div class=" py-3">
                    <label class="text-center w-full text-gray-800 xl:text-xl ">
                      Yes
                    </label>
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="Yes"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      No
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="No"
                    />
                    <label class="text-center w-full text-gray-800 xl:text-xl">
                      N/A
                    </label>{" "}
                    <input
                      type="checkbox"
                      name="q4"
                      class="block w-full mt-2 px-4 py-3 mb-4 border-2 border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                      value="N/A"
                    />
                  </div>

                  <div class="block pt-4">
                    <Link to={{pathname: "/modules", state: {user: user}}}>
                      <button class="w-full px-3 py-4 font-medium text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf]">
                        Submit
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </>
          )}
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
