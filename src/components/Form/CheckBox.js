import 'normalize.css';
import React from 'react';
import '../../styles/main.css';


export const CheckBox = () => {
	return (
		<label className={"container"}>
  		<input type="checkbox" name="radio" />
			<span className={"checkmark"}></span>
		</label>
	);
}