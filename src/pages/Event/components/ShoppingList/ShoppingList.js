import React, { useState, useEffect } from 'react'
import ShoppingListItem from './ShoppingListItem'

const initialListItem = {
    id: "",
    item: "",
    cost: null,
    completed: null
}

const ShoppingList = ({ shoppingList }) => {

    const [shoppingListItems, setShoppingListItems] = useState(shoppingList)
    const [editing, setEditing] = useState(false)
    const [listItemToEdit, setListItemToEdit] = useState(initialListItem)

    const editListItem = (item, item_prop, key_name) => {
        // console.log("item clicked", item, item_prop, key_name)
        setEditing(true)
        setListItemToEdit(item)
    }

    const deleteListItem = item => {

    }

    const toggleItem = id => {
        let temp = shoppingListItems.map(item => {
            if (item.id === id) {
                // console.log(item.id, id)
                return { ...item, completed: !item.completed }
            }
            return item
        })
        setShoppingListItems(temp)
        console.log(shoppingListItems)
    }


    return (
        <div className="shopping-list-container">
            <h4>Shopping List</h4>
            <div className="shopping-list-items-container">
                {shoppingListItems.map(listItem => <ShoppingListItem key={listItem.id} editing={editing} listItemToEdit={listItemToEdit} setListItemToEdit={setListItemToEdit} editListItem={editListItem} listItem={listItem} toggleItem={toggleItem} />
                )}
            </div>

        </div>
    )
}

export default ShoppingList
