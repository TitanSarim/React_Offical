import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'


//! two identical examples


//? const element = (
//?   <h1 className='greeting'>
//?     hwloo
//?   </h1>
//? )


// ================================================================
//! create a bug free element in react 

//? const element = React.createElement(

//?   'h1',
//?   {className: 'greeting'},
//?   'hello world'

//? )

// ================================================================


//! more specified way

const element = {

  type: 'h1',

  props: {
    className: 'greeting',
    Children: 'holloww world'

  }

};




ReactDOM.render(
  element,

  document.getElementById('root')
)