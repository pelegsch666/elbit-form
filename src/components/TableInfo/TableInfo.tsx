import { useMemo } from 'react';
import { useTable } from 'react-table';
import { useRecoilValue } from 'recoil';

import { getColumns, openDataUrl } from 'utils/helpers';

import { tableDataState } from 'store';

import { COLUMNS } from 'utils/constants';

import Tools from 'components/Tools';

export default function TableInfo() {
	const tableData = useRecoilValue(tableDataState);

	const data = useMemo(() => tableData, [tableData]);

	const columns = useMemo(() => getColumns(COLUMNS) as any, []);

	const table = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table;

	return (
		<table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th
								{...column.getHeaderProps()}
								style={{
									borderBottom: 'solid 3px red',
									background: 'aliceblue',
									color: 'black',
									fontWeight: 'bold',
								}}
							>
								{column.render('Header')}
							</th>
						))}
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
												<button
													onClick={() => {
														openDataUrl(cell.value);
													}}
												>
													Link
												</button>
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
											<p>{rowIndex}</p>
										</td>
									);
								} else {
									return (
										<td
											{...cell.getCellProps()}
											style={{
												padding: '10px',
												border: 'solid 1px gray',
												background: 'papayawhip',
											}}
										>
											{cell.render('Cell')}
										</td>
									);
								}
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
