import { stringToCamelCase } from 'utils/helpers';

import { InputId } from 'utils/types';

function getColumns(titles: InputId[]) {
	return titles.map((title) => ({
		Header: title,
		accessor: stringToCamelCase(title),
	}));
}

export default getColumns;
