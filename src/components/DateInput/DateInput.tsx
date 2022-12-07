import { TextField } from '@mui/material';
import { useRecoilState } from 'recoil';

import { currInputsDataState } from 'store';

import { cababCaseToCamelCase, getNewCurrTextInput } from 'utils/helpers';

function DateInput() {
	const [currInputsData, setCurrInputsData] =
		useRecoilState(currInputsDataState);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newCurrTextInput = getNewCurrTextInput(currInputsData, e);
		setCurrInputsData(newCurrTextInput);
	}

	const labelInCamelCase = cababCaseToCamelCase('date');

	const value: string =
		currInputsData[labelInCamelCase as keyof typeof currInputsData];

	return (
		<TextField
			onChange={handleChange}
			id="date"
			variant="outlined"
			value={value}
			type="date"
		/>
	);
}

export default DateInput;
