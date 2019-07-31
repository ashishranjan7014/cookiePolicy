import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Homepage from '../components/homepage';
import About from '../components/about';
import Policy from '../components/policy';
import ReactGA from 'react-ga';

console.log("pathname")

const history = createBrowserHistory();
ReactGA.initialize('UA-000000-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
})


const Routers = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/about" exact component={About} />
                <Route path="/policy" exact component={Policy} />
            </Switch>
        </Router>
    );
};

export default Routers;