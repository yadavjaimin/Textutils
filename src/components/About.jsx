
import React  from "react";



export default function About(props) {
  
   
  let mystyle={
    color:props.mode==="dark" ? "white" :"black",
    
    backgroundColor:props.mode==="dark"? "rgb(36 64 92)":"white"
    
        }
  return (
    <div className={`container text-${props.mode==="dark" ? "white" :"black"}`} >
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>About Me</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              "My name is Jaimin, and I'm currently pursuing a Bachelor of Computer Applications (BCA). I'm also a full-stack developer, passionate about building end-to-end web applications and continually expanding my skills in both front-end and back-end technologies.
              
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong> My Journey in Tech</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            My name is Jaimin, and my journey into the world of technology began with a deep curiosity for how things work, particularly in the digital space. This curiosity led me to pursue a Bachelor of Computer Applications (BCA), where I’ve been able to dive deeper into the theory and practical aspects of computer science.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong> About My Skill's</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            <div className='container'>
       


<ul className='skill' >
  
    <li>c/c++</li>
    <li>Java Script</li>
    <li>PHP</li>
    <li>React</li>
</ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={togglestyle} type="button" className="btn btn-warning">{btntext}</button>
      </div> */}
    </div>
  );
}
