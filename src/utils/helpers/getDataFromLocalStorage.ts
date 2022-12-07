function getDataFromLocalStorage() {
	const data = localStorage.getItem('data');
	if (data) {
		const parsedData = JSON.parse(data);
		return parsedData;
	}
	return null;
}

export default getDataFromLocalStorage;
