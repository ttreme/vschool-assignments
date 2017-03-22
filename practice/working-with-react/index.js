import React from "react";
import ReactDom from "react-dom";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
    }
    
    increment(){
        let newCount = this.state.count+1;
        this.setState({count: newCount})
    }
    decrement(){
        let newCount= this.state.count -1;
        this.setState({count: newCount})
    }
    
    render(){
        return (
            <div>
            <button onClick={this.increment.bind(this)}>+</button>
            <button onClick={this.decrement.bind(this)}>-</button>
        <h1>{this.state.count}</h1>
         </div>   
        )
    }
}


ReactDom.render(<App/>, document.getElementById("app"));