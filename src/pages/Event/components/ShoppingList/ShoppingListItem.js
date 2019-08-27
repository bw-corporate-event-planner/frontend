import React from 'react'

const ShoppingListItem = ({ listItem, editListItem, editing, listItemToEdit }) => {

    console.log("LIST ITEM TO EDIT", listItemToEdit)

    return (
        <>
            {/* Conditional rendering of form or item based on editing boolean */}
            {editing ? (
                <form>
                    <label>
                        <input
                            value={listItemToEdit.item_name}
                        />
                    </label>
                    <label>
                        <input
                            value={listItemToEdit.cost}
                        />
                    </label>
                </form>
            ) : (
                    <div className={`item-container${listItem.completed ? "-completed" : ""}`}>
                        <span onClick={() => editListItem(listItem, listItem.item_name, "item_name")}>{listItem.item_name}</span>
                        <span onClick={() => editListItem(listItem, listItem.cost, "cost")}> ${listItem.cost}</span>
                    </div>
                )
            }
        </>
    )
}

export default ShoppingListItem
