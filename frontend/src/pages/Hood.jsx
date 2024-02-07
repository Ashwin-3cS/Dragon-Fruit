import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import HoodPhNumandAmount from '../components/HoodPhNumandAmount';


const Hood = () => {
  const navigate = useNavigate();


  const goToHomePage = () => {
    navigate('/');
  };



  return (
    <div className='hood'>
      <NavBar navigate={navigate}/>
      <div className='full-vh-background  pt-[60px] '>
        <h1 className='text-white text-[48px] ml-[42%] mt-[6%]  italic'>HOOD Page</h1>
        <div  className='flex mt-[0]  justify-center '>
          <HoodPhNumandAmount/>
        </div>
      </div>
    </div>
  );
};

export default Hood;











