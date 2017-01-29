// Node module import
import React, { Component } from 'react';

// Render data about user activity
export default class ActivityLog extends Component {
  render() {
    return(
      <div className="activity-log">
        <div className="col-md-6">
          <div className="correct-answers">
            Correct Answer: 0
          </div>
        </div>
        <div className="col-md-6">
          <div className="total-questions">
            Total Questions: {this.props.questionsCount}
          </div>
        </div>
      </div>
    );
  }
}
