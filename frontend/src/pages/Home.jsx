import React from "react";
import  ReactDOM  from "react-dom";

import NavBar from "../components/NavBar.jsx"
import Section from "../components/Section.jsx";
import { useNavigate } from "react-router-dom";



function Home(){
  const navigate = useNavigate(); 

  return  ( 
    <div>
      <NavBar navigate ={navigate }/>
      <Section/>
      
    </div>

  );
}


export default Home;
