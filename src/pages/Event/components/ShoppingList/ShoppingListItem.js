import React from 'react'

const ShoppingListItem = ({listItem}) => {

    console.log("HERE",listItem)

    return (
        <div className={`item-container${listItem.completed ? "-completed" : ""}`}>
            <span>{listItem.item}</span>
            <span> ${listItem.cost}</span>
        </div>
    )
}

export default ShoppingListItem
