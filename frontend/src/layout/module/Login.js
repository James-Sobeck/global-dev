import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../../img/GlobalUnderstandingLogo.37b38633.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import {loginUser, registerUser} from "../../api/api";


export default function Login(){
  const history = useHistory();
  const initialFormData = {
    email: "",
    password: "",
  };
  const [reset, setReset] = useState(false);
  const [user, setUser] = useState();
    const [formData, setFormData] = useState(initialFormData);
    const handleFormChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    //   const history = useHistory();
    //   const handleCancel = () => {
    //     history.goBack();tw
    
    //   };
    const handleSubmit = async (e) =>{
      e.preventDefault();
      const controller = new AbortController();
      try{
        //history.push("/module1")history.push("/modules")
        await loginUser(formData.email.toString(), formData.password.toString()).then((res)=> {
          setUser(res);
          let tempstring = res.toString();
          let checkPass = formData.password.toString();
          if(checkPass.includes("password") ){
            setReset(true);
          } else if(tempstring.includes("please")){
            //if error
            alert("incorrect password please try again")
            window.location.reload(); //reload window
          } else{
            //correct password
            history.push({
              pathname: "/modules",
              state: {user: res}
            }
              );
          }
        });
      } catch (error){
        console.log(error)
      }
      return () => controller.abort();
    }
    
    return (
      <>
        <section class="relative w-full px-8 text-gray-700 bg-white body-font">
          <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
            <a
              href="http://localhost:3000/"
              class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none no-underline"
            >
              <img
                src={logo}
                style={{ height: "35px", paddingRight: "10px" }}
              />
              The Five Principles
            </a>

            <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
              <a
                href="#_"
                class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
              ></a>
              <a
                href="http://localhost:3000/#About"
                class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900 no-underline"
                x-data="{ hover: false }"
                mouseenter="hover = true"
                mouseleave="hover = false"
              >
                <span class="block">About</span>
                <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"></span>
              </a>
              <a
                href="http://localhost:3000/#Program"
                class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900 no-underline"
                x-data="{ hover: false }"
                mouseenter="hover = true"
                mouseleave="hover = false"
              >
                <span class="block">Program</span>
                <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"></span>
              </a>
              <a
                href="http://localhost:3000/#Contact"
                class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900 no-underline"
                x-data="{ hover: false }"
                mouseenter="hover = true"
                mouseleave="hover = false"
              >
                <span class="block">Contact</span>
                <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"></span>
              </a>
            </nav>

            <div class="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
              <Link to="/login" class="no-underline">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none no-underline"
                >
                  Sign in
                </a>{" "}
              </Link>

              <span class="inline-flex rounded-md shadow-sm">
                <Link to="/register" class="no-underline">
                  <a
                    href="#"
                    class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#5b7bf0] border-[#5b7bf0] rounded-md shadow-sm hover:bg-[#435aaf] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5b7bf0] no-underline"
                  >
                    Sign up
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </section>

        <section class="w-full px-8 py-16 bg-gray-100 xl:px-8">
          <div class="max-w-5xl mx-auto">
            <div class="flex flex-col items-center md:flex-row">
              <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                  Bridging the Gap
                </h2>
                <p class="text-xl text-gray-600 md:pr-16">
                  Between community and Law Enforcement
                </p>
              </div>
              {!reset && (
                <div class="w-full mt-16 md:mt-0 md:w-2/5">
                  <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 class="mb-6 text-2xl font-medium text-center">
                      Sign in to your Account
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        placeholder={initialFormData?.email || "Email address"}
                        onChange={handleFormChange}
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        placeholder={initialFormData?.password || "Password"}
                        onChange={handleFormChange}
                        required
                      />
                      <div class="block">
                        <button
                          type="submit"
                          class="w-full px-3 py-4 font-medium text-white bg-[#5b7bf0] rounded-lg hover:bg-[#435aaf]"
                        >
                          Log Me In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
              {reset && (
                <div class="w-full mt-16 md:mt-0 md:w-2/5">
                  <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                    <h3 class="mb-6 text-2xl font-medium text-center">
                      Reset your password!
                    </h3>
                    <form>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        value={formData?.email || "Email address"}
                        onChange={handleFormChange}
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                        placeholder={initialFormData?.password || "Password"}
                        onChange={handleFormChange}
                        required
                      />
                      <div class="block">
                        <button
                          type="submit"
                          class="w-full px-3 py-4 font-medium text-white bg-[#5b7bf0] rounded-lg hover:bg-[#435aaf]"
                          onClick={() =>
                            history.push({
                              pathname: "/user_demo",
                              state: { user: user },
                            })
                          }
                        >
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
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