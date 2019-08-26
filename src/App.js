import React from 'react';
import {Route} from 'react-router-dom'
import EventsList from './pages/EventsList/scenes/EventsList'
import Register from './pages/Register'

import Event from './pages/Event/scenes/Event'

function App() {
  return (
    <div className="App">
      <h1>Corporate Event Planner</h1>
      <Route exact path="/" component={EventsList}/>
      <Route path="/register" component={Register}/>
      <Route path="/event/:id" component={Event}/>
      {/* <Route path="/addevent" component={AddEvent}/> */}

    </div>
  );
}

export default App;
