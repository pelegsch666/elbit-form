import { getDataFromLocalStorage } from 'utils/helpers';

import { FormatedLocalStorageData, LocalStorageData } from 'utils/types';

function getFormatedData() {
	const rawData: LocalStorageData[] = getDataFromLocalStorage();

	if (!rawData) {
		return [];
	}

	const formatedData: FormatedLocalStorageData[] = rawData.map(
		(data: LocalStorageData) => {
			return {
				...data,
			};
		}
	);

	return formatedData;
}

export default getFormatedData;
