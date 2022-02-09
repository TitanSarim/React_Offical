import React, { Children } from 'react';
import ReactDom from 'react-dom';
import ReactDOM from 'react-dom'

/** 
 *  In React, mutable state is typically kept in the state property of components, 
 * and only updated with setState().
*/

class NameForm extends React.Component{
        constructor(props){
                super(props);
                this.state = {value: " "};

                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event){
                this.setState({value: event.target.value});
        }

        handleSubmit(event){
                alert('A name was submit : ' + this.state.value);
                event.preventDefault();
        }

        render(){
                return(

                        <form onSubmit={this.handleSubmit}>
                                
                                <label> Name:
                                        
                                <input type='text' 
                                value={this,this.state.value} 
                                onChange={this.handleChange}/>
                                
                                </label>

                                <input type="submit" value="submit" />
                        </form>

                );
        }

}

ReactDOM.render(
        <NameForm />,
        document.getElementById('root')
)