'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class App extends Component{
	constructor(props){
		super(props);

		this.nav = [{
			name: 'home',
			path: '/'
		},{
			name: 'users',
			path: '/users'
		},{
			name: 'edit user',
			path: '/user/edit'
		}];
	}

	render(){
		return (
			<div>
				<div>Hello: {this.props.user.firstName + ' ' + this.props.user.lastName}</div>

				<Nav navItems={this.nav} />

				<div role="main">{this.props.children}</div>
			</div>
		);
	}
}

export default App;
