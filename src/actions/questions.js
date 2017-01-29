// Node modules import
import axios from 'axios';

// Action types import
import { FETCH_QUESTION, INCREMENT_QUESTIONS_COUNT } from '../constants/question';

//Receives a random question
export function fetchQuestion(){
    return function(dispatch){
        return axios.get('http://jservice.io/api/random')
            .then(response => {
                const questionObj = response.data[0];
                const data = {
                    id: questionObj.id,
                    answer: questionObj.answer,
                    description: questionObj.question,
                    category: questionObj.category.title
                }
                dispatch({
                    type: FETCH_QUESTION,
                    payload: data
                })
            });
    }
}

//Increment the question
export function incrementQuestionCount() {
    return function (dispatch) {
        dispatch({
            type: INCREMENT_QUESTIONS_COUNT
        })
    }
}
