import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'




const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
} 

class TemperatureInput extends React.Component{
        constructor(props){
                super(props);

                this.handleChange = this.handleChange.bind(this);
                this.state = {temperature: ''}; 
        }

handleChange(e){
        this.setState({temperature: e.target.value})
}



        render(){
                const temperature = this.state.temperature;
                const scale = this.props.scale;
                
return(

        <fieldset>

                <legend>
                        Enter Temperature in {scaleNames[scale]} :
                </legend>

                <input value={temperature} onChange={this.handleChange} />

        </fieldset>



                );
        }
}

class Calculator extends React.Component{

        render(){
                return(
                        <div>
                                <TemperatureInput scale="c"/>
                                <TemperatureInput scale="f"/>
                        </div>
                );
        }

}


ReactDOM.render(
        <Calculator />,
        document.getElementById('root')
)