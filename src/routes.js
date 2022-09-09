import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/home';
import Subpage from './pages/projects';
import Header from './components/Header';

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/subpage/:customParam" component={Subpage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;