import React from 'react';
import {Switch, Route, Redirect} from "react-router";
import {BrowserRouter as Router, Link} from "react-router-dom";
import './App.css';
import Page1 from './components/page1';
import Page2 from "./components/page2";

function App() {
    return (
        <div className="App">
            <div>
                Tool bar here
            </div>
            <Router>
                <nav>
                    <Link to="/p1">Page1</Link>
                    <Link to="/p2">Page2</Link>
                </nav>
                <div>
                    <Switch>
                        <Route exact path="/p1" component={Page1}/>
                        <Route exact path="/p2" component={Page2}/>
                        <Route path="/" render={() => (<Redirect to={"/p1"}/>)}/>
                    </Switch>
                </div>

            </Router>
        </div>
    );
}

export default App;
