// Timer - logic for retrieving current time
// import libraries
import React, { Component } from 'react';
import styles from './timer.module.css';

class Timer extends Component {

  constructor() {
    super()
this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentWillMount()
  {
setInterval(()=>this.currentTime(),1000)
  }


  render() {
    // returns current time
    return (
      
      <div className={styles.container}>
        {this.state.time.toLocaleTimeString()}
      </div>
    )
  }
}

export default Timer;
