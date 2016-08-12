'use strict';

import React from 'react';

const Loader = props => {
	const loader = props.show ? (
		<div>{props.message}</div>
	) : <div>Done loading</div>;

	return (
		<div>
			{loader}
		</div>
	);
};

export default Loader;
