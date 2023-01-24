import React from "react";
import { Router, Route, Redirect, hashHistory } from "react-router";

import Dashboard from "../dashboard2/dashboard2"
import BillingCycle from "../billingCycle/billingCycle"

//quando a gente faz o routes
//pode referenciar em app
export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle}/>
        <Redirect from='*' to='/'/>
    </Router>
)