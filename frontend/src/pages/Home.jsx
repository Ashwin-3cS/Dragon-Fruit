// import React from "react";
// import  ReactDOM  from "react-dom";

// import NavBar from "../components/NavBar.jsx"
// // import Section from "../components/Section.jsx";
// import { useNavigate } from "react-router-dom";



// function Home(){
//   const navigate = useNavigate(); 

//   return  ( 
//     <div className="homeBg ">
//       <NavBar navigate ={navigate }/>
//       {/* <Section/> */}
//       <h1 className="mt-[500px]">HI BRO</h1>
//     </div>

//   );
// }


// export default Home;



import React from "react";
import ReactDOM from "react-dom";
import NavBar from "../components/NavBar.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (

    <div className='homeBg'>
    <NavBar navigate={navigate}/>
        <div className='h-screen pt-[60px]'>
            <h1 className='mt-[500px] text-zinc-200'>Home page</h1> 
            <p className="text-zinc-200">hi </p>
            
         </div>
    </div>
  );
}

export default Home;

