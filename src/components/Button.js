import React, { useEffect, useState } from 'react';



const Button =(props)=> {

    const [click, setClick ]= useState(0)
    //console.log(click)
    useEffect(()=>{
        document.title=`you put on but ${click}`
    })
      return(

        <button  onClick={()=>setClick(click+1)} >   {props.text} {click}</button>
      )
    
  }

Button.defaultProps={
    text: "ButtoN",
}

  export default Button