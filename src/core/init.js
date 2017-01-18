import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import reducers, {initialState} from 'core/reducers';

import App from 'core/components/app';


export default class TodoList {
    constructor() {
        // The element where the app will be rendered
        this.element = document.getElementById('app');

        this.reducers = reducers;

        this.store = this.setUpStore();

        this.history = syncHistoryWithStore(browserHistory, this.store);

        this.render();        

    }

    setUpStore() {
        return createStore(this.reducers, initialState, compose(applyMiddleware(thunk)));
    }

    render() {
        ReactDOM.render(
            <Provider store={this.store}>
                <Router history={this.history}>
                    <Route path="/" component={App}/>
                </Router>
            </Provider>,
            this.element
        );
    }
}