import React, { Component } from 'react';

export default class QuestionInfo extends Component {
    render() {
        return(
            <div className="question-info">
                <h1 className="title">Question </h1>
                <h2 className="category">category: energy</h2>
                <p className="description">
                    Hello, some text should be here...
                </p>
            </div>
        );
    }
}
