import React, { Component, useState } from 'react'

export default class Clock extends Component {
    
  
  render() {
    return (
      <div>
        <h3>Now the time is : {new Date().toLocaleTimeString()}</h3>

        <button >start</button>
      </div>
    )
  }
}
