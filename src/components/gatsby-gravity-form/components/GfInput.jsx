import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

class TextInput extends Component {
	state = {
		error: ''
	}

	render () {
		const { id, label, type, enablePasswordInput, isRequired, choices } = this.props.field;
		const { value } = this.props;

		const { error } = this.state;

		const textFieldProps = {
			fullWidth: 1,
			margin: 'normal',
			id: `${id}`,
			label: label,
			onChange: this.handleChange,
			error: Boolean(error),
			helperText: error,
			required: isRequired,
			value: value[`input_${id}`]
		};

		if (type.toLowerCase() === 'select') {
			textFieldProps.select = 1;
			textFieldProps.children = JSON.parse(choices).map( (opt, i) => <MenuItem key={i} value={opt.value}>{opt.text}</MenuItem> )
		} else {
			textFieldProps.type = enablePasswordInput ? 'password' : type;
		}

		return (
			<TextField {...textFieldProps} />
		)
	}

	validate = () => {
		if (this.props.field.type === 'select') return;

		const { value: val } = this.props;
		const { id, isRequired, type, maxLength, gf_live_validation_settings, gf_live_validation_format } = this.props.field;

		const value = val[`input_${id}`];

		if (isRequired && !value.trim()) {
			return this.setState({ error: 'Field is required' });
		}

		if (gf_live_validation_settings) {
			const reg = new RegExp(gf_live_validation_format);
			if (!value.match(reg)) {
				return this.setState({ error: 'Invalid format' });
			} 
		}
		
		if (maxLength && value.lenght > maxLength) {
			return this.setState({ error: `Max-length(${maxLength}) exceeded` });
		}
		
		if (type === 'email') {
			const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (!value.match(regex)) {
				return this.setState({ error: 'Invalid email' });
			}
		}

		return this.setState({ error: '' });
	}

	handleChange = ({target}) => {
		const { value } = target;

		this.validate();

		this.props.updateValue(this.props.field.id, value);
	}

}

export default TextInput;