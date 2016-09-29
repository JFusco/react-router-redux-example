'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, resetUser } from '../modules/user/actions';
import EditUser from '../components/EditUser';

const mapStateToProps = state => {
	return {
		user: state.user
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onUpdateUser(user){
			dispatch(updateUser(user));
		},

		onResetUser(){
			dispatch(resetUser());
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps)(EditUser);
