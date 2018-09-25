import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import rootReducer from './reducers';
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise'
//import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(rootReducer, {}, applyMiddleware(ReduxPromise));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    
);
