import React, { useState } from "react";
// import SignUp from "./SignUp";
import Registration from "./Registration";
import { BrowserRouter,Route,Router, Routes } from "react-router-dom";
import { createContext } from "react";
import Dashboard from "./Dashboard";
import Home from "./Home";


const App = () => {
  // return <SignUp />;
const [log,setLog]=useState(false);
return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element= {<Home />}/>
    <Route path="/register" element={!log?<Registration setLog={setLog} />:<Dashboard/>}/>
    <Route path="/dashboard" element={log?<Dashboard/>:<Dashboard/>}/>


  </Routes>

  </BrowserRouter>
)
};

export default App;
