import { useRecoilState, useSetRecoilState } from 'recoil';

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import {
	currInputsDataState,
	currItemIndexState,
	isEditModeOnState,
	tableDataState
} from 'store';

const StyledButton = styled(Button)(({ theme }) => ({
	margin: 3,
	padding: 0,
	
}));

type ToolsProps = {
	itemIndex: number;
};

export default function Tools({ itemIndex }: ToolsProps) {
	const [tableData, setTableData] = useRecoilState(tableDataState);
	const [isEditModeOn, setIsEditModeOn] = useRecoilState(isEditModeOnState);
	const setCurrItemIndex = useSetRecoilState(currItemIndexState);
	const [currInputsData, setCurrInputsData] =
		useRecoilState(currInputsDataState);

	const trashEmoji = '🗑️';
	const editEmoji = '✏️';

	function handleDelete() {
		const newData = tableData.filter((item, index) => index !== itemIndex);
		setTableData(newData);
		const stringifiedNewData = JSON.stringify(newData);
		localStorage.setItem('data', stringifiedNewData);
		setCurrItemIndex(itemIndex);
	}

	function handleEdit() {
		setIsEditModeOn(!isEditModeOn);
		setCurrItemIndex(itemIndex);
		const currItem = tableData[itemIndex];
		if (!isEditModeOn) {
			setCurrInputsData(currItem);
		} else {
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
		}
	}

	return (
		<>
			<StyledButton variant="outlined" color="secondary" onClick={handleDelete}>
				{trashEmoji}
			</StyledButton>
			<StyledButton variant="outlined" color="secondary" onClick={handleEdit}>
				{editEmoji}
			</StyledButton>
		</>
	);
}
