import React, { Component } from 'react';
import Slider from 'nw-react-slider'

export default class TimeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.time||0};

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
   this.setState({value: value});
   this.props.inputTime(this.state.value);
 }
  // handleChange(event) {
  //   this.props.inputTime(event.target.value);
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div>
      <form>
        <label>
          Срок кредита<br/>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/*<input type="submit" value="Submit" />*/}
      </form>
      <Slider
        value={this.props.time}
        min={0}
        max={64}
        ticks
        markers={[{value: 3, label: 'Three'}, {value: 8, label: 'Eight'}]}
        onChange={this.handleChange.bind(this)}/>
    </div>
    );
  }
}
