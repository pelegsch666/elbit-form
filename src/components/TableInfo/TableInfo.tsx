import { useMemo } from 'react';
import { useTable } from 'react-table';
import { useRecoilValue } from 'recoil';

import { Button, Table } from '@mui/material';
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { cababCaseToRegularCase, getColumns, openDataUrl } from 'utils/helpers';

import { tableDataState } from 'store';

import { COLUMNS } from 'utils/constants';

import Tools from 'components/Tools';

const StyledTable = styled(Table)(({ theme }) => ({
	margin: theme.spacing(1),

	'& td, & th': {
		border: '1px solid black',
		maxWidth: '150px,',
		padding: '5px',
		textAlign: 'center',
		fontFamily: 'monospace',
	},

	'& th': {
		backgroundColor: blue[100],
		fontSize: '1.01rem',
		fontFamily: 'arial',
	},

	'& tr:hover': {
		backgroundColor: blue[50],
	},
}));

export default function TableInfo() {
	const tableData = useRecoilValue(tableDataState);

	const data = useMemo(() => tableData, [tableData]);

	const columns = useMemo(() => getColumns(COLUMNS) as any, []);

	const table = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table;

	return (
		<StyledTable {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => {
							const headerTitle: any = column.render('Header');
							const formatedHeaderTitle = cababCaseToRegularCase( headerTitle);
							return <th {...column.getHeaderProps()}>{formatedHeaderTitle}</th>;
						})}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, rowIndex) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell, index) => {
								const columnTitle = cell.column.Header;
								if (columnTitle === 'data-url') {
									if (cell.value) {
										return (
											<td {...cell.getCellProps()}>
												<Button
													variant="outlined"
													size="small"
													color="secondary"
													sx={{
														fontSize: '0.7rem',
														padding: '0.2rem 0.5rem',
													}}

													onClick={() => {
														openDataUrl(cell.value);
													}}
												>
													Link
												</Button>
											</td>
										);
									} else {
										return (
											<td {...cell.getCellProps()}>
												<p>Not Available</p>
											</td>
										);
									}
								} else if (columnTitle === 'tools') {
									return (
										<td {...cell.getCellProps()}>
											<Tools itemIndex={Number(rowIndex)} />
										</td>
									);
								} else {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								}
							})}
						</tr>
					);
				})}
			</tbody>
		</StyledTable>
	);
}
