import React, { useState, useEffect } from 'react'
import ShoppingListItem from './ShoppingListItem'

const initialListItem = {
    id: "",
    item: "",
    cost: null,
    completed: null
}
const ShoppingList = ({ shoppingList }) => {

    const [editing, setEditing] = useState(false)
    const [listItemToEdit, setListItemToEdit] = useState(initialListItem)

    const editListItem = (item, item_prop, key_name) => {

        // console.log("item clicked", item, item_prop, key_name)
        setEditing(true)
        setListItemToEdit(item)
        console.log(listItemToEdit)
    }

    return (
        <div>
            <h4>Shopping List</h4>
            {shoppingList.map(listItem => <ShoppingListItem key={listItem.id} editing={editing} listItemToEdit={listItemToEdit} editListItem={editListItem} listItem={listItem} />
            )}

        </div>
    )
}

export default ShoppingList
