import React, { Component } from 'react';
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import {Route, Switch, withRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route path= '/Projects' exact component={Projects}/>
                <Route path='/' exact component={Home}/>
            </Switch>
        </div>

    );
  }
}

export default withRouter(App)
