import React from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'


// ! JSX tags may contain children:

const calling = (
  <div>
    <h1>hii</h1>
    <h1>i am arim</h1>
  </div>
)

// ! It is safe to embed user input in JSX:

const title = response.potentiallyMaliciousInput;
// !this is safe
const element = <h1>{title}</h1>


ReactDOM.render(
  element,
  calling,

  document.getElementById('root')
)