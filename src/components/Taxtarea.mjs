import React,{useState} from "react";

export default function Taxtarea(props) {

const handleUPclick = ()=>{
// console.log("Convert in to uppercase " +text);
const upper = text.toUpperCase();
settext(upper);

}

const handleonchange = (event)=>{
  // console.log("on change");
  settext(event.target.value);
  }


   const[text,settext]=useState("Write here");
  //text="enter some text";    >wrong way to chnage state
  //settext("enter some text");  >right way to change state


  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text}  onChange={handleonchange}  rows="8" id="mybox"></textarea>
      </div>
      <button className="btn-btn-primary" onClick={handleUPclick}>Convert to Uppercase</button>
    </div>
  );
}
