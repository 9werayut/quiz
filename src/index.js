//Node modules import
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

// Components import
import routes from './routers';

//Reducers import
import reducers from './reducers/index.js';

// Store definition with Middleware applying and Redenering of React Document Object Model
const createStoreWithMiddleware = applyMiddleware()(createStore); 

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('react-application')
);