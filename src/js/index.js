'use strict';

import React from 'react';
import { ReactDOM, render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import routes from './routes';
import store from './store';

const app = document.getElementById('application');
const history = syncHistoryWithStore(browserHistory, store);

render (
	<Provider store={store}>
		<Router history={history} routes={routes} />
	</Provider>, app);
