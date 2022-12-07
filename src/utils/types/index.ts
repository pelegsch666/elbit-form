export type InputId =
	| 'date'
	| 'board-pn'
	| 'board-sn'
	| 'tech-name'
	| 'board-data-base-name'
	| 'cause-failure'
	| 'solution'
	| 'data-url'
	| 'tools';

export type LocalStorageData = {
	date: string;
	boardPn: string;
	boardSn: string;
	techName: string;
	boardDataBaseName: string;
	causeFailure: string;
	solution: string;
	dataUrl: string;
};

export type FormatedLocalStorageData = LocalStorageData;
