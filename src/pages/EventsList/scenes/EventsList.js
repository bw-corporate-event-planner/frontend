import React, { useState, useEffect } from "react";
import Event from "../../Event/scenes/Event";
import { Link } from "react-router-dom";
import { allEvents } from "../../../services/data";

const EventsList = props => {
  // console.log(allEvents)
  const [eventsList, setEventsList] = useState(allEvents);
  const [searchText, setSearchText] = useState("");
  // filtered event list var

  const handleSearch = e => {
    setSearchText(e.target.value); // on next rerender
    console.log(searchText);
  };

  // useEffect(() => {
  //     console.log(searchText)
  //     let searchMatches = eventsList.filter(event => event.name.toLowerCase().includes(searchText.toLowerCase()))
  //     // fuzzy matching with JS library (fuseJS)
  //     setEventsList(searchMatches)
  // }, [searchText])

  return (
    <div>
      <h2>Upcoming events</h2>
      <form>
        <label>
          <input
            value={searchText}
            placeholder="Search by event name"
            onChange={handleSearch}
          />
        </label>
      </form>
      <div className="events-container">
        {eventsList
          .filter(event =>
            event.event_title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map(event => (
            <div className="event-card">
              <h3>{event.event_title}</h3>
              <p>Budget: ${event.event_budget}</p>
              <p>
                From <span>{event.event_start}</span> to{" "}
                <span>{event.event_end}</span>
              </p>
              <p>{event.event_location}</p>
              <Link to={`/event/${event.id}`}>View Event</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventsList;
