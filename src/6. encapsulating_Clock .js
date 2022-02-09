import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'


// !State and Lifecycle

function Clock(props){
  return(

    <div>
      <h1>Hello this is a programmer</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>

  );
}

function tick(){
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000)