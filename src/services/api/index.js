import axios from "axios";

const apiUrl = "http://localhost:5000/api";

// SINGLE EVENT
// getEvent
export function getEvent(id) {
  return axios.get(`${apiUrl}/event/${id}`);
}

// addEvent
export function addEvent(event) {
  return axios.post(`${apiUrl}/event/${event}`);
}

// deleteEvent
export function deleteEvent(id) {
  return axios.delete(`${apiUrl}/event/${id}`);
}

// editEvent
export function editEvent(id, event) {
  return axios.post(`${apiUrl}/event/${id}`, event);
}

// EVENTS LIST

// export function getEvent() {
//   return axios.get(`${apiUrl}/event`);
//
// return new Promise((res, rej) => {
//     res({
//         id: 1,
//         name: "Holiday Party",
//         event_start: "2019-12-20T07:07:07.357Z",
//         event_end: "2019-12-21T07:07:07.357Z",
//         total_budget: 3000,
//         description: "Sit on Santa's lap.",
//         location: {
//             street: "180 street St.",
//             city: "San Francisco",
//             state: "CA",
//             zip_code: "94115",
//             country: "US"
//         },
//         shopping_list: [{
//             id: 10,
//             item_name: "food",
//             cost: 200,
//             completed: false
//         },
//         {
//             id: 20,
//             item_name: "hotel rent",
//             cost: 2000,
//             completed: false
//         }
//         ]
//     })
// })
// }
