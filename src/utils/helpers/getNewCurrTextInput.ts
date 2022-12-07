import { LocalStorageData } from 'utils/types';

function getNewCurrTextInput(
	data: LocalStorageData,
	e: React.ChangeEvent<HTMLInputElement>
) {
	let newData = {
		...data,
	};

	const value = e.target.value;
	const id = e.target.id;

	switch (id) {
		case 'date': {
			newData.date = value;
			return newData;
		}
		case 'board-pn': {
			newData.boardPn = value;
			return newData;
		}
		case 'board-sn': {
			newData.boardSn = value;
			return newData;
		}
		case 'tech-name': {
			newData.techName = value;
			return newData;
		}
		case 'board-data-base-name': {
			newData.boardDataBaseName = value;
			return newData;
		}
		case 'cause-failure': {
			newData.causeFailure = value;
			return newData;
		}
		case 'solution': {
			newData.solution = value;

			return newData;
		}
		// case 'data-url': {
		// 	const file = e.target.files?.[0];
		// 	const reader = new FileReader();
		// 	reader.readAsDataURL(file as Blob);
		// 	reader.onloadend = () => {
		// 		const result = reader.result;
		// 		newData = { ...newData, dataUrl: result as string };
		// 		return newData;
		// 	};

		// }
		default: {
			return newData;
		}
	}
}

export default getNewCurrTextInput;
