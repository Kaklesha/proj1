import React from 'react';
import User from './User';


class Users extends React.Component {
 
    render(){
      if(this.props.users.length===0)return(
        <div className='user'>Array of users is empty</div>
      )
      return(
       
       <div>
        {
          this.props.users.map((elem)=>( 
          <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={elem.id} user={elem}/>
           ))
        }
       </div>

      )
    }
    
  }

  export default Users