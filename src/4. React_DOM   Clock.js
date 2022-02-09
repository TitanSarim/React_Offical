import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'

function tick(){

  const element=(

      <div>
        <h1>this is a Date</h1>
        <h1>{new Date().toLocaleDateString()}</h1>



        <h1>this is a Time</h1>
        <h1>{new Date().toLocaleTimeString()}</h1>


      </div>

  )
ReactDOM.render(element, document.getElementById('root'))


}

setInterval(tick, 1000)