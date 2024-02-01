import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Protected from "./components/Protected.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup";
import Hood from "./pages/Hood.jsx";
import DashBoard from "./pages/DashBoard.jsx";

// import Consumer from "./pages/Consumer.jsx";
// import Donator from "./pages/Donator.jsx";
// import Ourwork from "./pages/Ourwork.jsx";
// import Team from "./pages/Team.jsx";
// import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="hood" element={<Hood />} />
      <Route path="dashboard" element={<DashBoard />} />
      {/* <Route path="ourwork" element={<Ourwork />} />
      <Route path="team" element={<Team />} />
      <Route path="contact" element={<Contact />} /> */}

      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<Home />} />
      </Route>
    </Route>
  )
);

// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root")
);
