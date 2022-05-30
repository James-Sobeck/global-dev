import Button from "react-bootstrap/esm/Button"
import logo from "../../img/GlobalUnderstandingLogo.37b38633.png";
import { Link, useLocation } from "react-router-dom";
import react, { useState } from "react";

export default function ModMenu(){
  const location = useLocation();
  console.log(location.state.user)
  let userArray = location.state.user.module_id_complete || [1,2];
  console.log(userArray)
  let temp = [1,2,3,4,5];
  let numComp = 0;
  let titles = ["Psychology of Law Enforcement", "Gender Equality, Cultural Proficiency, and Social Awareness", "Non-Evasive Restraint Techniques and Levels of Force", "The Law and Ethical Decision Making", "Principles of Efficacy"];
  let links = ["/module1_pre", "/module2_pre", "/module3_pre", "/module4_pre", "/module5_pre"];
  let imgSRC = ["https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80","https://images.unsplash.com/photo-1603644448048-28a7e5122f0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1524633712235-22da046738b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", "https://images.unsplash.com/photo-1589307904488-7d60ff29c975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"]
  function listMod(modArr){
    //eventually will take in a user and display their personal completion rate
    //let modArr = [0,1,2,3,4];
    let filterArray = modArr.filter(ele => userArray.includes(ele));
    
    //filterArray is completed modules
    
    
    
    const map = modArr.map((module) =>{
      //for each module
      
      if(filterArray.includes(module)){
        //completed module
        return (
          <div class="w-full border border-gray-200 rounded-lg  shadow-sm" key={module}>
            <div class="bg-gray-200 relative" >
              <div className="ribbon"><span>Completed</span> </div>
                  <div class="flex flex-col items-center justify-center p-10 relative h-64">
                    <img
                      class="w-32 h-32 mb-6 rounded-full"
                      src={imgSRC[module-1]}
                    />
                    
                  </div>
                  <div class="h-32 text-center">
                    <h2 class="text-lg font-medium">Module {module}</h2>
                    <p class="font-medium text-blue-500">{titles[module-1]}</p>
                  </div>
                  <div class="flex border-t border-gray-200 divide-x divide-gray-200 justify-center my-auto h-32">
                    <Link to= {links[module-1]} >
                    <button>
                      <a
                        class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf] sm:w-auto no-underline mt-8"
                      >
                        Start Module {module}
                      </a>
                    </button></Link>
                  </div>
                  </div>
                </div>
        )
      } else{
        return(
        
          <div class="w-full border border-gray-200 rounded-lg shadow-sm" key={module}>
                  <div class="flex flex-col items-center justify-center p-10 relative h-64">
                    <img
                      class="w-32 h-32 mb-6 rounded-full"
                      src={imgSRC[module-1]}
                    />
                    
                  </div>
                  <div class="h-32 text-center">
                    <h2 class="text-lg font-medium">Module {module}</h2>
                    <p class="font-medium text-blue-500">{titles[module-1]}</p>
                  </div>
                  <div class="flex border-t border-gray-200 divide-x divide-gray-200 justify-center my-auto h-32">
                    <Link to= {links[module-1]} >
                    <button>
                      <a
                        class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf] sm:w-auto no-underline mt-8"
                      >
                        Start Module {module}
                      </a>
                    </button></Link>
                  </div>
                </div>
          
        )
      }
      
      // return(
        
      //   <div class="w-full border border-gray-200 rounded-lg shadow-sm" key={module}>
      //           <div class="flex flex-col items-center justify-center p-10 relative h-64">
      //             <img
      //               class="w-32 h-32 mb-6 rounded-full"
      //               src={imgSRC[module-1]}
      //             />
                  
      //           </div>
      //           <div class="h-32 text-center">
      //             <h2 class="text-lg font-medium">Module {module}</h2>
      //             <p class="font-medium text-blue-500">{titles[module-1]}</p>
      //           </div>
      //           <div class="flex border-t border-gray-200 divide-x divide-gray-200 justify-center my-auto h-32">
      //             <Link to= {links[module-1]} >
      //             <button>
      //               <a
      //                 class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf] sm:w-auto no-underline mt-8"
      //               >
      //                 Start Module {module}
      //               </a>
      //             </button></Link>
      //           </div>
      //         </div>
        
      // )
    })
    return map;
    
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


           
          </div>
        </section>

        <section class="w-full py-12 bg-white lg:py-24">
          <div class="max-w-6xl px-12 mx-auto text-center">
            <div class="space-y-12 md:text-center ">
              <div class="max-w-3xl mb-20 space-y-5 sm:mx-auto sm:space-y-4">
                <span class="relative text-4xl font-extrabold tracking-tight sm:text-5xl">Welcome {location.state.user.first_name}!</span>
                <h2 class="relative text-2xl font-bold tracking-tight sm:text-3xl">
                  Module Menu
                </h2>
                <p class="text-xl text-gray-500">
                  {/* {temp.length} / 5 */}
                  <progress value={userArray.length} max={temp.length}>   </progress>
                </p>
              </div>
            </div>
            </div>
          
         <div class="container">
           <hr class="bg-[#5b7bf0]"></hr>
           
            <div class="grid grid-cols-5 gap-10 "> 
               {listMod(temp)}
          </div>
         </div>
             
        </section>
        <section class="bg-white">
        
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            <span class="block">
              The Five Principles of Law Enforcement Professional Development
            </span>
            <span class="block">© Global Understanding LLC</span>
          </p>
        
      </section>
      </>
    );
}