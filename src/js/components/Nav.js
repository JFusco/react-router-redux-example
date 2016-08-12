'use strict';

import React from 'react';
import { IndexLink } from 'react-router';

const Nav = ({navItems}) => {
	return (
		<nav>
			<ul role="menu">
				{
					navItems.map((item, i) => {
						return (
							<li role="presentation" key={i}>
								<IndexLink to={`${item.path}`} activeClassName="active">{item.name}</IndexLink>
							</li>
						);
					})
				}
			</ul>
		</nav>
	);
};

export default Nav;
