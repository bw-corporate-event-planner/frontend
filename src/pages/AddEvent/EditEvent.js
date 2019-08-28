import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddEvent.scss';

const EditEvent = props => {
  const {
    event_title,
    event_description,
    event_location,
    event_start,
    event_end,
    event_budget,
  } = props.event;

  const [editToggle, setEditToggle] = useState(false);

  const [input, setInput] = useState({
    event_title: '',
    event_description: '',
    event_location: '',
    event_start: '',
    event_end: '',
    event_budget: '',
  });

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleToggle = () => setEditToggle(!editToggle);

  const handleDelete = () => {
    //   axios.delete(http:${id})
    // .then(res => props.setEvents(res.data))
    //     .catch(err => console.log(err))
  };

  const handleEdit = e => {
    // e.preventDefault();
    // axios.put(http: ${ id }, input)
    //   .then(res => props.setEvents(res.data))
    //   .catch(err => console.log(err))
    setEditToggle(false);
  };
  return (
    <div className='formStyles'>
      {editToggle ? (
        <div>
          <form onSubmit={handleEdit}>
            <h2>Edit Event</h2>

            <input
              name='event_title'
              value={input.event_title}
              onChange={handleChange}
              type='text'
              placeholder='Event Title'
            />
            <input
              name='description'
              value={input.event_description}
              onChange={handleChange}
              type='text'
              placeholder='Event Description'
            />
            <input
              name='location'
              value={input.event_location}
              onChange={handleChange}
              type='text'
              placeholder='Event Location'
            />
            <label>Start date</label>
            <input
              name='start_date'
              value={input.event_start}
              onChange={handleChange}
              type='date'
            />

            <input
              name='end_date'
              value={input.event_end}
              onChange={handleChange}
              type='date'
            />

            <label>
              $
              <input
                name='event_budget'
                value={input.event_budget}
                onChange={handleChange}
                type='number'
                placeholder='Event Budget'
              />
            </label>
            <button>Update Event</button>
          </form>
          <button onClick={handleToggle}>Back</button>
        </div>
      ) : (
        <div>
          <h2>Title: {event_title}</h2>
          <h3>Description: {event_description}</h3>
          <h3>Location: {event_location}</h3>
          <h3>Start Date: {event_start}</h3>
          <h3>End Date: {event_end}</h3>
          <h3>Total Budget: {event_budget}</h3>
          <div></div>
          <button onClick={handleDelete}>delete</button>
          <button onClick={handleToggle}>edit</button>
        </div>
      )}
    </div>
  );
};

export default EditEvent;
