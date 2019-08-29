import React, { useState, useEffect } from "react";
import ShoppingListForm from "./ShoppingListForm";
import ShoppingListItem from "./ShoppingListItem";
import Expenditures from "../Expenditures/Expenditures";
import axios from "axios";

const initialListItem = {
  id: -1,
  event_id: "",
  item_name: "",
  item_cost: 0,
  item_complete: false
  // item_vendor: ""
};

const ShoppingList = ({ shoppingList, budget }) => {
  const [shoppingListItems, setShoppingListItems] = useState(shoppingList);
  const [listItemToEdit, setListItemToEdit] = useState(initialListItem);
  const [totalCost, setTotalCost] = useState(0);
  const [purchasedItemsCost, setPurchasedItemsCost] = useState(0);

  console.log(shoppingListItems);

  //GET LIST ITEM
  // useEffect(() => {
  //   axios
  //     .get("https://egge-corporate-ep.herokuapp.com/api/lists/4")
  //     .then(res => console.log("LIST", res.data))
  //     .catch(err => console.log(err));
  // }, [shoppingListItems]);

  useEffect(() => {
    setShoppingListItems(shoppingList);
  }, [shoppingList]);

  // ALL ITEMS COST
  useEffect(() => {
    let temp = shoppingListItems.reduce(
      (acc, item) => acc + Number(item.item_cost),
      0
    );
    setTotalCost(temp);
    // console.log(totalCost);
  }, [shoppingListItems]);

  // PURCHASED ITEMS COST
  useEffect(() => {
    let temp = shoppingListItems
      .filter(item => item.item_complete)
      .reduce((acc, item) => acc + Number(item.item_cost), 0);
    setPurchasedItemsCost(temp);
    console.log(totalCost);
  }, [shoppingListItems]);

  const editListItem = item => {
    console.log("item clicked", item);
    setListItemToEdit(item);
  };

  // DELETE
  const deleteListItem = id => {
    let temp = shoppingListItems.filter(item => item.id !== id);
    setShoppingListItems(temp);
  };

  // PUT
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

  // POST
  const addListItem = item => {
    let temp = [...shoppingListItems, item];
    console.log(temp);
    setShoppingListItems(temp);
  };

  if (!shoppingListItems) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shopping-list-container">
      <h4>Budget Items</h4>
      <Expenditures
        totalCost={totalCost}
        purchasedItemsCost={purchasedItemsCost}
        budget={budget}
      />
      <ShoppingListForm
        addListItem={addListItem}
        initialListItem={initialListItem}
      />
      <div className="shopping-list-items-container">
        {shoppingListItems.map(listItem => (
          <ShoppingListItem
            key={listItem.id}
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
