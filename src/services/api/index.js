import axios from "axios"

const apiUrl = "http://localhost:5000/api"

export function getEvent() {
    return axios.get(`${apiUrl}/event`)
}

// addEvent

// deleteEvent

// editEvent