import React, { useState, useEffect } from "react";
import ShoppingList from "../components/ShoppingList/ShoppingList";
import { allEvents } from "../../../services/data";
import { getEvent } from "../../../services/api";
import moment from "moment";

// conditional rendering based on localStorage key (set buttons to active/inactive)
// axiosWithAuth GET event info

const Event = props => {
  // Uncomment to use dummy data instead of API endpoints
  // const { eventId } = props.match.params.id;
  // const [event, setEvent] = useState(allEvents[props.match.params.id - 1]); // hard coded to work with dummy array

  // Comment out to use dummy dummy instead API endpoints
  const [event, setEvent] = useState({ items: [] });
  const eventId = props.match.params.id;
  console.log("EVENT ID", eventId);
  useEffect(() => {
    getEvent(eventId)
      .then(res => {
        console.log("GET", res.data);
        setEvent(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const startDate = moment(event.event_start).format("MMMM Do, YYYY");
  const endDate = moment(event.event_end).format("MMMM Do, YYYY");
  const timeTilEvent = moment(event.event_start).fromNow();

  // console.log(timeTilEvent);

  return (
    <div className="event-page-card">
      <h3>{event.event_title}</h3>
      <div className="event-buttons-container">
        <span>Edit event</span>
        <span>Delete event</span>
      </div>
      <p>Description: {event.event_description}</p>
      <p>
        From {startDate} to {endDate}
      </p>
      <p>Budget: ${event.event_budget} </p>
      <ShoppingList
        shoppingList={event.items}
        eventId={eventId}
        budget={event.event_budget}
      />
      {/* <ShoppingList
        shoppingList={event.shopping_list}
        budget={event.event_budget}
      /> */}
    </div>
  );
};

export default Event;
