function Evaluation({ evaluationType, evaluationValue }) {
    const range = [1, 2, 3,4]
	const scaleType =
    evaluationType === 'uv' ? '🔅' : '👍';

	return (
		<div>
			{range.map((rangeElem) =>
				parseInt(evaluationValue) >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
			
		</div>
	)

}
export default Evaluation;
