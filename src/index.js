import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Backlog from './Container/Backlog'
import Release from './Container/Release'
import Sprint from './Container/Sprint'
import Home from './Container/Home';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="/release" component={Release} />
            <Route path="/backlog" component={Backlog} />
            <Route path="/sprint" component={Sprint} />
        </Route>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
