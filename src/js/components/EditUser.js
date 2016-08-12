'use strict';

import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class EditUser extends Component{
	state = {
		firstName: this.props.user.firstName,
		lastName: this.props.user.lastName,
		gender: this.props.user.gender,
		age: this.props.user.age
	};

	componentWillReceiveProps(nextProps){
		this.setState(nextProps.user);
	}

	constructor(props){
		super(props);
	}

	onSaveUser(){
		this.props.onUpdateUser(this.state);
	}

	fNameChange(e){
		this.setState({
			firstName: e.target.value
		});
	}

	lNameChange(e){
		this.setState({
			lastName: e.target.value
		});
	}

	ageChange(e){
		this.setState({
			age: e.target.value
		});
	}

	genderChange(e){
		this.setState({
			gender: e.target.value
		});
	}

	onResetUser(){
		this.props.onResetUser();
	}

	render(){
		return (
			<div>
				<h2>Edit user</h2>

				<input value={this.state.firstName} onChange={this.fNameChange.bind(this)} />
				<input value={this.state.lastName} onChange={this.lNameChange.bind(this)} />
				<input value={this.state.age} type="number" onChange={this.ageChange.bind(this)} />

				<select value={this.state.gender} onChange={this.genderChange.bind(this)}>
					<option value="male">male</option>
					<option value="female">female</option>
				</select>

				<button onClick={this.onSaveUser.bind(this)}>save</button>
				<button onClick={this.onResetUser.bind(this)}>reset</button>
			</div>
		);
	}
}

export default EditUser;
