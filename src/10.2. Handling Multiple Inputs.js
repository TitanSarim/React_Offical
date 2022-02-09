import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'

class Reservation extends React.Component{

        constructor(props){
                super(props);
                this.state={
                        isGoing: true,
                        numberOfGuests: 2
                };
                this.handleInputChange = this.handleInputChange.bind(this);
        }

        handleInputChange(event){
                const target = event.target;
                const value = target.type === 'checlbox' ? target.checked: target.value;
                const name = target.name;

                this.setState({
                        [name]:value
                });
        }

        render(){
                return(
                        <form >
                                <label>
                                        Is Going:
                                        <input 
                                        name="isGoing" 
                                        type="checkbox"
                                        checked={this.state.isGoing}
                                        onChange={this.handleInputChange} />
                                </label>
                                <br />
                                <label>
                                        Number of guests:
                                        <input 
                                        name="numberOfGuests" 
                                        type="number"
                                        value={this.state.numberOfGuests}
                                        onChange={this.handleInputChange} />
                                </label>

                        </form>
                );
        }

}

ReactDOM.render(
        <Reservation />,
        document.getElementById('root')
)