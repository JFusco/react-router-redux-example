'use strict';

import React, { Component } from 'react';
import User from './User';
import Loader from '../components/Loader';

class UserList extends Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		this.props.onFetchUsers(10);
	}

	render(){
		const users = !this.props.isFetching ? (
			<ul>
				{
					this.props.users.map((item, i) => {
						return (
							<User
								key={i}
								item={item} />
						);
					})
				}
			</ul>
		) : null;

		return (
			<div id="users-page">
				<h2>Users</h2>

				<Loader show={this.props.showLoader} message={this.props.loaderMessage} />

				{users}

				{this.props.children}
			</div>
		);
	}
}

export default UserList;
