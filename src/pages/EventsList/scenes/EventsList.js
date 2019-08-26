import React, {useState} from 'react'
import Event from  '../../Event/scenes/Event'
import {Link} from 'react-router-dom'
import {allEvents} from '../../../services/data'

const EventsList = (props) => {
    // console.log(allEvents)
    const [eventsList, setEventsList] = useState(allEvents)
    console.log(eventsList)
    return (
        <div>
            <h2>Upcoming events</h2>
            {eventsList.map(event => (
                <div>
                    <h3>{event.name}</h3>
                    <p>Budget: ${event.total_budget}</p>
                    <p>From <span>{event.event_start}</span> to <span>{event.event_end}</span></p>
                    <p>{event.location.street}</p>
                    <Link to={`/events/${event.id}`}>
                        View Event
                    </Link>
                </div>
                )
            )}
        </div>
    )
}

export default EventsList
