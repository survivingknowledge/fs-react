import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuidv4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Back squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        runningSince: Date.now(),
      },
    ]
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  createTimer = (timer) => {
    const zeroDate = new Date();
    zeroDate.setHours(0,0,0,0);

    const t = Object.assign({}, timer, {
      id: uuidv4(),
      elapsed: zeroDate.getTime(),
      runningSince: Date.now(),
    });
    this.setState({
      timers: this.state.timers.concat(t)
    });
  };

  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),

    });
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  };

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  startTimer = (timerId) => {
    const now = Date.now();

    this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === timerId){
            return Object.assign({}, timer, {
              runningSince: now,
            });
          } else {
            return timer;
          }
        })
    });
  };

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
        timers: this.state.timers.map((timer) => {
          if (timer.id === timerId) {
            const lastElapsed = now - timer.runningSince;
            return Object.assign({}, timer, {
              elapsed: timer.elapsed + lastElapsed,
              runningSince: null,
            });
          } else {
            return timer;
          }
        })
    });
  };

  render() {

    return (
      <div className="ui three colum centered grid">
        <div className="column">
          <EditableTimerList timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}
 export default TimersDashboard;
