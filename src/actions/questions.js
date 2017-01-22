// Node modules import
import axios from 'axios';

// Action types import
import { FETCH_QUESTION } from '../constants/question';

//Receives a random question
export function fetchQuestion(){
    return function(dispatch){
        return axios.get('http://jservice.io/api/random')
            .then(response => {
                dispatch({
                    type: FETCH_QUESTION,
                    payload: 'hello world'
                })
            });
    }
}
