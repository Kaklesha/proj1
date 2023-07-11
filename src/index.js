 import React from 'react';
 import * as ReactDOMClient from 'react-dom/client';
 //import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// ReactDOM.render(<div><h1>HEllo</h1>
//                 <h1>HEllo</h1></div>, 
// document.getElementById("app"))

// ReactDOM.render(React.createElement('input',{
//     placeholder: 'Help me (((9',
//     onClick:()=>console.log("clicked"),
//     onMouseEnter:()=>console.log("mouse"),
// }), 
// document.getElementById("app"))

// //JSX
const helpText="HElp meee"

const inputClick = ()=>console.log("dfs")
const mouseOver =()=>console.log("gfds")
const element = (<div className="ff">
                    <h1>{helpText}</h1> <input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver}/>
                <p>{helpText==="HElp meee"?'YEs':'No'}</p>

                </div>
                    )
const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(element)
//ReactDOMClient.createRoot(document.getElementById("app"))
//ReactDOM.render(element,app)