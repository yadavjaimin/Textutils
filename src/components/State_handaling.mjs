import React,{useState}from 'react'

export default function State_handaling(props) {

//     const toCovert =()=>{
       
//         let change=text.trim().charAt(0).toUpperCase()+text.slice(1).toLowerCase();
// settext(change);  //convert frist character in to upercase

        
//     }
const handleCapitalize = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  settext(newText);

  props.showalert("Capitalize Success","success");

}

    const Uppercase =()=>{
      let change=text.toUpperCase();
        settext(change);
        props.showalert("Convert to Upper Case","success");
    }
    
    
    const toLowerCase =()=>{
      let change=text.toLowerCase();
        settext(change);
        props.showalert("Convert Tolower Case","success");
    }

    
    const onchange =(event)=>{
        
        settext(event.target.value);
    }

    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }

    const handleClrear =()=>{

      settext("");
      props.showalert("Clear text","success");

    }

   



// const [mystyle, setmystyle] = useState({
//   color: 'white',
//   backgroundColor: 'black',
// })

// const [btntext, setbtntext] = useState("Light Mode")

//      const togglestyle =()=>{
//       if(mystyle.color=="white"){
//         setmystyle({color: 'black', backgroundColor: 'white'})

//         setbtntext("Dark Mode")
//       }
//       else{
//         setmystyle({color: 'white', backgroundColor: 'black'})

//         setbtntext("Light Mode")
//       }
//      }




const[text,settext]=useState("");


  return (
   
    <div style={{color:props.mode==="dark"? "white":"black"}}>
    
<h1>{props.heading} </h1>
<div className={"mb-3" }>
  <textarea className={`form-control  text-${props.mode==="dark"? "white":"black"} `} style={{backgroundColor:props.mode=="dark"? "grey":"white "}} value={text} rows="5" onChange={onchange}></textarea>

  
</div>
<button className="btn btn-warning mx-2 my-2" onClick={handleCapitalize} >Capitalise</button>
<button className="btn btn-warning mx-2 my-2" onClick={Uppercase} >To UpperCase </button>
<button className="btn btn-warning mx-2 my-2" onClick={toLowerCase} >To LowerCase </button>
<button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak🔊</button>
<button type="submit" onClick={handleClrear} className="btn btn-warning mx-2 my-2">Clear</button>
{/* <button  type="button" onClick={togglestyle} classname="btn btn-warning">{btntext}</button> */}



<div className="result" style={{color:props.mode==="dark"? "white":"black"}}>

{/* <h2>Text Count</h2> */}
<div className='container1' >
<div className='character'>
<h2> {text.length}</h2>
<p>Character</p>
</div>
<div className='words'>
<h2>{text.split(" ").length-1
  }</h2>
<p>Words</p>
</div>


<div className='readtime'>
<h2>{text.split(" ").length*0.008-0.008}</h2>
<p>Minuts read </p>
</div>

</div>
   
    

</div>
    </div>
  
  )
}










