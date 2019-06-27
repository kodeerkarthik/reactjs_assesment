import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import Reducers from './Reducers';
import ReduxThunk from 'redux-thunk'
	
import { Provider } from 'react-redux';	

import { createStore, applyMiddleware, compose } from 'redux';	
	
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)));
	
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));	

serviceWorker.unregister();
