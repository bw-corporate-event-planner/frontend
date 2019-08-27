import React from 'react'

const ShoppingListItem = ({ listItem, editListItem, editing, listItemToEdit, setListItemToEdit }) => {

    console.log("LIST ITEM TO EDIT", listItemToEdit)

    // Why isn't this working?
    const handleChange = e => {
        console.log(e.target.name)
        setListItemToEdit({ ...listItemToEdit, [e.target.name]: e.target.value })
    }

    const saveEdit = e => {
        e.preventDefault()
        // PUT REQUEST // setListItem
    }

    return (
        <>
            {/* Conditional rendering of form or item based on editing boolean */}
            {/* {editing ? ( */}
            {listItemToEdit.id === listItem.id ? (
                <form onSubmit={saveEdit}>
                    <label>
                        <input
                            type="text"
                            name="item_name"
                            value={listItemToEdit.item_name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <input
                            type="number"
                            name="cost"
                            value={listItemToEdit.cost}
                            onChange={handleChange}
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
