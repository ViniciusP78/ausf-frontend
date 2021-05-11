import React from 'react';

import { BrowserRouter, Switch, Route, Redirect }  from 'react-router-dom';

// Rotas de autenticação
import LoginPage from 'pages/Auth/Login';

//Prontuarios
import ProntuariosList from 'pages/Prontuarios/Lista';
import CadastrarProntuario from 'pages/Prontuarios/Cadastro';
import DetalhesProntuario from 'pages/Prontuarios/Detalhes';

import Fila from 'pages/Fila';

//Consultas
import ConsultasList from 'pages/Consultas/Lista';


//Usuarios
import UsuariosList from 'pages/Usuarios/Lista';
import DetalhesUsuario from 'pages/Usuarios/Detalhes';
import CadastrarUsuario from 'pages/Usuarios/Cadastro';

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
        <PrivateRoute path="/prontuarios/edit/:id" exact component={CadastrarProntuario} />
        <PrivateRoute path="/prontuarios/:id" exact component={DetalhesProntuario} />
        <PrivateRoute path="/prontuarios/:id/triagens" exact component={() => <></>} />
        <PrivateRoute path="/prontuarios/:id/consultas" exact component={() => <></>} />
        <PrivateRoute path="/usuarios" exact component={UsuariosList} />
        <PrivateRoute path="/usuarios/novo" exact component={CadastrarUsuario} />
        <PrivateRoute path="/usuarios/:id" exact component={DetalhesUsuario} />
        <PrivateRoute path="/usuarios/edit/:id" exact component={() => <></>} />
        

        <PrivateRoute path="/consultas" exact component={ConsultasList} />

        <PrivateRoute path="/fila" exact component={Fila}/>

        {/* <PrivateRoute path="/consultas" exact component={ConsultasList} /> */}
        <PrivateRoute path="/consultas/:id" exact component={() => <></>} />

        <Route path="/usuarios" exact />
        
        <Route path="/" component={() => <Redirect to="/login"/>} exact/>
        <Route path="*" component={() => <Redirect to="/login"/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;