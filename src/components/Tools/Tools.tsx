import { useRecoilState, useSetRecoilState } from 'recoil';

import {
	currInputsDataState,
	currItemIndexState,
	isEditModeOnState,
	tableDataState
} from 'store';

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
			<button onClick={handleDelete}>{trashEmoji}</button>
			<button onClick={handleEdit}>{editEmoji}</button>
		</>
	);
}
