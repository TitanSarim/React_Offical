import React from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'



function formatName(user){

  return user.firstName + '  ' + user.lastName;

}



function getGreeting(user){

  if(user){
    return <h1>hello,{formatName(user)}</h1>
  }else{
    return <h1>hello, usama</h1>
  }

}
const user ={

      firstName : 'Sarim',
      lastName : 'zahid',

};

const element =  (

      <h1>hwllo {getGreeting(user)}</h1>
    
)

ReactDOM.render(
  element,

  document.getElementById('root')
)