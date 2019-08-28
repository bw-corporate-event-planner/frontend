import React, { useState, useEffect } from 'react';
import { withFormik, Form as FormikForm, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import './LoginForm.scss';

const OnboardForm = ({ values, touched, errors, status }) => {
	return (
		<div className="form-container">
			<FormikForm>
				<h2>Please Login</h2>
				<div className="field">
					<label>
						<div>Username</div>
						<Field type="text" name="username" placeholder="User Name" />
					</label>
					{touched.username && errors.username && <p className="error">{errors.username}</p>}
				</div>

				<div className="field">
					<label>
						<div>Email</div>
						<Field type="text" name="email" placeholder="Email" />
					</label>
					{touched.email && errors.email && <p className="error">{errors.email}</p>}
				</div>

				<div className="field">
					<label>
						<div>Password</div>
						<Field type="password" name="password" placeholder="Password" />
						{touched.password && errors.password && <p className="error">{errors.password}</p>}
					</label>
				</div>

				<div className="TOS">
					<div className="label">
						<Field type="checkbox" name="tos" checked={values.tos} />
						<label>I have read and agree to the Terms of Service</label>
					</div>
					<div>{touched.tos && errors.tos && <p className="error">{errors.tos}</p>}</div>
				</div>

				<button type="submit">Login</button>
			</FormikForm>
		</div>
	);
};

const FormikOnboardForm = withFormik({
	mapPropsToValues({ username, email, password, tos }) {
		return {
			username: username || '',
			email: email || '',
			password: password || '',
			tos: tos || false
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required('Username is required'),
		email: Yup.string().email('Input a valid email').required('Email is a required field'),
		password: Yup.string()
			.min(8, 'Password must be at least 8 characters')
			.required('Password is a required field'),
		tos: Yup.boolean().oneOf([ true ], 'Must accept Terms of Service')
	}),

	handleSubmit(values, { setStatus }) {
		// console.log('Values in handleSubmit', values);
		axios
			.post('https://egge-corporate-ep.herokuapp.com/api/login', values)
			.then((response) => {
				console.log('RESPONSE', response);
				setStatus(response.data);
			})
			.catch((error) => {
				console.log('ERROR', error);
			});
	}
})(OnboardForm);

export default FormikOnboardForm;
