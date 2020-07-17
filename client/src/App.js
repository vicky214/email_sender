import React from 'react';
import './App.css';
import Form from './components/Form';
import {BrowserRouter,Route} from 'react-router-dom';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


function App() {
  return (
    <div className="container-fluid main">
      <BrowserRouter>
      <ReactNotification />
      <Route path="/" component={Form}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
