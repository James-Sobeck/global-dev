import react, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import logo from "../img/GlobalUnderstandingLogo.37b38633.png";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { sendForm ,init } from "@emailjs/browser";

export default function Home() {
    
    const initText = "Click here to check out our demo!";
    const [demo, setDemo] = useState(false);
    const [text, setText] = useState(initText);
    const [about, setAbout] = useState(false);
    const [mission, setMisson] = useState(false);
    const [learn, setLearn] = useState("Learn More!");
    function changeButton(){
        setDemo(!demo); //inverse of demon
        if(demo === true){
           //revert text to default
            setText(initText);
            console.log(text);
        } else{
            //false
            //if clicked once
            //video shows up
            setText("Thank you for watching our demo!");
            
             
        }
    }
    

    function copyEmail() {
        let copyText = "globalunderstandingllc@gmail.com"; 
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
      }
    
      function sendEmail() {
        //this.contact_number.value = Math.random() * 100000 | 0;
        let holder = document.getElementById("contactForm");
        init("ydOt5blEAeIoEFqwb"); //THEIR EMAIL ID
       sendForm('default_service', 'template_4hpki4n', holder, ).then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
      }
    function handleClick(){
        setAbout(!about);
    }
    function handleMission(){
      setMisson(!mission);
      if(mission){
        setLearn("Learn More!");
      } else{
        setLearn("Thank you for reading our continued mission below!");
      }
      
    }
  return (
    <>
      <section class="relative w-full px-8 text-gray-700 bg-white body-font">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <a
            href="#Home"
            class="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none no-underline"
          >
            <img src={logo} style={{ height: "35px", paddingRight: "10px" }} />
            The Five Principles
          </a>

          <nav class="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
            <a
              href="#_"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
            ></a>
            <a
              href="#About"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900 no-underline"
              x-data="{ hover: false }"
              mouseenter="hover = true"
              mouseleave="hover = false"
            >
              <span class="block">About</span>
              <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#Program"
              class="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900 no-underline"
              x-data="{ hover: false }"
              mouseenter="hover = true"
              mouseleave="hover = false"
            >
              <span class="block">Program</span>
              <span class="absolute bottom-0 left-0 inline-block w-full h-0.5 -mb-1 overflow-hidden"></span>
            </a>
            <a
              href="#Contact"
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
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-[#5b7bf0] border-[#5b7bf0] rounded-md shadow-sm hover:bg-[#435aaf] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5b7bf0] no-underline"
              >
                Sign in
              </a>{" "}
            </Link>
           
          </div>
        </div>
      </section>
      <section
        class="w-full px-3 antialiased bg-gradient-to-b from-[#5b7bf0] to-[#c7e1ed] lg:px-6"
        id="Home"
      >
        <div class="mx-auto max-w-7xl">
          <div class="container py-32 mx-auto text-center sm:px-4">
            <h1 class="text-4xl font-extrabold leading-10 tracking-tight text-Black sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
              <span class="block">Welcome to</span>{" "}
              <span class="relative inline-block mt-3 text-Black">
                The Five Principles
              </span>
            </h1>
            <div class="max-w-lg mx-auto mt-6 text-sm text-center text-slate-700 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
              {/* TXT FOR SUMMARY HERE */}
            </div>
            <div class="relative flex items-center  mx-auto mt-12 overflow-hidden text-center">
              <div
                style={{
                  display: "block",
                  margin: "10px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                }}
              >
                <button onClick={() => changeButton()}>
                  <a
                    href="#_"
                    class="flex items-center w-full px-6 py-2 mb-3 text-lg text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf] sm:w-auto no-underline"
                  >
                    {text}
                  </a>
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                margin: "10px",
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
              }}
            >
              {demo === true && (
                <iframe
                  width="1099"
                  height="471"
                  src="https://www.youtube.com/embed/BaBhJOYa5K8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      </section>

      <section class="px-2 py-32 bg-white md:px-0" id="About">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline">Who We Are</span>
                </h1>
                <p class="mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">
                  We are a group that have developed a professional development
                  program that addresses the education of law enforcement
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <button onClick={() => handleClick()}>
                    <a
                      href="#_"
                      class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf] sm:w-auto no-underline"
                    >
                      {" "}
                      Click to read more!
                    </a>
                  </button>
                </div>{" "}
                {about === true && (
                  <>
                    <div class="my-16 border-b border-gray-300 lg:my-24 pr-5">
                      <p class="text-left text-gray-800 xl:text-xl">
                        We are a collective group of judges, attorneys, law
                        enforcement agents, psychologists, martial artists, and
                        community advocates who have developed, through years of
                        research, a professional development program that
                        specifically addresses the continuing education of law
                        enforcement agencies and municipalities. This program
                        addresses the five key elements of ethical and effective
                        law enforcement, which we call The Five Principles.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex items-center justify-center py-5 text-white bg-white sm:py-16 md:py-24 lg:py-32">
        <div class="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
          <div class="w-full md:flex-row text-center">
            <h1 class="relative flex flex-col text-6xl font-extrabold text-center text-black">
              About Us
            </h1>
          </div>

          <div class="my-16 border-b border-gray-300 lg:my-24"></div>

          <p class="text-left mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">
            Global Understanding LLC is centered on key solutions for the
            world???s problems with global initiatives to enhance mankind. We seek
            experts in their field to assist in developing solutions ranging
            from everyday problems to global pandemics. We take a structured
            approach not to tear down but to enhance and improve people, groups,
            communities, countries, and humanity as a whole.
          </p>
          <div class="my-16 border-b border-gray-300 lg:my-24"></div>

          <p class="text-left mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">
            We are a leading collective group of experts and professionals in
            our fields including former federal law enforcement, licensed
            clinical psychologists, attorneys at law, university professors, and
            martial arts experts that have established comprehensive law
            enforcement professional development training. Our goal is for law
            enforcement personnel to become more culturally informed and
            pragmatically trained in restraint techniques to help reduce
            wrongful deaths, police misconduct, and lawsuits filed against
            police departments nationwide. We seek to improve the public image
            of law enforcement and provide valuable feedback to police training
            personnel in the following areas.
          </p>
        </div>
      </section>

      <section class="w-full py-16 overflow-hidden bg-white relative">
        <div class="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
          <img src={logo} alt="logo" style={{ height: "150px" }} />
          <h2 class="text-gray-900 text-3xl font-bold font-serif pt-4">
            Our Mission
          </h2>
          <p class="text-center mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">
            Our mission is to collectively assist law enforcement officials
            while gaining the support of the community. This will be done by
            introducing our professional development training module created
            specifically to meet the needs of today???s society. Our goal is to
            provide law enforcement with necessary education to reinforce and
            enhance training facilitated in the police academy or other
            programs.
          </p>{" "}
          <div class="my-10 border-b border-gray-300  pr-5">
                <p class="text-center mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">
                  Through a collaborative effort of leading experts including
                  former federal law enforcement, licensed clinical
                  psychologists, attorneys at law, university professors, and
                  martial arts experts we will provide this professional
                  development training to reduce the number of wrongful deaths,
                  lawsuits, unarmed shootings, and cases of police misconduct to
                  improve law enforcement effectiveness and community relations
                  while upholding the mission of law enforcement; to protect and
                  serve our community. Our staff will teach law enforcement The
                  Five Principles, a more informed comprehensive professional
                  development training system specifically created for the
                  challenges of law enforcement today.
                </p>
              </div>
          <button onClick={() => handleMission()}>
            <a
            id="Program"
              href="#_"
              class="flex items-center w-full mt-3 px-6 py-3 mb-3 text-lg text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf] sm:w-auto no-underline"
            >
              <span>{learn}</span>
            </a>
          </button>
          {mission === true && (
            <>
              <section
        class="relative py-10 bg-white min-w-screen animation-fade animation-delay"
        
      >
        <div class="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
          <h3 class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl mb-6 lg:text-5xl sm:text-center sm:mx-0">
            The Five Principles
          </h3>
          <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-[#5b7bf0] sm:text-xl md:text-2xl">
              Psychology of Law Enforcement
            </h3>
            <div class="my-4 border-b border-gray-300  pr-5"></div>
            <p class="mt-2 text-base text-gray-800 sm:text-lg md:text-normal">
              We will have a licensed psychologist assist law enforcement
              officers in understanding the psychological effects of law
              enforcement and their discretionary use of force in an
              ever-changing environment.
            </p>
          </div>
          <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-[#5b7bf0] sm:text-xl md:text-2xl">
              Gender Equality, Cultural Proficiency, and Social Awareness
            </h3>
            <div class="my-4 border-b border-gray-300  pr-5"></div>
            <p class="mt-2 text-base text-gray-800 sm:text-lg md:text-normal">
              We have experts who will teach law enforcement officers how to
              better handle enforcing the law while understanding the growing
              changes in our community and social perceptions; teaching our
              officers to become more sensitized to diverse populations and
              cultural tendencies. Along with diversity, law enforcement should
              be aware of the implications that the integration of female
              leadership has in our society and the fluid landscape of sexual
              orientations and gender.
            </p>
          </div>
          <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-[#5b7bf0] sm:text-xl md:text-2xl">
              Non-Evasive Restraint Techniques and Levels of Force
            </h3>
            <div class="my-4 border-b border-gray-300  pr-5"></div>
            <p class="mt-2 text-base text-gray-800 sm:text-lg md:text-normal">
              Our certified instructors will teach law enforcement personnel
              non-lethal restraint techniques provided as an alternative to
              using some of their many weapons (i.e. gun, baton, Taser, mace).
              These techniques are especially effective when officers find
              themselves in close quarters and need to control a situation or
              make an arrest as an alternative to using deadly force. The Five
              Principles is derived from five fundamental components using
              concepts from San Da JiuJitsu Do, Aikido, Judo, Jiu-jitsu, and
              Vee-Jitsu.
            </p>
          </div>
          <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-[#5b7bf0] sm:text-xl md:text-2xl">
              The Law and Ethical Decision Making
            </h3>
            <div class="my-4 border-b border-gray-300  pr-5"></div>
            <p class="mt-2 text-base text-gray-800 sm:text-lg md:text-normal">
              While understanding the complexities of law enforcement, experts
              and community officials believe law enforcement officers should be
              trained in how to better serve their community while maintaining
              proper ethics. This should be included in yearly professional
              development training. Balancing the equation of enforcing the law
              while being a resource for the community; our module emphasizes
              accountability and how to better serve the community by using
              ???deadly force??? only as a last resort. Our Five Principles teaches
              officers to serve as well as protect while understanding the
              importance of societal needs and finding the balance between both
              responsibilities. This module will teach officers how to handle
              and correct their own cultural biases.
            </p>
          </div>

          <div class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-[#5b7bf0] sm:text-xl md:text-2xl">
              Principles of Efficacy
            </h3>
            <div class="my-4 border-b border-gray-300  pr-5"></div>
            <p class="mt-2 text-base text-gray-800 sm:text-lg md:text-normal">
              To reach rigorous standards of efficiency we provide a supportive
              foundation for the challenging work of law enforcement. The Five
              Principles promotes the idea that effective effort drives
              development. By using data and feedback we will develop a strategy
              to drive proficiency and efficacy in the field.
            </p>
          </div>
        </div>
      </section>
            </>
          )}
        </div>
      </section>

     
      <div className="p-10 ">
        <div id="Contact" class="max-w-5xl mx-auto ">
          <div class="flex flex-col items-center md:flex-row">
            <div class="w-full space-y-5 md:w-3/5 md:pr-16">
              <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                Contact Us!
              </h2>
              <p class="text-xl text-gray-600 md:pr-16">
                Feel free to reach out to us by filling the form to your right!
              </p>
            </div>

            <div class="w-full mt-16 md:mt-0 md:w-2/5" id="Contact">
              <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 class="mb-6 text-2xl font-medium text-center">
                  Contact Form
                </h3>
                <form id="contactForm">
                  <input
                    type="email"
                    name="email"
                    class="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Email address"
                  />
                  <input
                    type="text"
                    name="name"
                    class="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Full Name"
                  />
                  <textarea
                    type="text"
                    name="message"
                    class="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                    placeholder="Message"
                  />
                  <div class="block">
                    <button
                      onClick={() => sendEmail()}
                      class="w-full px-3 py-4 font-medium text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf]"
                    >
                      Send
                    </button>
                  </div>
                </form>
                <p class="w-full mt-4 text-sm text-center text-gray-500">
                  Prefer to send the email yourself?{" "}
                  <button
                    onClick={() => copyEmail()}
                    class="text-blue-500 underline"
                  >
                    Copy it here
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="bg-white">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
              <a
                href="#About"
                class="text-base leading-6 text-gray-500 hover:text-gray-900 no-underline"
              >
                About
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#Program"
                class="text-base leading-6 text-gray-500 hover:text-gray-900 no-underline"
              >
                Program
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#Contact"
                class="text-base leading-6 text-gray-500 hover:text-gray-900 no-underline"
              >
                Contact
              </a>
            </div>
          </nav>
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            <span class="block">
              The Five Principles of Law Enforcement Professional Development
            </span>
            <span class="block">?? Global Understanding LLC</span>
          </p>
        </div>
      </section>
    </>
  );
}
