// Node mudule import
import { combineReducers } from 'redux';

import questionReducer from '../reducers/questions';

//State holding in cumbine reducers
const rootReducer = combineReducers({
    questions: questionReducer
});

export default rootReducer;