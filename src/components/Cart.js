import { useState } from "react";
import "../styles/Cart.css";
import { useEffect } from "react";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce((acc, cur) => acc + cur.amount * cur.price, 0);

  useEffect(() => {
    document.title = `SG: ${total}€ d'achats`
}, [total]);

  return isOpen ? (
    <div className="sg-cart">
      <button
        className="sg-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      <h2>Panier</h2>
      {cart.map((item, index) => (
        <div>
        <div key={`${item.name}-${index}`}>
          {item.name} {item.price}€ * {item.amount}
        </div><br /></div>
      ))}
      <div>Total : {total}€</div>
      <br />
      <button onClick={() => updateCart([])}>vider le panier</button>
    </div>
  ) : (
    <div className="sg-cart-closed">
      <button className="sg-cart-toggle-button" onClick={() => setIsOpen(true)}>
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
