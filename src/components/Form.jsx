import { useState } from "react";

export default function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !quantity) return;

    const id = crypto.randomUUID();

    const item = {
      id,
      name: name,
      quantity: quantity,
      purchased: false,
    };

    onAddItem(item);

    setQuantity(1);
    setName("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          onChange={(e) =>
            setQuantity(e.target.value < 1 ? quantity : e.target.value)
          }
        />
      </div>

      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button>Add</button>
    </form>
  );
}
