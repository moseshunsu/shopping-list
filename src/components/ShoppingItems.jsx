import { MdEdit, MdDelete } from "react-icons/md";

export default function ShoppingItems({ items }) {
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
      <input type="checkbox" value={item.purchased} checked={item.purchased} />
      <span style={item.purchased ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <span className="icons">
        <MdEdit className="edit icon" />
        <MdDelete className="delete icon" />
      </span>
    </li>
  ));
}
