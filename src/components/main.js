import React, { Component } from 'react';

import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';
class Main extends Component {
    render() {
        return(
            <div className="main-page">
                <ActivityLog />
                <QuestionInfo/>
            </div>
        )
    }
}

export default Main;
