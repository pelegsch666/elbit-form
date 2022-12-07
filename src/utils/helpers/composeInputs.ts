function composeInputs(
	date: string,
	boardPn: string,
	boardSn: string,
	techName: string,
	boardDataBaseName: string,
	causeFailure: string,
	solution: string,
	dataUrl: string
) {
	return {
		date,
		boardPn,
		boardSn,
		techName,
		boardDataBaseName,
		causeFailure,
		solution,
		dataUrl,
	};
}

export default composeInputs;
