import React, { Component } from 'react'
import { messageService } from './services/message.service'
//Producer or Provider
export default class RxApp extends Component {
    sendMessage(){
        messageService.sendMessage('Message from Provider.RX 7.0 has come')
    }
    clearMessage(){
        messageService.clearMessages()
    }
    render() {
    return (
      <div className='bg-warning'>
        <h2>React + RXJS component communication</h2>
        <button onClick={this.sendMessage} className='btn btn-success'>Send Message to all</button>
        <button onClick={this.clearMessage} className='btn btn-success'>Clear Messages</button>
        
      </div>
    )
  }
}
