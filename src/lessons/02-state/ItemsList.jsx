import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([
    { id: 0, name: "Item 1" },
    { id: 1, name: "Item 2" },
    { id: 2, name: "Item 3" },
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: `Item ${items.length + 1}`,
    };

    // creates a new array
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{""}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
