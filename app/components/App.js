import React, { Component } from 'react';
import ValueForm from './InputValForm'
import TimeForm from './InputTimeForm'
import Result from './Result'





export default class App extends Component {
	constructor(props) {
    super(props);
    this.state = {value: 35000, time: 48};

  //  this.handleDayGreeting = this.handleDayGreeting.bind(this);
  //  this.handleSubmit = this.handleSubmit.bind(this);
  }
	inputVal (value){
			this.setState({value:value});
	}
	inputTime (value){
			this.setState({time:value});
	}


	render(){

		return (
			<div>
			<ValueForm inputVal={this.inputVal.bind(this)} value = {this.state.value}/>

			<TimeForm inputTime={this.inputTime.bind(this)} time = {this.state.time}/>
			<Result value = {this.state.value} time = {this.state.time}/>

			</div>
		);
	}
}
