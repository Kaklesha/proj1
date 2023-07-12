import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Header from './components/Header';
import Users from './components/Users';
  class  App extends React.Component{
    
    
  
    render(){
      return (
        <div className="ff">
           <Header title="List of Users" />
            <main>
              <Users/>
            </main>
            <aside>
              
            </aside>
        </div>
      )
    }
    
  }

  export default App