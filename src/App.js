import React from 'react';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import { createGlobalStyle } from 'styled-components';
import { WHITE } from './defaults/Colors';
import store from './store';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${WHITE};
    font-family: 'Quicksand', sans-serif;
    margin: 0;
    padding: 0;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #00000029;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #121935;
    border-radius: 10px;
    transition: .25s all ease;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #0b0f21;
  }
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Home />
  </Provider>
);

export default App;
