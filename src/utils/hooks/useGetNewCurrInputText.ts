import { useRecoilState } from 'recoil';

import { currInputsDataState } from 'store';

import { InputId } from 'utils/types';

function useGetNewCurrInputText(e: React.ChangeEvent<HTMLInputElement>) {
	const [currInputsData, setCurrInputsData] =
		useRecoilState(currInputsDataState);

	const id = e.target.id as InputId;
	const value = e.target.value;

	const newData = {
		...currInputsData,
	};

	switch (id) {
		case 'date':
			newData.date = value;
			break;
		case 'board-pn':
			newData.boardPn = value;
			break;
		case 'board-sn':
			newData.boardSn = value;
			break;
		case 'tech-name':
			newData.techName = value;
			break;
		case 'board-data-base-name':
			newData.boardDataBaseName = value;
			break;
		case 'cause-failure':
			newData.causeFailure = value;
			break;
		case 'solution':
			newData.solution = value;
			break;
		case 'data-url':
			const file = e.target.files?.[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				newData.dataUrl = reader.result as string;
			};
			reader.readAsDataURL(file as Blob);
			break;
	}

	setCurrInputsData(newData);

	return newData;
}

export default useGetNewCurrInputText;
