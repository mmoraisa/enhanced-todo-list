import React, { Fragment } from 'react';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';
import { WHITE } from './defaults/Colors';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${WHITE};
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Home />
  </Fragment>
);

export default App;
