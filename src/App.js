import React, { useState } from "react";

//import './App.css';
import "./components/state_handaling.css";

// import Taxtarea from './components/Taxtarea.mjs';
//import Card from './components/Card';
import About from './components/About';
import Navbar from "./components/Navbar";
import State_handaling from "./components/State_handaling.mjs";
//import Alert from "./components/Alert";
//import Sometext from "./components/Sometext";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Use Routes instead of Switch

function App() {
  const [mode, setmode] = useState("dark");

  const [text, settext] = useState("");

   const [alert, setalert] = useState(null);

  //  const [colorss,setcolorss] = useState("light")

//    const forchange =()=>{
//  if(colorss==="light"){
//   setcolorss("dark")
//  }else{
//   setcolorss("light")
//  }
//    }

  
const showalert =(massage,type)=>{
setalert({

massage:massage,
  type:type 

})
setTimeout (()=>{
  setalert(null)
},1500  );

}


  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      settext("Enable To Dark");
      showalert("enable to light mode","success");
      document.title="Textutils - lightmode";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#10223c";
      settext("Enable To light");
      showalert("enable to dark mode","success");
      document.title="Textutils - darkmode";
    }
  };


  

  return (
    // <Router>
    <>
   
      <Navbar
        title="Textutils"
        mode={mode}
        text={text}
        toggleMode={toggleMode}
        // forchange={forchange}
        about="AboutTextutil"
      />

      

      {/* <div className='container my-3  '>
  <Taxtarea heading="Enter the some taxt"  />

</div> */}
  {/* { <Routes>
  <Route exact path="/" element={} />
  <Route exact path="/about" element={<About />} />
</Routes> } */}

      
<State_handaling heading="Word Counter" mode={mode} showalert={showalert} />
      

      {/* <Card/> */}
      {/* <Sometext colorss={colorss} forchange={forchange}/> */}
    <About toggleMode={toggleMode}  mode={mode}/>
     
    </>
    // </Router>
  );
}

export default App;
