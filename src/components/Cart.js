import "../styles/Cart.css";

function Cart() {
  const Clubmaster = 8;
  const Wayfarer = 10;
  const Aviator = 15;

  return (
    <div className="sg-cart">
      <h2>Panier</h2>
      <ul>
        <li>Clubmaster : {Clubmaster}€</li>
        <li>Wayfarer : {Wayfarer}€</li>
        <li>Aviator : {Aviator}€</li>
      </ul>
      Total : {Clubmaster + Wayfarer + Aviator}€
    </div>
  );
}

export default Cart;
