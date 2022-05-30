import React, { useState } from "react";
import logo from "../../img/GlobalUnderstandingLogo.37b38633.png";
import { Link, useLocation } from "react-router-dom";

export default function Demo() {
  const [about, setAbout] = useState(false);
  const [userAge, setUserAge] = useState();
  const [userGender, setUserGender] = useState();
  const [userE, setUserE] = useState();
  const [userEdu, setUserEdu] = useState();
  const [userMarital, setUserMarital] = useState();
  const [userIncome, setUserIncome] = useState();
  const [userTxt, setUserTxt] = useState();
  const location = useLocation();
  //console.log(location.state)
  let user = location.state.user;
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
  
  const handleChange = (event) =>{
    //console.log(event.target.value)
    setUserAge(event.target.value)
  }
  const handleGen = (event) =>{
    setUserGender(event.target.value)
  }
  const handleEth = (event) =>{
    setUserE(event.target.value)
  }
  const handleEducation = (event) =>{
    setUserEdu(event.target.value)
  }
  const handleMar = (event) =>{
    setUserMarital(event.target.value)
  }
  const handleHouse = (event) =>{
    setUserIncome(event.target.value)
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
        </div>
      </section>

      <section class="py-12 sm:py-16 bg-white">
        <div class="max-w-7xl px-10 mx-auto sm:text-center">
          <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">
            Welcome
          </h2>
          <p class="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">
            Please take a moment to fill out the survey below
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 my-12 sm:my-16">
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <p class="font-bold mt-4">Age</p>
              <p class="mt-2 text-sm text-gray-500">{userAge}</p>

              <div
                class="mx-auto relative mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div class="py-1" role="none">
                  <select
                    value={userAge}
                    onChange={handleChange}
                    class="border-2 text-center"
                  >
                    <option value=" 18-25">18-25</option>
                    <option value="26-34"> 26-34</option>
                    <option value="35-42">35-42</option>
                    <option value="43-50"> 43-50</option>
                    <option value="50+"> 50+</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <p class="font-bold mt-4">Gender</p>
              <p class="mt-2 text-sm text-gray-500">{userGender}</p>

              <div
                class="relative mx-auto mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <select
                    value={userGender}
                    onChange={handleGen}
                    class="border-2 text-center"
                  >
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <p class="font-bold mt-4">Ethnicity</p>
              <p class="mt-2 text-sm text-gray-500">{userE}</p>

              <div
                class="relative mx-auto mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <select value={userE} onChange={handleEth} class="border-2 text-center w-full">
                    <option value="White or Caucasian">
                      White or Caucasian
                    </option>
                    <option value="Black or African American">
                      Black or African American
                    </option>
                    <option value="African">African</option>
                    <option value="Native American">Native American</option>
                    <option value="Pacific Islander">Pacific Islander</option>
                    <option value="Spanish or Latino">Spanish or Latino</option>
                    <option value="Asian or Asian American">
                      Asian or Asian American
                    </option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  {userE === "Other" &&(
                    <textarea
                    type="text"
                    name="Answer"
                    class="block w-full px-4 py-3 mb-4 border-2  border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Answer"
                    value={userE}
                    onChange={console.log(this.state)}
                  />
                  )}
                </div>
              </div>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <p class="font-bold mt-4">Education</p>
              <p class="mt-2 text-sm text-gray-500">{userEdu}</p>

              <div class="py-1" role="none">
                <select value={userEdu} onChange={handleEducation} class="border-2 text-center">
                  <option value="High School">High School</option>
                  <option value="GED">GED</option>
                  <option value="Associate's Degree">Associate's Degree</option>
                  <option value="Bachelor's Degree">Bachelor's Degree</option>
                  <option value="Master's Degree">Master's Degree</option>
                  <option value="Doctorate Degree">Doctorate Degree</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <p class="font-bold mt-4">Marital Status</p>
              <p class="mt-2 text-sm text-gray-500">{userMarital}</p>
              <div class="py-1" role="none">
                <select value={userMarital} onChange={handleMar} class="border-2 text-center w-100 ">
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Domestic Partnership">Domestic Partnership</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <p class="font-bold mt-4">Household Income</p>
              <p class="mt-2 text-sm text-gray-500">{userIncome}</p>
              <div class="py-1" role="none">
                <select value={userIncome} onChange={handleHouse} class="border-2 text-center">
                  <option value="< $25K">≤$25K</option>
                  <option value=" $25k-$50k"> $25k-$50k</option>
                  <option value="$50k-$75K">$50k-$75K</option>
                  <option value="$75-$100k">$75-$100k</option>
                  <option value="$100k-$125k">$100k-$125k</option>
                  <option value="$125k-$150k">$125k-$150k</option>
                  <option value="$150K+">$150K+</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
          <Link
            to={{pathname: "/user_survey",
            state: {user: user}}}
            class="px-8 py-4 sm:w-auto w-full text-center text-base font-medium inline-block rounded text-white hover:bg-blue-600 bg-blue-500"
          >
            Submit
          </Link>
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
