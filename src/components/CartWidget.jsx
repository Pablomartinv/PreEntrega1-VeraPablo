import carrito from "../assets/carrito.jpg" 

export const CartWidget = () => {
    return(
        <div id="carrito">
        <img src={carrito} alt="carrito de compras"/>
        <span>4</span>
        </div>
        );    
};