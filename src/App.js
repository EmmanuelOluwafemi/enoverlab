import React, { useEffect } from 'react'

import AOS from 'aos';

import "./assets/fonts/stylesheet.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from './pages/Pricing';
import V2Home from './v2/pages/Home';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/v2">
            <V2Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
