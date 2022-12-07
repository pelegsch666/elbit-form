import { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import Form from 'components/Form/Form';
import TableInfo from 'components/TableInfo/TableInfo';

import { getFormatedData } from 'utils/helpers';

import { tableDataState } from 'store';

function App() {
	const setTableData = useSetRecoilState(tableDataState);

	useEffect(() => {
		const data = getFormatedData();
		setTableData(data);
	}, [setTableData]);

	return (
		<>
			<Form />
			<TableInfo />
		</>
	);
}

export default App;
