import React, { useState, useEffect } from 'react'
import ShoppingList from '../components/ShoppingList/ShoppingList'
import { allEvents } from '../../../services/data'

const Event = (props) => {
    const { eventId } = props.match.params.id
    const [event, setEvent] = useState(allEvents[props.match.params.id - 1])

    // conditional rendering based on localStorage key (set buttons to active/inactive)
    // axiosWithAuth GET event info

    console.log(event)

    return (
        <div>
            <h3>{event.name}</h3>
            <p>Description: {event.event_description}</p>
            <p>From {event.event_start} to {event.event_end}</p>
            <p>Budget: ${event.event_budget} </p>
            <ShoppingList shoppingList={event.shopping_list} />
            <div className="event-buttons-container">
                <span>Edit event</span>
                <span>Delete event</span>
            </div>
        </div>
    )
}

export default Event
