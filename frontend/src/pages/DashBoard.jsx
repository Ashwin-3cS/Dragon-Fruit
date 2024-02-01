
import React from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
// import DonorImageCarousel from '../components/DonorImageCarousel';
// import RegistrationPortal from '../components/RegistrationPortal';


const DashBoard = () => {

  const navigate=useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  



  return (
    <div className='dashboard'>
      <NavBar navigate={navigate}/>
      <div className='h-screen pt-[60px]'>
        <h1>Dashboard</h1>      
      </div>
    </div>
  );
};


export default DashBoard;
