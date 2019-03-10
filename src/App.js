import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/theme.scss'

import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'

class App extends Component {
    render() {
        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"
                />

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