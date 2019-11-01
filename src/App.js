import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Header from './components/Header'

import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
