import React from 'react';
import GlobalStyle from '../globalStyles.js';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Inicio from '../components/Inicio.jsx'
import Login from '../components/Login.jsx';
//import ScrollToTop from '../components/ScrollToTop'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


const App = () => {
  return (

    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/inicio" component={Inicio} />
        <Route path="/ingresar" component={Login} />
      </Switch>
      <Footer />
    </Router >

  );
};

export default App;
