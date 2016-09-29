'use strict';

import * as type from './types';

const initialState = {
	firstName: 'Joe',
	lastName: 'Fusco',
	age: 32,
	gender: 'male'
};

function storeUser(user){
	localStorage.setItem('example.user', JSON.stringify(user));
}

export function getUser(){
	const storedUser = localStorage.getItem('example.user');

	return (storedUser !== 'null') ? JSON.parse(storedUser) : initialState;
}

export function resetUser(){
	return {
		type: type.RESET_USER
	}
}

export function updateUser(user){
	storeUser(user);

	return {
		type: type.UPDATE_USER,
		user
	}
}
