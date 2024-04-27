import carrito from '../assets/carrito.jpg';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
  return (
    <div id="carrito">
      <img src={carrito} alt="carrito de compras" />
      <span>4</span>
    </div>
  );
};
