'use strict';

import axios from 'axios';
import * as type from '../types/users';
import { showLoader, hideLoader } from './loader';

const ROOT_URL = 'http://api.randomuser.me/';

function requestUsers(){
	return {
		type: type.REQUEST_USERS
	}
}

function fetchUsersSuccess(payload){
	return {
		type: type.FETCH_USERS_SUCCESS,
		payload
	}
}

function fetchUsersError(err){
	return {
		type: type.FETCH_USERS_ERROR,
		payload: err
	}
}

export function fetchUsers(howMany = 5) {
	return dispatch => {
		dispatch(showLoader('Fetching users'));
		dispatch(requestUsers());

		axios.get(`${ROOT_URL}?results=${howMany}&nat=us&seed=2e0c669bcecbc7dd`)
			.then(response => {
				dispatch(fetchUsersSuccess(response.data));
				dispatch(hideLoader());
			})
			.catch(err => {
				dispatch(fetchUsersError(err));
				dispatch(hideLoader());
			});
	}
}
