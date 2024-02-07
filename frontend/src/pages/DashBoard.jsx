
import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';



const DashBoard = () => {

  const navigate=useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  



  return (
    <div className='dashboard'>
      <NavBar navigate={navigate}/>
      <div className='h-screen pt-[60px]'>
        <h1 className='mt-[4%] ml-[50%]  text-zinc-200'>Dashboard Page</h1>      
      </div>
    </div>
  );
};


export default DashBoard;
