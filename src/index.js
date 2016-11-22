import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';
import './css/index.css';
import Project from './Project';
import Resume from './Resume';
import AboutMe from './AboutMe';
import LandingPage from './LandingPage';

// Render DOM -- wrapper in MuiThemeProvider for material-ui elements
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LandingPage}/>
                <Route path="aboutMe" component={AboutMe}/>
                <Route path="project" component={Project}/>
                <Route path="resume" component={Resume}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
