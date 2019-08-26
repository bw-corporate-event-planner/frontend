import React from 'react'

const ShoppingList = ({shoppingList}) => {

    return (
        <div>
            <h4>Shopping List</h4>
            {shoppingList.map(listItem => 
                (
                    <div>
                        <span>{listItem.item}</span>
                        <span> ${listItem.cost}</span>
                    </div>
                )
            )}
            
        </div>
    )
}

export default ShoppingList
