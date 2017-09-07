import React, { Component } from 'react';

function formatTime(time) {
  const d = new Date(time)
  let hours = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  if (hours < 10){ hours = "0" + hours }
  if (min < 10){ min = "0" + min }
  if (sec < 10){ sec = "0" + sec }

  return `${hours}:${min}:${sec}`
}

class Timer extends Component {

  render() {
    const elapsedString =  formatTime(this.props.elapsed);

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
            <span className="right floated edit icon">
              <i className="edit icon"></i>
            </span>
            <span className="right floated trash icon">
              <i className="trash icon"></i>
            </span>
          </div>
        </div>
        <div className="ui bottom attached blue basic button">
          Start
        </div>
      </div>
    );
  }
}
 export default Timer;
