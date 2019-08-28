import React, { useState, useEffect } from "react";
import ShoppingListForm from "./ShoppingListForm";
import ShoppingListItem from "./ShoppingListItem";
import Expenditures from "../Expenditures/Expenditures";
// import { Progress } from "antd";

const initialListItem = {
  id: null,
  event_id: "",
  item_name: "",
  item_cost: 0,
  item_complete: false
  // item_vendor: ""
};

const ShoppingList = ({ shoppingList, budget }) => {
  const [shoppingListItems, setShoppingListItems] = useState(shoppingList);
  const [editing, setEditing] = useState(false);
  const [listItemToEdit, setListItemToEdit] = useState(initialListItem);
  const [totalCost, setTotalCost] = useState(null);

  useEffect(() => {
    let unboughtItemsCost = shoppingListItems
      .filter(item => !item.item_complete)
      .reduce((acc, item) => acc + Number(item.item_cost), 0);
    setTotalCost(unboughtItemsCost);
    console.log(totalCost);
  }, [shoppingListItems.length]);

  const editListItem = item => {
    // console.log("item clicked", item, item_prop, key_name)
    setEditing(true);
    setListItemToEdit(item);
  };

  const deleteListItem = id => {
    let temp = shoppingListItems.filter(item => item.id !== id);
    setShoppingListItems(temp);
  };

  const toggleListItem = id => {
    let temp = shoppingListItems.map(item => {
      if (item.id === id) {
        // console.log(item.id, id)
        return { ...item, item_complete: !item.item_complete };
      }
      return item;
    });
    setShoppingListItems(temp);
  };

  const addListItem = item => {
    let temp = [...shoppingListItems, item];
    console.log(temp);
    setShoppingListItems(temp);
  };

  return (
    <div className="shopping-list-container">
      <h4>Shopping List</h4>
      <Expenditures totalCost={totalCost} budget={budget} />
      <ShoppingListForm
        addListItem={addListItem}
        initialListItem={initialListItem}
      />
      <div className="shopping-list-items-container">
        {shoppingListItems.map(listItem => (
          <ShoppingListItem
            key={listItem.id}
            editing={editing}
            listItemToEdit={listItemToEdit}
            setListItemToEdit={setListItemToEdit}
            editListItem={editListItem}
            listItem={listItem}
            toggleListItem={toggleListItem}
            deleteListItem={deleteListItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
