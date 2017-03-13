import React, { Component } from 'react';

export default class ValueForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value||'0'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.inputVal(event.target.value);
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Размер кредита<br/>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/*<input type="submit" value="Submit" />*/}
      </form>
    );
  }
}
