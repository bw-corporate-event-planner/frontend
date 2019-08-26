import React from 'react'
import ShoppingListItem from './ShoppingListItem'

const ShoppingList = ({shoppingList}) => {

    return (
        <div>
            <h4>Shopping List</h4>
            {shoppingList.map(listItem => <ShoppingListItem listItem={listItem}/>                    
            )}
            
        </div>
    )
}

export default ShoppingList
