import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import "../App.css";


const Hood = () => {
  const navigate = useNavigate();


  const goToHomePage = () => {
    navigate('/');
  };



  return (
    <div className='hood'>
      <NavBar navigate={navigate}/>
      <div className='full-vh-background  pt-[60px] '>
        <h1 className='text-white text-[48px] ml-[40%] italic'></h1>

      </div>
    </div>
  );
};

export default Hood;




