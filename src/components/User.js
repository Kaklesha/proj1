import React from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5"


class User extends React.Component {

     // const {firstname,lastname,bio,isHappy} = this.props
   
    user  = this.props.user
    render(){
      return(
        
        <div className='user' >

        <IoCloseCircleSharp className='delete-icon' />
        <IoHammerSharp className='edit-icon' />

        <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
        <p>{this.props.user.bio}</p>
        <b  >{this.props.user.isHappy?"Happy":"don't happy"}</b>
         </div>
      )
    }
    
  }

  export default User