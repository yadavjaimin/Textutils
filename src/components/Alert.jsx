import React from 'react'

export default function Alert(props) {
  return (
     

    props.alert && <div class="alert alert-primary" role="alert">
{props.alert.type}:{props.alert.massage}
</div>



   
  )
}
