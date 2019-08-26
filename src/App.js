import React from 'react'
import { Route } from 'react-router-dom'
// import EventsList from './pages/EventsList'
// import Register from './pages/Register'
import AddEvent from './pages/AddEvent/AddEvent'

function App () {
  return (
    <div className='App'>
      <h1>Corporate Event Planner</h1>
      {/* <Route exact path='/' component={EventsList} />
      <Route path='/register' component={Register} />
      <Route path='/event' component={Event} /> */}
      <Route path='/addevent' component={AddEvent} />
    </div>
  )
}

export default App
