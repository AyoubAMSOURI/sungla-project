import { useState } from "react";
import { sunGlassesList } from "../data/sunGlassesList";
import '../styles/ShoppingList.css';
import Categories from "./Categories";
import GlassesItem from "./GlassesItem";

function ShoppingList({cart,updateCart}) {

  const [selectByCat,updateSelectByCat] = useState('');
  
  function addToCart(name,price){
    const currentGlassesAdded = cart.find((glasses)=>glasses.name === name);
    if(currentGlassesAdded){
      const filterCurrentGlasses = cart.filter((glasses)=>glasses.name !== name);
      updateCart([...filterCurrentGlasses,{name,price,amount: currentGlassesAdded.amount+1}]);
    }else{
      updateCart([...cart,{name,price,amount:1}]);
    }
  }


  return (
    <div className="sg-shopping-list">
      <Categories selectByCat={selectByCat} updateSelectByCat={updateSelectByCat}/>
      <ul className="sg-glasses-list">
        {sunGlassesList.map((item) => 
          !selectByCat || item.category === selectByCat ?
          <div key={item.id}>
          <GlassesItem  id={item.id} name={item.name} cover={item.cover} evaluation={item.evaluation} uv={item.uv}/>  
          <button onClick={()=>addToCart(item.name,item.price)}>ajouter</button>
          </div>: null
        
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
