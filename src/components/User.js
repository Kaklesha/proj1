import React from 'react';
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5"
import AddUser from './AddUser';

class User extends React.Component {

     // const {firstname,lastname,bio,isHappy} = this.props
   
    constructor (props){
        super(props)
        this.state={
            editForm: false
        }
    }

    user  = this.props.user
    render(){
      return(
        
        <div className='user' >

        <IoCloseCircleSharp onClick={()=>this.props.onDelete(this.user.id)} className='delete-icon' />
        <IoHammerSharp onClick={()=>{
            this.setState({
                editForm: !this.state.editForm
            })
        }} className='edit-icon' />

        <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
        <p>{this.props.user.bio}</p>
        <b  >{this.props.user.isHappy?"Happy":"don't happy"}</b>

        {this.state.editForm&&<AddUser user={this.user} onAdd={this.props.onEdit}/>}
         </div>
      )
    }
    
  }

  export default User