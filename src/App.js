import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Navigation from './components/Navigation';
// import Contact
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route 
            exact path="/about" component={About}
          />
          <Route 
            exact path="/projects" component={Projects}
          />
          {/* <Route 
            exact path="/contact" component={Contact}
          /> */}
          <Route 
            exact path="/resume" component={Resume}
          />
          <Route
            component={About}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
