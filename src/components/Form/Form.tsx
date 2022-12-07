import DateInput from 'components/DateInput';
import FileInput from 'components/FileInput';
import SubmitButton from 'components/SubmitButton';
import TextInput from 'components/TextInput';

import {
	FormWrapper,
	StackCol,
	TextInputContainer
} from 'components/styles';


export default function Form() {

	
	return (
		<FormWrapper spacing={3}>
			 <TextInputContainer>
				<StackCol>
					<TextInput id="board-pn" label="Board PN" />
					<TextInput id="board-sn" label="Board SN" />
					<TextInput id="tech-name" label="Tech Name" />
					<DateInput />
				</StackCol>
				<StackCol>
					<TextInput id="board-data-base-name" label="Board Data Base Name" />
					<TextInput id="cause-failure" label="Cause Failure" />
					<TextInput id="solution" label="Solution" />
					<FileInput />
				</StackCol>
			</TextInputContainer>
			<SubmitButton/>  
		</FormWrapper>
	);
}
