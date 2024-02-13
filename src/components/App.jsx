import { useState } from "react";
import ShoppingItems from "./ShoppingItems";

const initialShoppingList = [
  { id: 1, name: "Milk", quantity: 1, purchased: false },
  { id: 2, name: "Bread", quantity: 2, purchased: false },
  { id: 3, name: "Eggs", quantity: 12, purchased: true },
];

export default function App() {
  const [items, setItems] = useState(initialShoppingList);

  function handleSetItems(selectedItemId) {
    setItems(
      items.map((item) =>
        selectedItemId === item.id
          ? { ...item, purchased: !item.purchased }
          : item
      )
    );
  }

  return (
    <div className="App">
      <ShoppingItems items={items} onSetItems={handleSetItems} />
    </div>
  );
}
