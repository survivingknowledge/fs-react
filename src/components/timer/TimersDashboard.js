import React, { Component } from 'react';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends Component {

  render() {

    return (
      <div className="ui three colum centered grid">
        <div className="column">
          <EditableTimerList />
          <ToggleableTimerForm
            isOpen={true}
          />
        </div>
      </div>
    );
  }
}
 export default TimersDashboard;
