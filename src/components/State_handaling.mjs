import React, { useState } from 'react';

export default function StateHandling(props) {
  const [text, setText] = useState(""); // Correctly using useState inside a function component

  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showalert("Capitalized successfully", "success");
  };

  const handleUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to uppercase", "success");
  };

  const handleLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to lowercase", "success");
  };

  const handleChange = (event) => {
    
    
     setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
    props.showalert("Text cleared", "success");
  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h1 className='text-heading mb-3'>{props.heading}</h1>
      <div className="textarea mb-2">
        <textarea 
          className={`form-control text-${props.mode === "dark" ? "white" : "black"}`}
          style={{ backgroundColor: props.mode === "dark" ? "rgb(52 79 118)" : "white" }}
          value={text}
          rows="5"
          onChange={handleChange}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleCapitalize}>
        Capitalize
      </button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleUppercase}>
        To Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleLowercase}>
        To Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleSpeak}>
        Speak 🔊
      </button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleClear}>
        Clear
      </button>

      <div className={`result text-${props.mode === 'light' ? "black" : "white"}`}>
        <div className='container1'>
          <div className='character'>
            <h2>{text.length}</h2>
            <p>Characters</p>
          </div>
          <div className='words'>
            <h2>{text.split(/\s+/).filter(element => element.length !== 0).length}</h2>
            <p>Words</p>
          </div>
          <div className='readtime'>
            <h2>{(text.split(/\s+/).filter(element => element.length !== 0).length * 0.008).toFixed(2)}</h2>
            <p>Minutes read</p>

          </div>
        </div>
      </div>
    </div>
  );
}
