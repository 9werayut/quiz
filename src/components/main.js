import React, { Component } from 'react';

import ActivityLog from './main/activity-log';
class Main extends Component {
    render() {
        return(
            <div className="main-page">
                <ActivityLog />
            </div>
        )
    }
}

export default Main;
