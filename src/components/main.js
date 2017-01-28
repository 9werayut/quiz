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
                {this.props.question && (
                    <QuestionInfo
                        id={this.props.question.id}
                        description={this.props.question.description}
                        category={this.props.question.category}
                    />
                )}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        question: state.questions.question
    }
}

export default connect(mapStateToProps, { fetchQuestion })(Main);
