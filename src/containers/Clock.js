import React, { Component } from "react";

export default class Clock extends Component {
  state = { date: new Date() };
  timer = null;
  
  updateTime() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateTime(), 1000);
  }
//memory leak taken care
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h3>Now the time is : {this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}