'use strict';

import React from 'react';
import { Link } from 'react-router';

const User = props => {
	const { item } = props;

	const constructName = () => {
		const { name } = item;

		return `${name.title} ${name.first} ${name.last}`;
	};

	return (
		<li>
			{`${constructName()} - ${item.gender}`}
			<Link to={`/users/user/${item.id.value}`} activeClassName="active">edit</Link>
		</li>
	);
};

export default User;
