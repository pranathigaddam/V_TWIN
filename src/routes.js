import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
//Components
import Login from "./login/index";
import Dashboard from "./dashboard/index"


function Routes() {
    return(
        <Router>
        <Switch>
            <Route path="/" exact component={()=> <Login/>}/>
            <Route path="/dashboard" component={()=> <Dashboard/>}/>
        </Switch>
        </Router>
    )
}
export default Routes;

