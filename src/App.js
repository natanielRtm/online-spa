import React, {Component} from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, } from 'react-router-dom';

//Pages
import Home from './components/Pages/home';
import About from './components/Pages/About';
import Experience from './components/Pages/experience';
import Education from './components/Pages/education';
import Skills from './components/Pages/Skills';
import Interests from './components/Pages/Interests';
import Awards from './components/Pages/Awards';


class App extends Component {
  render(){
    return (
       <div>         
          <Router>
            <PageWrapper>      
              <Route 
                path="/" exact
                component={Home}
              />
              <Route 
                path="/about" exact
                component={About}
              />
              <Route 
                path="/experience" exact
                component={Experience}
              />
              <Route 
                path="/education" exact
                component={Education}
              />
              <Route 
                path="/skills" exact
                component={Skills}
              />
              <Route 
                path="/interests" exact
                component={Interests}
              />
              <Route 
                path="/Awards" exact
                component={Awards}
              />
              </PageWrapper>
          </Router>
         </div>
     
    );

  }
  
}

export default App;