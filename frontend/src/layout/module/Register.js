import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../../img/GlobalUnderstandingLogo.37b38633.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { registerUser, registerUsers, registerOrg } from "../../api/api";
import { read, writeFileXLSX, utils } from "xlsx";
import {ExcelRenderer, OutTable} from 'react-excel-renderer';
import ReactFileReader from 'react';
import {useDropzone} from 'react-dropzone';


export default function Register() {
  const history = useHistory();
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [success, setSuccess] = useState(false);
  const [org, setOrg] = useState();
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //   const history = useHistory();
  //   const handleCancel = () => {
  //     history.goBack();
  //   };
 
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const controller = new AbortController();
    console.log(formData)
    try {
      await registerUser(
        formData.email.toString(),
        formData.password.toString()
      ).then((respo)=> console.log(respo))
    } catch (error) {
      console.log(error);
    }
    return () => controller.abort();
  };
  
  const handleFile = async (e) => {
    e.preventDefault();
    var reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = function(e){
      var data = new Uint8Array(reader.result);

        var work_book = read(data, {type:'array'});

        var sheet_name = work_book.SheetNames;

        var sheet_data = utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});

        if(sheet_data.length > 0)
        {
           //console.log(sheet_data[3]); //this is the org
           let orgData = sheet_data[3];
           registerOrg(orgData[1], orgData[2], orgData[3], orgData[4], orgData[5], orgData[6], orgData[7], orgData[8], orgData[9]).then((res)=> setOrg(res.ID))
           
           for(let i = 6; i<sheet_data.length; i++){
             //for each line after the employees header
             let tempArr = sheet_data[i];
             //console.log(tempArr[1]);
             try{
              registerUsers(tempArr[1], tempArr[2], tempArr[3], tempArr[4], tempArr[5], tempArr[6], tempArr[7],tempArr[8], tempArr[9], org).then(setSuccess(true));
             }catch (error) {
              console.log(error);
            }
           
           }
        }

    }
    
  }
// async function handleFileTemp(event){
//   event.preventDefault();
//   var reader = new FileReader();
//   reader.readAsArrayBuffer(event.target.files[0]);
//   reader.onload = function(event){
//     var data = new Uint8Array(reader.result);

//       var work_book = read(data, {type:'array'});

//       var sheet_name = work_book.SheetNames;

//       var sheet_data = utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});

//       if(sheet_data.length > 0)
//       {
//          console.log(sheet_data);
//          for(let i = 6; i<sheet_data.length; i++){
//            //for each line after the employees header
//            let tempArr = sheet_data[i];
//            //console.log(tempArr[1]);
//            try{
//               registerUsers(tempArr[1], tempArr[2], tempArr[3], tempArr[4], tempArr[5], tempArr[6], tempArr[7],tempArr[8], tempArr[9]).then((res)=> console.log(res));
//            }catch (error) {
//             console.log(error);
//           }
         
//          }
//       }


//       }  
//       }

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

            <div class="w-full mt-16 md:mt-0 md:w-2/5">
              <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                <h3 class="mb-6 text-2xl font-medium text-center">
                  Create Accounts
                </h3>
                <form onSubmit={handleSubmit}>
                  
                   <div id="excel_data" onChange={handleFile}>
        {}
        <input
        type="file"
        class="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"/>
      </div>
                 
                  <div class="block">
                    <button
                      type="submit"
                      class="w-full px-3 py-4 font-medium text-white bg-[#5b7bf0] rounded-lg hover:bg-[#435aaf]"
                    >
                      Create Accounts
                    </button>
                  </div>
                </form>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {success && (<Link to="/">
      <div class="mx-auto w-48 text-center px-3 py-4 font-medium text-white bg-[#5b7bf0] rounded-lg hover:bg-[#435aaf]">
        Registation was successful!
      </div>
      </Link>)}
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
