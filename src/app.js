import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './pages/About/about';
import Portfolio from './pages/Portfolio/portfolio';
import Services from './pages/Services/services';
import Contact from './pages/Contact/contact';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;

