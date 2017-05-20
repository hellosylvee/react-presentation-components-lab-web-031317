import React, { Component } from 'react'

class DumbComponent extends Component {
  constructor(){
    super()
    this.state={
      mood: 'happy'
    }
  }

  handleClick(){
    const MOOD = this.state.mood
    if (MOOD === 'happy') {
      this.setState({ mood: 'sad'})
    } else {
      this.setState({ mood: 'happy'})
    }
  }

  render(){
    return(
      <div onClick={this.handleClick.bind(this)}>{this.state.mood}</div>
    )
  }
}

export default DumbComponent

// Error: Method “text” is only meant to be run on a single node. 2 found instead. - you have 2 sets of <div>
