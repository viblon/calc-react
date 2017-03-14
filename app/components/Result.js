import React, { Component } from 'react';

export default class Result extends Component {

  render() {
    var st = 0.18;
    var p = st/12;
    var x = Math.round(this.props.value*(p+p/(Math.pow((1+p),this.props.time)-1)));
    var rur = 'рублей'
    //if(x%100<5||x%100>20){
      //if(x%10==1){rur='рубль'}
    // if(x%100<5||x%100>20){}
switch (true) {
  case (x%100>4&&x%100<21):
    rur='рублей';
    break;
  case (x%10==1):
    rur='рубль';
    break;
  case (x%10==2||x%10==3||x%10==4):
    rur='рубля';
    break;
  default:
    rur='рублей';
}
    {'рублей'}
    return (
      <div>
        <div>ставка {st*100}%</div>
        <div>ежемесячный платеж: {x} {rur}</div>
      </div>
    );
  }
}
