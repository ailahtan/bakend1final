import './App.css'; import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dentist from './pages/Dentist';
import Patient from './pages/Patient';
import Appointment from './pages/Appointment';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/odontologos">
          <Dentist />
        </Route>
        <Route path="/pacientes">
          <Patient />
        </Route>
        <Route path="/turns">
          <Appointment />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
