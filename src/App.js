import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/theme.scss'

import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}

export default App;
