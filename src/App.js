import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Backtracking from './pages/Backtracking';
import PrimKruskal from './pages/PrimKruskal';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/backtracking" component={Backtracking} />
        <Route path="/prim-kruskal" component={PrimKruskal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
