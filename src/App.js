import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';

  class  App extends React.Component{
    
    constructor(props){
      super(props)
      this.state={
        users :[
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
      }
      this.addUser=this.addUser.bind(this) 
       this.deleteUser=this.deleteUser.bind(this)
      this.editUser=this.editUser.bind(this)
     }
  
    render(){
      return (
        <div>
           <Header title="List of Users" />
            <main>
              <Users users={this.state.users}  onEdit={this.editUser} onDelete={this.deleteUser}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser} />

            </aside>
        </div>
      )
    } 

    addUser(user){
      
      //console.log(user);   
      
      const id = this.state.users.length+1
      this.setState({
        users: [...this.state.users, {id, ...user}] 
        
      })
      

    } 
    deleteUser(id){

      this.setState({
        users: this.state.users.filter((el)=>el.id!==id)
      })

      

    }

    editUser(user){
   //  console.log(user) 
      let allUsers=this.state.users
      allUsers[user.id-1]=user
      this.setState({users:[]},()=>{
        this.setState({users: [...allUsers]})
      })

    }

  }

  export default App