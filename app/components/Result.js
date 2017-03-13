import React, { Component } from 'react';

export default class Result extends React.Component {

  render() {
    var st = 0.18;
    var p = st/12;
    var x = Math.round(this.props.value*(p+p/(Math.pow((1+p),this.props.time)-1)));
    return (
      <div>
        <div>ставка {st*100}%</div>
        <div>ежемесячный платеж: {x}</div>
      </div>
    );
  }
}
