import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'

// function and class components

function Welcome(props){
  return <h1>Hello {props.name}</h1>
}

function App(){

  return(
    <div>
      <Welcome name="sara"/>
      <Welcome name="sarim"/>
      <Welcome name="fiza"/>
    </div>
  );

}

ReactDOM.render(<App/>, document.getElementById('root'))
