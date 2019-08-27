import React, { useState } from 'react';

const ShoppingListForm = ({addListItem, initialListItem}) => {

    const [input, setInput] = useState(initialListItem);

    console.log(input)

    const handleChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        // console.log("target", value)

        setInput({
            ...input,
            // [e.target.name]: e.target.value,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // post request to shoppingListItems
        addListItem(input)
        setInput(initialListItem);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name='item_name'
                    value={input.item_name}
                    onChange={handleChange}
                    type='text'
                    placeholder='item name'
                />
                <input
                    name='item_cost'
                    value={input.item_cost}
                    onChange={handleChange}
                    type='number'
                    placeholder='item cost'
                />
                <label>
                    <input
                        name='item_complete'
                        onChange={handleChange}
                        type='checkbox'
                        checked={input.item_complete}
                    />
                    bought?
                </label>
                <div className="item-buttons-container">
                    <button type="submit">add to list</button>
                </div>
            </form>
        </>
    );
};
export default ShoppingListForm;
