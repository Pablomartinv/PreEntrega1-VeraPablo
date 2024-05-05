import carrito from '../assets/carrito.png';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  const { cartList } = useContext(CartContext);
  const total = cartList.reduce((acc, i) => acc + i.quantity, 0);
  return (
    <>
      {!!cartList.length && (
        <Link to="/cart">
          <div id="carrito">
            <img src={carrito} alt="carrito de compras" />
            <span>{total}</span>
          </div>
        </Link>
      )}
    </>
  );
};
