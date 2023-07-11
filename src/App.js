import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Header from './components/Header';
import Image from './components/image';
import logo from './img/anime-girl-rain.png'
  class  App extends React.Component{
  
  
    helpText="HElp meee"
  
    render(){
      return (
        <div className="ff">
           <Header title="Shapka" />
          
                        <h1>{this.helpText}</h1> <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
                    <p>{this.helpText==="HElp meee"?'YEs':'No'}</p>
        <Image image={logo}/>
                    </div>
      )
    }
    inputClick (){console.log("dfs")}
    mouseOver (){console.log("gfds")}
  }

  export default App