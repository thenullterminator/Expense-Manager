import React from 'react';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom';

import Header from '../components/NavBar';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';

const AppRouter=()=>(
      <Router>
            <Header/>
            <Switch>
                  <Route path='/' component={ExpenseDashboardPage} exact/>
                  <Route path='/create' component={AddExpensePage}/>
                  <Route path="/edit/:id" component={EditExpensePage}/>
                  <Route path='/help' component={HelpPage}/>
                  <Route component={PageNotFound}/>
            </Switch>
      </Router>
);

export default AppRouter;