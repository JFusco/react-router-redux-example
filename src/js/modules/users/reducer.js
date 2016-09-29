'use strict';

import * as type from './types';

const initialState = {
	isFetching: false,
	data: []
};

export default function reducer(state = initialState, action){
	switch(action.type){
		case type.REQUEST_USERS: {
			return {
				...state,
				isFetching: true
			};
		}

		case type.FETCH_USERS_ERROR: {
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		}

		case type.FETCH_USERS_SUCCESS: {
			return {
				...state,
				isFetching: false,
				data: action.payload.results
			};
		}

		default: {
			return state;
		}
	}
};
