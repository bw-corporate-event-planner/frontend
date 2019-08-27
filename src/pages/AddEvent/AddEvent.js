import React, { useState } from 'react';
import './AddEvent.scss';

// import DatePicker from 'react-datepicker';

// let date = new Date();
// date.setDate(date.getDate() + 1);
// const minDateValue = date.toISOString();

const AddEvent = props => {
  console.log(props);
  // const [event, setEvent] = useState([]);

  const [input, setInput] = useState({
    title: '',
    description: '',
    location: '',
    start_date: '',
    end_date: '',
    total_budget: '',
  });

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  console.log(input);

  // const handleChangeStartDate = date => {
  //   console.log('datePicker', date);
  //   setEvent({ ...input, start_date: date });
  // };

  // const handleChangeEndDate = date => {
  //   console.log('datePicker', date);
  //   setEvent({ ...input, end_date: date });
  // };

  const handleSubmit = e => {
    e.preventDefault();

    props.history.push('/event/1');

    console.log('the input', input);
    setInput({
      title: '',
      description: '',
      location: '',
      start_date: '',
      end_date: '',
      total_budget: '',
    });
  };

  console.log(input);

  return (
    <div className='formStyles'>
      <form onSubmit={handleSubmit}>
        <h2>Add Event</h2>

        <input
          name='title'
          value={input.title}
          onChange={handleChange}
          type='text'
          placeholder='Event Title'
        />
        <input
          name='description'
          value={input.description}
          onChange={handleChange}
          type='text'
          placeholder='Event Description'
        />
        <input
          name='location'
          value={input.location}
          onChange={handleChange}
          type='text'
          placeholder='Event Location'
        />
        <label>Start date</label>
        <input
          name='start_date'
          value={input.start_date}
          onChange={handleChange}
          type='date'
        />
        <label>End Date</label>
        <input
          name='end_date'
          value={input.end_date}
          onChange={handleChange}
          type='date'
        />

        {/* <DatePicker
          selected={input.start_date}
          onChange={handleChangeStartDate}
          minDate={minDateValue}
        />
        <div>
          <DatePicker
            selected={input.end_date}
            onChange={handleChangeEndDate}
            minDate={minDateValue}
          />
        </div> */}

        <input
          name='total_budget'
          value={input.total_budget}
          onChange={handleChange}
          type='text'
          placeholder='Total Budget'
        />
        <button>Submit Event</button>
      </form>
    </div>
  );
};
export default AddEvent;
