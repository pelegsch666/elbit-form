import { Button } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
	currInputsDataState,
	currItemIndexState,
	isEditModeOnState,
	tableDataState,
} from 'store';

import { addDataToLocalStorage, composeInputs } from 'utils/helpers';



function SubmitButton() {
	const [currInputsData, setCurrInputsData] =
		useRecoilState(currInputsDataState);

	const [isEditModeOn, setIsEditModeOn] = useRecoilState(isEditModeOnState);

	const currItemIndex = useRecoilValue(currItemIndexState);

	const [tableData, setTableData] = useRecoilState(tableDataState);

	function handleClick() {
		const {
			date,
			boardPn,
			boardSn,
			techName,
			boardDataBaseName,
			causeFailure,
			solution,
			dataUrl,
		} = currInputsData;

		const dataFromInputs = composeInputs(
			date,
			boardPn,
			boardSn,
			techName,
			boardDataBaseName,
			causeFailure,
			solution,
			dataUrl
		);

		if (isEditModeOn) {
			const newData = tableData.map((item, index) => {
				if (index === currItemIndex) {
					return dataFromInputs;
				}
				return item;
			});
			setTableData(newData);
			localStorage.setItem('data', JSON.stringify(newData));
			setIsEditModeOn(!isEditModeOn);
			return;
		} else {
			addDataToLocalStorage(dataFromInputs);
			setCurrInputsData({
				date: '',
				boardPn: '',
				boardSn: '',
				techName: '',
				boardDataBaseName: '',
				causeFailure: '',
				solution: '',
				dataUrl: '',
			});
			setIsEditModeOn(!isEditModeOn);
		}

		window.location.reload();
	}

	return (
		<Button variant="contained" onClick={handleClick}>
			{isEditModeOn ? 'Edit' : 'Save'}
		</Button>
	);
}

export default SubmitButton;
