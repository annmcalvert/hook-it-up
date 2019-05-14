import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from '../views/Users';
import DisplayUser from '../views/DisplayUser';

const App = () => {

    return (
        <div className="container">
            <h1>Hook it up!</h1>
            <br />
            <Router>
                <>
                    <Switch>
                        <Route exact path="/" component={Users} />
                        <Route exact path="/:id" component={DisplayUser} />
                    </Switch>
                </>
            </Router>
        </div>
    )
}

export default App;
