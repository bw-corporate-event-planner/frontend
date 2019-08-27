export const allEvents = [
    {
        id: 1,
        name: "Holiday Party",
        event_start: "2019-12-20T07:07:07.357Z",
        event_end: "2019-12-21T07:07:07.357Z",
        total_budget: 3000,
        description: "Sit on Santa's lap.",
        location: {
            street: "180 street St.",
            city: "San Francisco",
            state: "CA",
            zip_code: "94115",
            country: "US"
        },
        shopping_list: [{
            id: 10,
            item_name: "food",
            cost: 200,
            completed: false
        },
        {
            id: 20,
            item_name: "hotel rent",
            cost: 2000,
            completed: false
        }
        ]
    },
    {
        id: 2,
        name: "Welcome Interns Party",
        event_start: "December 20, 2019",
        event_end: "December 21, 2019",
        total_budget: 1200,
        description: "Party to welcome interns",
        location: {
            street: "200 street St.",
            city: "Cleveland",
            state: "OH",
            zip_code: "44139",
            country: "US"
        },
        shopping_list: [{
            id: 30,
            item_name: "alcohol",
            cost: 600,
            completed: false
        }]
    }
]