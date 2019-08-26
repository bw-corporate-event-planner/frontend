import React, { useState } from 'react'

const AddEvent = () => {
  const [event, setEvent] = useState({
    id: 0,
    title: '',
    description: '',
    location: '',
    start_date: '',
    end_date: '',
    total_budget: ''
  })

  const handleChange = e => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    })
  }

  console.log(event)

  const handleSubmit = e => {
    e.preventDefault()
  }

  const {
    id,
    title,
    description,
    location,
    start_date,
    end_date,
    total_budget
  } = event

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add Event</h2>

        <input
          name='title'
          value={title}
          onChange={handleChange}
          type='text'
          placeholder='Event Title'
        />
        <input
          name='description'
          value={description}
          onChange={handleChange}
          type='text'
          placeholder='Event Description'
        />
        <input
          name='location'
          value={location}
          onChange={handleChange}
          type='text'
          placeholder='Event Location'
        />
        <input
          name='start_date'
          value={start_date}
          onChange={handleChange}
          type='date'
          placeholder='Event Start Date'
        />
        <input
          name='end_date'
          value={end_date}
          onChange={handleChange}
          type='date'
          placeholder='Event End Date'
        />
        <input
          name='total_budget'
          value={total_budget}
          onChange={handleChange}
          type='text'
          placeholder='Total Budget'
        />
        <button>Submit Event</button>
      </form>
    </>
  )
}
export default AddEvent
