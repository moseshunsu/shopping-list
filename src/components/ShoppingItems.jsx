import { MdEdit, MdDelete } from "react-icons/md";

export default function ShoppingItems({ items, onSetItems }) {
  return (
    <div className="items">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onSetItems={onSetItems} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onSetItems }) {
  const isItemPurchased = item.purchased;

  return (
    <li className="item">
      <input
        type="checkbox"
        value={isItemPurchased}
        checked={isItemPurchased}
        onChange={() => onSetItems(item.id)}
      />
      <span style={isItemPurchased ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <span className="icons">
        <MdEdit className="edit icon" />
        <MdDelete className="delete icon" />
      </span>
    </li>
  );
}
