import { sunGlassesList } from "../data/sunGlassesList";
import '../styles/categories.css';

function categories({selectByCat,updateSelectByCat}) {

    const categories = sunGlassesList.reduce((acc, cur) => {
        if (!acc.includes(cur.category)) {
          acc.push(cur.category);
        }
        return acc;
      }, []);

      
        
     
    
  return (
    <div className='sg-categories'>
    <select name="categories" value={selectByCat} onChange={(e)=>updateSelectByCat(e.target.value)} className='sg-categories-select'>
      				<option value=''>---</option>

      {categories.map((cat) => (
        <option value={cat}  key={cat}>{cat}</option>
      ))}
    </select>
    </div>
  );
}
export default categories;
