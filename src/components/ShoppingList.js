import { sunGlassesList } from "../data/sunGlassesList";
import '../styles/ShoppingList.css'

function ShoppingList() {

  const categories = sunGlassesList.reduce((acc, cur) => {
    if (!acc.includes(cur.category)) {
      acc.push(cur.category);
    }
    return acc;
  }, []);


  return (
    <div>
      <select name="categories">
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <ul className="sg-glasses-list">
        {sunGlassesList.map((item) => (
          <li key={`${item.id}`} className="sg-glasses-item">
            {item.isSpecialOffer ? (
              <div className="sg-sales">soldes</div>
            ) : null}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
