import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Users from './Users';
// import UserId from './UserId';
import DisplayUser from './DisplayUser';

const App = () => {

    return (
        <div className="container">
        <h1>Hook it up!</h1>
        <br/>
        <Router>
            <Fragment>
                <Link className="btn btn-primary m-3" to="/">Go Home</Link>
                <Link className="btn btn-primary m-3" to="/users">Users</Link>
           <Switch>
               <Route exact path="/" component={Users} />
               <Route exact path="/users" component={Users} />
               <Route exact path="/:id" component={DisplayUser} />
           </Switch>
            </Fragment>
        </Router>
        </div>
    )

}

export default App;
