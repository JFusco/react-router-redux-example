'use strict';

import * as type from '../types/user';
import { getUser } from '../actions/user';

export default function reducer(state = getUser(), action){
	switch(action.type){
		case type.UPDATE_USER: {
			return {
				...action.user
			}
		}

		case type.RESET_USER: {
			return {
				...state
			};
		}

		default: {
			return state;
		}
	}
}
