import React from 'react';
import {Switch, Route, Redirect} from "react-router";
import {BrowserRouter as Router, Link} from "react-router-dom";
import './App.css';
import Page1 from './components/page1';
import Page2 from "./components/page2";
import {Card, Navbar} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Card>
                <div className="card-body">
                    Tool bar here
                </div>
            </Card>
            <Router>
                <Navbar style={{border: "solid 1px black"}}>
                    <Link className="nav-link" to="/p1">Page1</Link>
                    <Link className="nav-link" to="/p2">Page2</Link>
                </Navbar>
                <Card>
                    <div className="card-header">This is content from components:</div>
                    <div className="card-body" style={{border: "solid 1px red"}}>
                        <Switch>
                            <Route exact path="/p1" component={Page1}/>
                            <Route exact path="/p2" component={Page2}/>
                            <Route path="/" render={() => (<Redirect to={"/p1"}/>)}/>
                        </Switch>
                    </div>
                </Card>

            </Router>
        </div>
    );
}

export default App;
