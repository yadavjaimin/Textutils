import React from 'react'

export default function Alert(props) {
  return (
     
<div style={{height:60}}>
    {props.alert && <div className="alert alert-primary" role="alert">
{props.alert.type}:{props.alert.massage}
</div>
}
</div>

   
  )
}
