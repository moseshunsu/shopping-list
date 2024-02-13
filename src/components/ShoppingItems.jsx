import { MdEdit, MdDelete } from "react-icons/md";

export default function ShoppingItems({ items }) {
  return (
    <div className="items">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  const isItemPurchased = item.purchased;

  return (
    <li className="item">
      <input
        type="checkbox"
        value={isItemPurchased}
        checked={isItemPurchased}
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
  // ));
}
