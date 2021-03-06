import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/theme.scss'

import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'

import { hotjar } from 'react-hotjar';
import ReactGA from 'react-ga';

class App extends Component {
    render() {
        ReactGA.initialize('UA-139243792-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
        hotjar.initialize(1298606, 6);

        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"
                />

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
                      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                      crossOrigin="anonymous"/>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App;