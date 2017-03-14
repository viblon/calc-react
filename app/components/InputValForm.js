import React, { Component } from 'react';
import Slider from 'nw-react-slider'

export default class ValueForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.value||35000};
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(value) {
   this.setState({value: value});
   this.props.inputVal(this.state.value);
 }

  render() {

    return (
      <div>
        <form>
          <label>
            Размер кредита<br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          {/*<input type="submit" value="Submit" />*/}
        </form>
        <Slider
	        value={this.props.value}
	        min={0}
	        max={500}
	        ticks
	        markers={[{value: 3, label: 'Three'}, {value: 8, label: 'Eight'}]}
	        onChange={this.handleChange.bind(this)}/>
      </div>

    );
  }
}
