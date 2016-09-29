'use strict';

import * as type from './types';

export function showLoader(message){
	return {
		type: type.SHOW_LOADER,
		message
	}
}

export function hideLoader(){
	return {
		type: type.HIDE_LOADER
	}
}
