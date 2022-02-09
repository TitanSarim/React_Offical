import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'

// function and class components


//! simplest way to define a component
// function Welcome(props){
//   return <h1>Hello, {props.name}</h1>
// }

//! we also  use an ES6 Component

// class welcome extends React.Component{
//     render(){
//       return <h1>hello, {this.props.name}</h1>
//     }
// }

//==========================================================


function Welcome(props){
  return <h1>hello{props.name}</h1>;
}

const elemnt = <Welcome name = " Sarim" />;

ReactDOM.render(elemnt, document.getElementById('root'))
