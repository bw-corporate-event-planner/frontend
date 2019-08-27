import React from 'react'

const ShoppingListItem = ({ listItem, editListItem, editing, listItemToEdit, setListItemToEdit, toggleListItem, deleteListItem }) => {

    const handleChange = e => {
        // console.log(e.target.name)
        setListItemToEdit({ ...listItemToEdit, [e.target.name]: e.target.value })
    }

    const saveEdit = e => {
        e.preventDefault()
        // PUT REQUEST // setListItem
    }

    return (
        <div>
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
                    <div className="item-buttons-container">
                        <span>delete</span>
                        <span>edit</span>
                        <span>toggle</span>
                    </div>
                </form>
            ) : (
                    <div className={`item-container${listItem.completed ? "-completed" : ""}`}>
                        <div className="item-text-container">
                            <p onClick={() => editListItem(listItem, listItem.item_name, "item_name")}>{listItem.item_name}</p>
                        </div>
                        <div className="item-text-container">
                            <p onClick={() => editListItem(listItem, listItem.cost, "cost")}> ${listItem.cost}</p>
                        </div>
                        <div className="item-buttons-container">
                            <span onClick={() => deleteListItem(listItem.id)}>delete</span>
                            <span onClick={() => editListItem(listItem)}>edit</span>
                            <span onClick={() => toggleListItem(listItem.id)}>toggle</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ShoppingListItem
