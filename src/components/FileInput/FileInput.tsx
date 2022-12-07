import { useRecoilState } from 'recoil';

import { currInputsDataState } from 'store';

import { getNewCurrTextInput } from 'utils/helpers';

function FileInput() {
	const [currInputsData, setCurrInputsData] =
		useRecoilState(currInputsDataState);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		let newData = getNewCurrTextInput(currInputsData, e);
		const file = e.target.files?.[0];
		const reader = new FileReader();
		reader.readAsDataURL(file as Blob);
		reader.onloadend = () => {
			const result = reader.result;
			newData = { ...newData, dataUrl: result as string };
			setCurrInputsData(newData);
		};
	}
	return (
		<input
			onChange={handleChange}
			id="data-url"
			type="file"
			accept="image/* , application/pdf"
		/>
	);
}

export default FileInput;
