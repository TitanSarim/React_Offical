import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'
import styles from './index.css'

function FancyBorder(props){
        return(
                <div className={'FancyBorder FancyBorder-' + props.color}>
                        {props.children}
                </div>
        )
}

function WelcomeDialog(){
        return(
                <FancyBorder color="Blue"> 
                <h1 className='Dialog-title'>
                        Welcome
                </h1>
                <p className='Dialof-message'>
                        Thankyou 
                </p>
                </FancyBorder>
        )
}

ReactDOM.render(
        <WelcomeDialog/>,
        document.getElementById('root')
)