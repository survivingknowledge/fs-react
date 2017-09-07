import React, { Component } from 'react';

class Timer extends Component {

  render() {
    const d = new Date(this.props.elapsed * 1000);
    const elapsedString =  `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

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
