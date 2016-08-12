'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from '../reducers/users';
import user from '../reducers/user';
import loader from '../reducers/loader';

export default combineReducers({
	users,
	user,
	loader,
	routing: routerReducer
});
