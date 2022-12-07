import { atom } from 'recoil';

import { LocalStorageData } from 'utils/types';

export const tableDataState = atom({
	key: 'tableDataState',
	default: [] as LocalStorageData[],
});

export const currInputsDataState = atom({
	key: 'currInputsDataState',
	default: {
		date: '',
		boardPn: '',
		boardSn: '',
		techName: '',
		boardDataBaseName: '',
		causeFailure: '',
		solution: '',
		dataUrl: '',
	},
});

export const currItemIndexState = atom({
	key: 'currItemIndexState',
	default: 0,
});

export const isEditModeOnState = atom({
	key: 'isEditModeOnState',
	default: false,
});
