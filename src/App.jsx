import { useState } from "react";

const initialShoppingList = [
  { id: 1, name: "Milk", quantity: 1, purchased: false },
  { id: 2, name: "Bread", quantity: 2, purchased: false },
  { id: 3, name: "Eggs", quantity: 12, purchased: true },
];

export default function App() {
  return (
    <div className="App">
      <ShoppingItems />
    </div>
  );
}

function ShoppingItems() {
  const [items, setItems] = useState(initialShoppingList);

  return (
    <div className="items">
      <ul>
        <Item items={items} />
      </ul>
    </div>
  );
}

function Item({ items }) {
  return items.map((item) => (
    <li key={item.id} className="item">
      <input type="checkbox" />
      <span>
        {item.quantity} {item.name}
      </span>
    </li>
  ));
}
