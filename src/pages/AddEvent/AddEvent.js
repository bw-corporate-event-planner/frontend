import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

let date = new Date()
date.setDate(date.getDate() + 1)
const minDateValue = date.toISOString()

const AddEvent = () => {
  const [event, setEvent] = useState({
    id: 0,
    title: '',
    description: '',
    location: '',
    start_date: new Date(),
    end_date: null,
    total_budget: ''
  })

  const handleChange = e => {
    setEvent({
      ...event,
      [e.target.name]: e.target.value
    })
  }

  console.log(event)

  const handleChangeStartDate = date => {
    console.log('datePicker', date)
    setEvent({ ...event, start_date: date })
  }

  const handleChangeEndDate = date => {
    console.log('datePicker', date)
    setEvent({ ...event, end_date: date })
  }

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
        <DatePicker
          selected={start_date}
          onChange={handleChangeStartDate}
          minDate={minDateValue}
        />
        <DatePicker
          selected={end_date}
          onChange={handleChangeEndDate}
          minDate={minDateValue}
        />
        <input
          name='total_budget'
          value={total_budget}
          onChange={handleChange}
          type='number'
        />
        <button>Submit Event</button>
      </form>
    </>
  )
}
export default AddEvent
