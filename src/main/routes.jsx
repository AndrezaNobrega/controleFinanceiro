import React from "react";
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router";


import Dashboard from "../dashboard2/dashboard2"
import BillingCycle from "../billingCycle/billingCycle"
import AuthOrApp from "./authOrApp";

//quando a gente faz o routes
//pode referenciar em app
export default props => (
    
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard}/>
            <Route path='billingCycles' component={BillingCycle}/>
        </Route>
        <Redirect from='*' to='/'/>
    </Router>
)