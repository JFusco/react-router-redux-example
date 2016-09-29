'use strict';

import * as type from './types';

const initialState = {
	show: false,
	message: ''
};

export default function reducer(state = initialState, action){
	switch(action.type){
		case type.SHOW_LOADER: {
			return {
				show: true,
				message: action.message
			}
		}

		case type.HIDE_LOADER: {
			return initialState;
		}

		default: {
			return state;
		}
	}
}
