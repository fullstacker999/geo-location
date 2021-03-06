import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import Dashboard from './container/pages/DashboardPage';
import LoginPage from './container/pages/LoginPage/LoginPage';
import SecureRoute from './routes/SecureRoute';

// import dotenv from 'dotenv';
// dotenv.config();

function App() {

  // localStorage.removeItem('geo-token')
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <SecureRoute path='/account' component={Dashboard} />
        <Redirect to='/login' />
      </Switch>
    </div>
  );
}

export default App;
