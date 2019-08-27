import React from 'react'
import { Route } from 'react-router-dom'
import EventsList from './pages/EventsList/scenes/EventsList'
import Register from './pages/Register'
import AddEvent from './pages/AddEvent/AddEvent'
import Event from './pages/Event/scenes/Event'
import FormikLoginForm from './pages/Login/LoginForm';

function App () {
  return (
    <div className='App'>
      <h1>Corporate Event Planner</h1>
      <Route exact path="/" component={EventsList}/>
      <Route path="/login" component={FormikLoginForm}/>
      <Route path="/register" component={Register}/>
      <Route path="/event/:id" component={Event}/>
      <Route path="/addevent" component={AddEvent}/>
    </div>
  )
}

export default App
