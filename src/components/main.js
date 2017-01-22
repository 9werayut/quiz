// Node module import
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchQuestion } from '../actions/questions';

// Component import
import ActivityLog from './main/activity-log';
import QuestionInfo from './main/question-info';

class Main extends Component {
    componentWillMount(){
        this.props.fetchQuestion();
    }
    render() {
        return(
            <div className="main-page">
                <ActivityLog />
                <QuestionInfo/>
            </div>
        )
    }
}

export default connect(null, { fetchQuestion })(Main);
