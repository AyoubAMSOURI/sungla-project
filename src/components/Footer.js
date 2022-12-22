import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleBlur() {
	if (!inputValue.includes('@')) {
		alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
	}
}
  function handleInput(e) {
	setInputValue(e.target.value)
}

  return (
    <footer className="sg-footer">
      <div className="sg-footer-elem">
        Pour les passionné·e·s des lunettes 😎😎😎
      </div>
      <div className="sg-footer-elem">
        Laissez-nous votre mail :{" "}
        <input
          type="text"
          value={inputValue}
		  onChange={handleInput}
          onBlur={handleBlur}
        />
      </div>
    </footer>
  );
}

export default Footer;
