'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/users';
import Users from '../components/Users';

const mapStateToProps = state => {
	return {
		users: state.users.data,
		isFetching: state.users.isFetching,
		showLoader: state.loader.show,
		loaderMessage: state.loader.message
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchUsers(howMany){
			dispatch(fetchUsers(howMany));
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps)(Users);
