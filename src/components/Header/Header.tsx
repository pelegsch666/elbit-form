import { Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledTitle = styled(Typography)(({ theme }) => ({
	fontSize: 36,
	margin: '0 auto',
	width: 'fit-content',
	padding: theme.spacing(3),
}));

function Header() {
	return (
		<>
			<StyledTitle variant="h1">Data Base Board</StyledTitle>
		</>
	);
}

export default Header;
