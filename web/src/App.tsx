import { useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { Router } from './Router';

Modal.setAppElement('#root');

function App() {

  return (
    <BrowserRouter basename='/'>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  );
}

export default App;