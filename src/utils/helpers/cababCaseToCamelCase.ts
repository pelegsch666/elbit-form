import { InputId } from 'utils/types';

function cababCaseToCamelCase(str: InputId): string {
	const strArr: string[] = str.split('-');
	let camelCaseStr: string = strArr[0].toLocaleLowerCase();

	if (strArr.length === 1) {
		return camelCaseStr;
	}

	for (let i = 1; i < strArr.length; i++) {
		camelCaseStr += strArr[i][0].toUpperCase() + strArr[i].slice(1);
	}

	return camelCaseStr;
}

export default cababCaseToCamelCase;
