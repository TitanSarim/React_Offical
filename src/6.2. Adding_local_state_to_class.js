import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'


//! Adding Local State to a Class

class Clock extends React.Component{

    constructor(props){
      super(props);

      this.state = {date: new Date()};
    }

      render(){
          return(
            <div>
            <h1>Hello world</h1>
            <h2>it is {this.state.date.toLocaleTimeString()}</h2>
            </div>
          );
      }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
)