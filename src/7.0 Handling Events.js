import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'

// Handling Events

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state= {isToggleOn : true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

  }


handleClick () {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}

render(){
  return(

      <button onClick={this.handleClick}>
        {this.state.isToggleOn? 'Turn On' : 'Turn OFF'}
      </button>

  );
}

}


//!=================================================================
/**
 
If calling bind annoys you, there are two ways you can get around this. 
If you are using the experimental public class fields syntax, you can use 
class fields to correctly bind callbacks:

 */
// class LoggingButton extends React.Component{


// handelClick =  () =>{
//   console.assert.log('this is :' , this)
// }


// render(){
//   return(
//     <button onClick={this.handelClick}>
//       Click me
//     </button>
//   )
// }

// }

//!=================================================================

ReactDOM.render(
  <Toggle/>,
  document.getElementById('root')
)
