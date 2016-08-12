'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import Home from '../components/Home';
import Users from '../containers/Users';
import EditUser from '../containers/EditUser';

const routes = {
	childRoutes: [{
		path: '/',
		component: App,
		indexRoute: {component: Home},

		childRoutes: [{
			path: 'users',
			component: Users
		},
		{
			path: 'user/edit',
			component: EditUser
		}]
	}]
};

export default routes;
