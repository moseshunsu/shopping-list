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
      <input type="checkbox" />
      <span>
        {item.quantity} {item.name}
      </span>
    </li>
  ));
}
