function Evaluation({ evaluationType, evaluationValue }) {
    const range = [1, 2, 3,4]
	const scaleType =
    evaluationType === 'uv' ? '🔅' : '👍';

	function handleClick(type,value){
		switch(value){
			case 4 :alert(`lunettes avec beaucoup beaucoup de ${type}`);
				break;
			case 3 :alert(`lunettes avec beaucoup de ${type}`);
				break;
			case 2 :alert(`lunettes avev ${type} moyenne`);
				break;
			case 1 :alert(`lunettes avec peu de ${type}`);
				break;
			default: console.log(`Sorry`);
		}
	}

	return (
		<div onClick={()=>handleClick(evaluationType,evaluationValue)}>
			{range.map((rangeElem) =>
				parseInt(evaluationValue) >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
			
		</div>
	)

}
export default Evaluation;
