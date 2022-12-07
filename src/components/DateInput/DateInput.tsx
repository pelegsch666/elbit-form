import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRecoilState } from 'recoil';

import { currInputsDataState } from 'store';

import { cababCaseToCamelCase, getNewCurrTextInput } from 'utils/helpers';

import { INPUT_FIELD_SIZE } from 'utils/constants';

const StyledInput = styled(TextField)(({ theme }) => ({
	margin: theme.spacing(1),
	width: INPUT_FIELD_SIZE,
}));

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
		<StyledInput
			onChange={handleChange}
			id="date"
			variant="outlined"
			value={value}
			type="date"
		/>
	);
}

export default DateInput;
