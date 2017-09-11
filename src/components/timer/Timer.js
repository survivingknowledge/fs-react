import React, { Component } from 'react';

import TimerActionButton from './TimerActionButton';


class Timer extends Component {

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  };

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  };

  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };

  render() {
    const elapsedString =  formatTime(this.props.elapsed + (Date.now() - this.props.runningSince));

    return (
      <div className="ui centered card">
        <div className="content">
          <div className="header">
            {this.props.title}
          </div>
          <div className="meta">
            {this.props.project}
          </div>
          <div className="center aligned description">
            <h2>{elapsedString}</h2>
          </div>
          <div className="extra content">
            <span className="right floated edit icon"
              onClick={this.props.onEditClick}
            >
              <i className="edit icon"></i>
            </span>
            <span className="right floated trash icon"
              onClick={this.handleTrashClick}
            >
              <i className="trash icon"></i>
            </span>
          </div>
        </div>
        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
      </div>
    );
  }
}
 export default Timer;


 function formatTime(time) {
   // Set the unit values in milliseconds.
  let msecPerMinute = 1000 * 60;
  let msecPerHour = msecPerMinute * 60;

   // Calculate the hours, minutes, and seconds.
  let hours = Math.floor(time / msecPerHour );
  time = time - (hours * msecPerHour );

  let min = Math.floor(time / msecPerMinute );
  time = time - (min * msecPerMinute );

  let sec = Math.floor(time / 1000 );

   return `${hours}:${min}:${sec}`
 }
