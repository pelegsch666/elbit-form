import { InputId } from 'utils/types';

function stringToCamelCase(str: InputId): InputId {
	const strArr: string[] = str.split('-');

	let camelCaseStr: string = strArr[0];

	for (let i = 1; i < strArr.length; i++) {
		camelCaseStr += strArr[i][0].toUpperCase() + strArr[i].slice(1);
	}

	return camelCaseStr as InputId;
}

export default stringToCamelCase;
