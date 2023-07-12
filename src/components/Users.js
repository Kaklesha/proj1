import React from 'react';



class Users extends React.Component {
  users =[
    {
      id:1 , 
      firstname: "BOb", 
      lastname:"Marley", 
      bio:"lorem wefw qwd qw qwd qwd qwd", 
      age: 40,
      isHappy: true

    },
    {
      id:2 , 
      firstname: "John", 
      lastname:"Doe", 
      bio:"lorem faf afas ss dd", 
      age: 22,
      isHappy: false

    }
  ]
    render(){
      if(this.users.length===0)return(
        <div className='user'>Array of users is empty</div>
      )
      return(
       
       <div>
        {
          this.users.map((elem)=>( 
            <div className='user' key={elem.id}>
              <h3>{elem.firstname} {elem.lastname}</h3>
              <p>{elem.bio}</p>
              <b  >{elem.isHappy?"Happy":"don't happy"}</b>
            </div>
           ))
        }
       </div>

      )
    }
    
  }

  export default Users