'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
	return {
		user: state.user
	}
};

export default connect(
	mapStateToProps)(App);
