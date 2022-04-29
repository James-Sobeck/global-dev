import React, { useState } from "react";
import logo from "../img/GlobalUnderstandingLogo.37b38633.png";
import Button from 'react-bootstrap/Button';

export default function Header(){
    
    const initText = "Click here to check out our demo!";
    const [demo, setDemo] = useState(false);
    const [text, setText] = useState(initText);
   
    
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
            setText("Close");
            
             
        }
    }
    
    return (
      <>
        <h1 style={{  textAlign: "center" }}>
          Welcome to The Five Principles
        </h1>
        <img src={logo} alt="logo" style={{ height: "150px" }} />
        <div style={{display:'flex', margin:'10px', marginLeft: "auto", marginRight: "auto", justifyContent:"center"}}>
          <Button
            
            onClick={() => changeButton()}
            
          >
            {text}
          </Button>{" "}
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
      </>
    );
}


