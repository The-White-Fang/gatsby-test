import React from 'react';

const GfForm = (props) => {
	const { children, ...rest } = props;

	return <form {...props}>{children}</form>
}

export default GfForm;