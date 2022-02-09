import React from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'



function formatName(user, age){

  return user.firstName + '  ' + user.lastName +  ' ' + user.age;

}

const user ={

      firstName : 'Sarim',
      lastName : 'zahid',

};

const age = {

  age: 22

}

const element =  (

      <h1>hwllo {formatName(user, age)}</h1>
    
)

ReactDOM.render(
  element,

  document.getElementById('root')
)