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
import V2Contact from './v2/pages/Contact'
import Enroll from "./v2/pages/Enrollment";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/pmcourse">
            <V2Home />
        </Route>
        <Route exact path="/pmcourse/contact">
            <V2Contact />
        </Route>
        <Route exact path="/pmcourse/enrol">
            <Enroll />
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
