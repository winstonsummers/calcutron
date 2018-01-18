import React, {Component} from 'react';

class Calculator extends Component{
	constructor(props){
		super(props)
		this.state = {
			total: 0,
			left: "",
			right: "",
		}
		this.changeLeft = this.changeLeft.bind(this)
		this.changeRight = this.changeRight.bind(this)
	}
	changeLeft(e){
		this.setState({left: e.target.value})
		this.setState((prev)=>({total: Number.parseInt(this.state.left, 10) + Number.parseInt(this.state.right, 10)}))
	}
	changeRight(e){
		this.setState({right: e.target.value})
		this.setState((prev)=>({total: Number.parseInt(this.state.left, 10) + Number.parseInt(this.state.right, 10)}))
	}


	render(){
		return(
			<div className="container">
			  <h1>Add with React!</h1>

			  <div className="add">
			    <input type="number" value={this.state.left} onChange={this.changeLeft} />
			    <span>+</span>
			    <input type="number" value={this.state.right} onChange={this.changeRight} />
			    <span>=</span>
			    <h3>{this.state.total}</h3>
			  </div>
			</div>
		);
	}
}



export default Calculator;