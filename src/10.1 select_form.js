import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'


class FlavorForm extends React.Component{
constructor(props){
        super(props);
        this.state = {value: 'Cocunut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubimt = this.handleSubimt.bind(this);
}

handleChange(event){
        this.setState({value: event.target.value});
}

handleSubimt(event){
        alert('Your Favorite flavor is:  ' + this.state.value)
        event.preventDefault();
}

render(){
        return(
                <form onSubmit={this.handleSubimt}>

                        <label> Pick yout favorite Flavor: 

                        <select value={this.state.value} onChange={this.handleChange}>

                        <option value="grapefruit">Grape Fruit</option>
                        <option value="lime">Lime Fruit</option>
                        <option value="cocunut">Cocunut Fruit</option>
                        <option value="mango">Mango Fruit</option>
                                
                        </select>

                        </label>

                        <input type="submit" value="submit"/>

                </form>
        );
}


}


ReactDOM.render(
        <FlavorForm />,
        document.getElementById('root')
)