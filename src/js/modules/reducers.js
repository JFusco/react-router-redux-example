'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import users from './users/reducer';
import user from './user/reducer';
import loader from './loader/reducer';

export default combineReducers({
	users,
	user,
	loader,
	routing: routerReducer
});
