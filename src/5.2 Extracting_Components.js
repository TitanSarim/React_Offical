import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'

// Extracting Components

function Component(props){
  return(
    <div className='Comment'>
    <div className='UserInfo'>

    <img className='Avatar' 
    src={props.author.avatarUrl} 
    alt={props.author.name} 
    />

    <div className='User-Info-name'>
      {props.author.name}
    </div>

    </div>

    <div className='Comment-text'>
      {props.text}
    </div>

    <div className='Comment-date'>
      {formatDate(props.date)}
    </div>

    </div>
  );
}


