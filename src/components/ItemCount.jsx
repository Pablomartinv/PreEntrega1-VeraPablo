import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const agregarProducto = () => {
    if (quantity <= stock) {
      setQuantity(quantity + 1);
    }
  };

  const quitarProducto = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div>
        <button type="button" onClick={quitarProducto}>
          -
        </button>
        <span> {quantity} </span>
        <button type="button" onClick={agregarProducto}>
          +
        </button>
      </div>

      <button type="button" onClick={() => onAdd(quantity)} disabled={!stock}>
        Agregar al carrito
      </button>
    </>
  );
};
