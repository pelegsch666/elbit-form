function addDataToLocalStorage(data: any) {
	let dataFromLocalStorage = localStorage.getItem('data') || '[]';
	let parsedData = JSON.parse(dataFromLocalStorage);
	parsedData.push(data);
	const stringifiedData = JSON.stringify(parsedData);
	localStorage.setItem('data', stringifiedData);
}

export default addDataToLocalStorage;
