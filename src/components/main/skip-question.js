import React, { Component } from 'react';

export default class SkipQuestion extends Component {
    receiveNextQuestion() {
        this.props.fetchQuestion();
        this.props.incrementQuestionCount();
    }
    render() {
        return(
            <div className="skip-question" onClick={this.receiveNextQuestion.bind(this)}>
                SkipQuestion
            </div>
        );
    }
}