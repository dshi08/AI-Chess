import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/pages/Home';
import Calendar from './components/pages/Calendar';
import Projects from './components/pages/Projects';
import Resources from './components/pages/Resources';




function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/projects' exact Component={Projects}/>
          <Route path='/calendar' exact Component={Calendar}/>
          <Route path='/Resources' exact Component={Resources}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
