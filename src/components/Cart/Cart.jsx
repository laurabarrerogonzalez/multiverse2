import React, { useState, useEffect } from 'react';
import '../Cart/Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const [productQuantities, setProductQuantities] = useState(
    cart.reduce((quantities, _) => {
      quantities.push(1); // Inicializa todas las cantidades en 1 por defecto
      return quantities;
    }, [])
  );

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calcula la suma total de los precios teniendo en cuenta la cantidad de cada producto
    const total = cart.reduce((sum, item, index) => {
      return sum + item.price * productQuantities[index];
    }, 0);
    setTotalPrice(total);
  }, [cart, productQuantities]);

  const removeItemFromCart = (index) => {
    removeFromCart(index);
  };

  const incrementQuantity = (index) => {
    const newQuantities = [...productQuantities];
    newQuantities[index]++;
    setProductQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...productQuantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setProductQuantities(newQuantities);
    }
  };

  return (
    <div className='cart-container' >
      <table className="table">
      <thead>
  <tr>
    <th className="custom-cell">Product</th>
    <th className="custom-cell">Name</th>
    <th className="custom-cell">Description</th>
    <th className="custom-cell">Price</th>
    <th className="custom-cell">Quantity</th>
    <th className="custom-cell">Remove</th>
  </tr>
</thead>

        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image} alt={item.name} width="50" height="50" />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}€</td>
              <td>
                <button
                  className="btn btn-sm"
                  onClick={() => decrementQuantity(index)}
                >
                  -
                </button>
                {productQuantities[index]}
                <button
                  className="btn btn-sm"
                  onClick={() => incrementQuantity(index)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItemFromCart(index)}
                >
                  🗑️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: 'center' }}>
        <p style={{ backgroundColor: 'blue', padding: '10px', color: 'white', textAlign: 'center' }}>
        Total Price: {totalPrice}€
      </p>
      <button className="btn btn-success mt-5 " onClick={() => { /* Agrega la función de pago aquí si es necesario */ }}>
      Pay Now
    </button>
      </div>
      
    </div>
  );
};

export default Cart;
