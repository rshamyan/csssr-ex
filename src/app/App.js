import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Search from '../search/Search'
import Issue from '../issue/Issue'
import AppBar from 'material-ui/AppBar';
import logo from './images/logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AppBar
                        className="app__header"
                        title="CSSSR EX"
                        iconElementLeft={
                            <img src={logo} className="app__logo" alt="logo" />
                        }
                    />
                    <div className="app__content">
                        <Route exact path="/" component={Search} />
                        <Route path="/issue/:id" component={Issue} />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;