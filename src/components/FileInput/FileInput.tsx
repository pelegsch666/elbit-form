import { useRecoilState } from 'recoil';

import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import { currInputsDataState } from 'store';

import { getNewCurrTextInput } from 'utils/helpers';

import { INPUT_FIELD_SIZE } from 'utils/constants';

const StyledBox = styled(Box)(({ theme }) => ({
	margin: theme.spacing(1),
	width: INPUT_FIELD_SIZE,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	border: 'solid 1px #C4C4C4',
	borderRadius : '4px',
	'&:hover': {
		borderColor: '#212121',
	},

	'&:focus-within': {
		borderColor: '#2B69C8',
		outline: '2px solid #2B69C8',
	},

	'& input': {
		width: '100%',
		height: '100%',
		paddingLeft: '8px',
		paddingTop: '30px',

	}
}));

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
		<StyledBox>
			<input
				onChange={handleChange}
				id="data-url"
				type="file"
				accept="image/* , application/pdf"
			/>
		</StyledBox>
	);
}

export default FileInput;
