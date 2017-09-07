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

  createTimer = (timer) => {
    console.log(timer);
    const t = Object.assign({}, timer, {
      id: uuidv4(),
      elapsed: Math.round(new Date().getTime()/1000),
      runningSince: Date.now()
    });
    this.setState({
      timers: this.state.timers.concat(t)
    });
  };

  render() {

    return (
      <div className="ui three colum centered grid">
        <div className="column">
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}
 export default TimersDashboard;
