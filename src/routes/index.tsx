import React from 'react';

import { BrowserRouter, Switch, Route }  from 'react-router-dom';

// Rotas de autenticação
import LoginPage from 'pages/Auth/Login';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/login" component={LoginPage}/>
        <Route path="/" component={() => <h1>Página inicial</h1>} exact/>
        <PrivateRoute path="/prontuarios" exact component={() => <></>}/>
        <PrivateRoute path="/prontuarios/:id" exact component={() => <></>} />
        <PrivateRoute path="/prontuarios/:id/triagens" exact component={() => <></>} />
        <PrivateRoute path="/prontuarios/:id/consultas" exact component={() => <></>} />
        <PrivateRoute path="/consultas" exact component={() => <></>} />
        <PrivateRoute path="/consultas/:id" exact component={() => <></>} />
        <Route path="/usuarios" exact />
        <Route path="/consultas" exact />
        <PrivateRoute path="/abnerdeus" component={() => <></>} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;