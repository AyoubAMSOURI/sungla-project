import { sunGlassesList } from "../data/sunGlassesList";
import '../styles/ShoppingList.css';

import GlassesItem from "./GlassesItem";

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
          <GlassesItem key={item.id} id={item.id} name={item.name} cover={item.cover} evaluation={item.evaluation} uv={item.uv}/>  
        )
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
