import React from 'react';

import { BrowserRouter, Switch, Route }  from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <h1>Página inicial</h1>}/>
        <Route path="/prontuarios" exact />
        <Route path="/prontuarios/:id" exact />
        <Route path="/prontuarios/:id/triagens" exact />
        <Route path="/prontuarios/:id/consultas" exact />
        <Route path="/consultas" exact />
        <Route path="/consultas/:id" exact />
        <Route path="/usuarios" exact />
        <Route path="/consultas" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;