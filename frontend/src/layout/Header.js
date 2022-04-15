import React, { useState } from "react";
import logo from "../img/GlobalUnderstandingLogo.37b38633.png";
import Button from 'react-bootstrap/Button';

export default function Header(){
    const [demo, setDemo] = useState(false);
    return(
        <>
            <h1 style={{color: "white"}}>Welcome to The Five Principles</h1>
            <img src={logo} style={{height: "150px"}}/>
            <Button variant="success" onClick={()=>setDemo(true)}>Click here to check out our demo!</Button>{' '}
            {demo===true && <iframe width="1099" height="471" src="https://www.youtube.com/embed/BaBhJOYa5K8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        </>
    )
}

