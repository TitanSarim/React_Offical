import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'


// !State and Lifecycle

class Clock extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello this is a clock</h1>
        <h2>its new {this.props.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function tick(){
 ReactDOM.render(
   <Clock date={new Date()}/>,
   document.getElementById('root')
 )
};

setInterval(tick, 1000);