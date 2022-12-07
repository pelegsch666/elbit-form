import { styled } from '@mui/material/styles';
import { useRecoilState } from 'recoil';

import { TextInput as Input } from 'components/styles';

import { InputId } from 'utils/types';

import { currInputsDataState } from 'store';

import { cababCaseToCamelCase, getNewCurrTextInput } from 'utils/helpers';

import { INPUT_FIELD_SIZE } from 'utils/constants';

const StyledInput = styled(Input)(({ theme }) => ({
	margin: theme.spacing(1),
	width: INPUT_FIELD_SIZE,
}));

type TextInputProps = {
	label: string;
	id: InputId;
};

function TextInput({ label, id }: TextInputProps) {
	const [currInputsData, setCurrInputsData] =
		useRecoilState(currInputsDataState);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const newCurrTextInput = getNewCurrTextInput(currInputsData, e);
		setCurrInputsData(newCurrTextInput);
	}

	const labelInCamelCase = cababCaseToCamelCase(id);

	const value: string =
		currInputsData[labelInCamelCase as keyof typeof currInputsData];

	return (
		<StyledInput
			label={label}
			id={id}
			variant="outlined"
			value={value}
			onChange={handleChange}
		/>
	);
}

export default TextInput;
