import React from 'react';

import { BrowserRouter, Switch, Route, Redirect }  from 'react-router-dom';

// Rotas de autenticação
import LoginPage from 'pages/Auth/Login';

//Prontuarios
import ProntuariosList from 'pages/Prontuarios/Lista';
import CadastrarProntuario from 'pages/Prontuarios/Cadastro';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/login" component={LoginPage}/>
        
        <PrivateRoute path="/prontuarios" exact component={ProntuariosList}/>
        <PrivateRoute path="/prontuarios/novo" exact component={CadastrarProntuario}/>
        <PrivateRoute path="/prontuarios/:id" exact component={() => <></>} />
        <PrivateRoute path="/prontuarios/:id/triagens" exact component={() => <></>} />
        <PrivateRoute path="/prontuarios/:id/consultas" exact component={() => <></>} />

        <PrivateRoute path="/consultas" exact component={() => <></>} />
        <PrivateRoute path="/consultas/:id" exact component={() => <></>} />

        <Route path="/usuarios" exact />
        <Route path="/consultas" exact />
        <PrivateRoute path="/abnerdeus" component={() => <></>} exact/>
        
        <Route path="/" component={() => <Redirect to="/login"/>} exact/>
        <Route path="*" component={() => <Redirect to="/login"/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;