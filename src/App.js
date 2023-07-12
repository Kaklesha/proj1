import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Header from './components/Header';
import Image from './components/image';
import logo from './img/anime-girl-rain.png'
  class  App extends React.Component{
    
    constructor(props){
      super(props)
      this.state={
        helpText:"HElp tetete",
        userData:''
      }
      this.inputClick=this.inputClick.bind(this)
    }
  
    componentDidUpdate(prevProp){
      if(this.state.helpText!=="Help")
      console.log("some")
    }

    render(){
      return (
        <div className="ff">
           <Header title="Shapka" />
          
                        <h1>{this.state.helpText}</h1>
                        <h2>{this.state.userData}</h2>
                        
                         <input placeholder={this.state.helpText}
                         onChange={event=>this.setState({userData:event.target.value})}
                         onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
                    <p>{this.state.helpText==="HElp meee"?'YEs':'No'}</p>
        <Image image={logo}/>
                    </div>
      )
    }
    inputClick (){
      this.setState({helpText: "Changed"})
      
    }
    mouseOver (){console.log("gfds")} 
  }

  export default App