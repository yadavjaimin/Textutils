import React, { useState } from "react";

//import './App.css';
import "./components/state_handaling.css";

// import Taxtarea from './components/Taxtarea.mjs';
//import Card from './components/Card';
import About from "./components/About";
import Navbar from "./components/Navbar";
import State_handaling from "./components/State_handaling.mjs";

//import Sometext from "./components/Sometext";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use Routes instead of Switch

function App() {
  const [mode, setmode] = useState("dark");

  const [text, settext] = useState("");

  const [alert, setalert] = useState("");

  //  const [colorss,setcolorss] = useState("light")

  //    const forchange =()=>{
  //  if(colorss==="light"){
  //   setcolorss("dark")
  //  }else{
  //   setcolorss("light")
  //  }
  //    }
 

  const showalert = (massage, type) => {
    setalert({
      massage: massage,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

const removeBodyClass=()=>{
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-white');
}


  const toggleMode = (cls) => {
    removeBodyClass();
console.error(cls);
document.body.classList.add("bg-"+cls);


    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      settext("Enable To Dark");
      showalert("enable to light mode", "success");
      // document.title = "Textutils - lightmode";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#10223c";
      settext("Enable To light");
      showalert("enable to dark mode", "success");
      // document.title = "Textutils - darkmode";
    }
  };

  return (
    
    <Router>
      <>
        <Navbar
          title="Textutils"
          mode={mode}
          text={text}
          toggleMode={toggleMode}
          // forchange={forchange}
          about="AboutTextutil"
        />

     <Alert alert={alert}/>

        {/* <div className='container my-3  '>
  <Taxtarea heading="Enter the some taxt"  />

</div> */}

        
          <Routes>
            <Route exact path="/" element={   <State_handaling
          heading="Txtutils - Word Counter , Character counter"
          mode={mode}
          showalert={showalert}
        />} />
            <Route
              exact
              path="/about"
              element={<About toggleMode={toggleMode} mode={mode} showalert={showalert} />}
            />
           
          </Routes>
         
        

        {/* <Card/> */}
        {/* <Sometext colorss={colorss} forchange={forchange}/> */}
      </>
    </Router>
  );
}

export default App;
