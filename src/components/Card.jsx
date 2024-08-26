import React from 'react'
import pik from './jaimin.jpg'

export default function Card(props) {
  return (
    
    <div className='container'>
<img className="img1" src={pik} alt="profile picture"></img>

<h3 className='heading'>Jaimin Yadav</h3>
<p className='text'>I am a web-dev student</p>
{/* <h6 className='heading-2'>My Skill's</h6> */}
<ul className='skill' >
  
    <li>c/c++</li>
    <li>Java Script</li>
    <li>PHP</li>
    <li>React</li>
</ul>
 


    </div>
  )
}
