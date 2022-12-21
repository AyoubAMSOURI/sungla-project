import Evaluation from "./Evaluation";
import '../styles/items.css';
function GlassesItem({id,name,cover,evaluation,uv}){
  function handleClick(e){
    console.log('💦ceci est un clic sur',e)
  }
  return(
    <li key={id} onClick={handleClick} className="sg-glasses-item">
            <img className='sg-glasses-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
            
            <Evaluation evaluationType='likes' evaluationValue={evaluation}/>
            <Evaluation evaluationType='uv' evaluationValue={uv}/>
            </div>
          </li>
  )
}
export default GlassesItem;