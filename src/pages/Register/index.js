import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import './RegisterForm.scss';

const RegistrationForm = ({ errors, touched, values, status }) => {

	return (
		<div className="form-container-register">
			<h2>Please Fill In Fields</h2>
			<Form>
				<div className="field">
					<Field type="text" name="firstname" placeholder="First Name*" />
					{touched.firstname && errors.firstname && <p className="firstname-login">{errors.firstname}</p>}
				</div>
				<div className="field">
					<Field type="text" name="middlename" placeholder="Middle Name (Optional)*" />
				</div>
				<div className="field">
					<Field type="text" name="lastname" placeholder="Last Name*" />
					{touched.lastname && errors.lastname && <p className="lastname-login">{errors.lastname}</p>}
				</div>
				<div className="field">
					<Field type="text" name="email" placeholder="Email*" />
					{touched.email && errors.email && <p className="email-login">{errors.email}</p>}
				</div>
				<div className="field">
					<Field type="password" name="password" placeholder="Password*" />
					{touched.password && errors.password && <p className="passsword-login">{errors.password}</p>}
				</div>

				<button type="submit">Register</button>
			</Form>
		</div>
	);
};

const FormikRegistrationForm = withFormik({
	mapPropsToValues({ firstname, lastname, email, password }) {
		return {
			firstname: firstname || '',
			lastname: lastname || '',
			email: email || '',
			password: password || ''
		};
	},

	validationSchema: Yup.object().shape({
		firstname: Yup.string().required('First Name is required'),
		lastname: Yup.string().required('Last Name is required'),
		email: Yup.string().required('Please Fill In An Email'),
		password: Yup.string().required('Please Enter A Password')
	})
})(RegistrationForm);

export default FormikRegistrationForm;
