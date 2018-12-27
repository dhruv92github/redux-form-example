import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { userReducer } from "./reducers/userReducer";

const rootReducer=combineReducers({userReducer});
const store=createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



