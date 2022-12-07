function cababCaseToRegularCase(str: string): string {
	const strArr = str.split('-');
	let resSrt = '';
	strArr.forEach((item) => {
		resSrt += `${item[0].toUpperCase()}${item.slice(1)} `;
	});

	return resSrt.trim();
}

export default cababCaseToRegularCase;
