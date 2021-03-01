import React, { useEffect, useState } from 'react';
import getForm from './utils/getForm';
import GfForm from './components/GfForm';
import GfInput from './components/GfInput';

const GravityForm = ({ formId, presets, successCallback, errorCallback }) => {
	const [state, setState] = useState('');
	
	const form = getForm(formId);
	useEffect(() => {

		const initialState = {};
		for (let field of form.formFields) {
			initialState[`input_${field.id}`] = field.defaultValue;
		}
		setState(initialState);

		return () => {};
	},[])

	const updateState = (inp_id, val) => {
		const newState = {...state};
		newState[`input_${inp_id}`] = val;
		setState(newState);
	}

	return (
		<GfForm>
			<GfInput field={form.formFields[0]} value={state} updateValue={updateState} />
			<GfInput field={form.formFields[1]} value={state} updateValue={updateState} />
		</GfForm>
	)
}

export default GravityForm