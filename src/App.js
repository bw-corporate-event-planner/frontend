import React from 'react';
import { Route } from 'react-router-dom';
import RegisterForm from './pages/Register/index';
import EventsList from './pages/EventsList/scenes/EventsList';
import AddEvent from './pages/AddEvent/AddEvent';
import Event from './pages/Event/scenes/Event';
import LoginForm from './pages/Login/LoginForm';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <HeaderNav />
      <Route exact path='/' component={EventsList} />
      <Route path='/login' component={LoginForm} />
      <Route path='/register' component={RegisterForm} />
      <Route path='/event/:id' component={Event} />
      <Route path='/addevent' component={AddEvent} />
      <Route path='/footer' component={Footer} />
    </div>
  );
}

export default App;
