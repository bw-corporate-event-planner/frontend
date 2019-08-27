import React, { useEffect } from 'react';
import { withFormik, Form as FormikForm, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Form = ({ errors, touched, status, setUsers, values }) => {
  useEffect( () =>
    {
        if(status)
        {
            setUsers(users => [...users, status])
        }
    }, [status])
  return (
    <div>
      <h1>Login Form</h1>
      <FormikForm className='user-form'>
        <label>
          Username:
          <Field type='text' name='username' />
          {touched.username && errors.username && (
            <p className='error'>{errors.username}</p>
          )}
        </label>
        <label>
          Name:
          <Field type='text' name='name' />
          {touched.name && errors.name && (
            <p className='error'>{errors.name}</p>
          )}
        </label>
        <label>
          Category:
          <Field component='select' name='category'>
            <option>Select a Category</option>
            <option value='Office Party'>Office Party</option>
            <option value='Outdoors Pary'>Outdoors Party</option>
            <option value='Small Party'>Small Party</option>
            <option value='Big Party'>Big Party</option>
          </Field>
          {touched.category && errors.category && (
            <p className='error'>{errors.category}</p>
          )}
        </label>
        <label>
          Email:
          <Field type='email' name='email' />
          {touched.email && errors.email && (
            <p className='error'>{errors.email}</p>
          )}
        </label>
        <label>
          Password:
          <Field type='password' name='password' />
          {touched.password && errors.password && (
            <p className='error'>{errors.password}</p>
          )}
        </label>
        <label>
          Terms of Service:
          <Field
            type='checkbox'
            name='termOfService'
            checked={values.termOfService}
          />
          {touched.termOfService && errors.termOfService && (
            <p className='error'>{errors.termOfService}</p>
          )}
        </label>
        <button type='submit' className='user-form-submit'>
          Submit
        </button>
      </FormikForm>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || '',
      name: values.name || '',
      category: values.category || '',
      email: values.email || '',
      password: values.password || '',
      termOfService: values.termOfService || false,
    };
  },
  //VALIDATION SCHEMA 
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .lowercase()
      .required('Username is a required field'),
    name: Yup.string()
      .lowercase()
      .required('Name is a required field'),
    category: Yup.string().required('Category is a required field'),
    email: Yup.string()
      .lowercase()
      .email('Field needs to be a valid e-mail')
      .required('E-mail is a required field'),
    password: Yup.string()
      .min(8, 'Password must be at least 6 characters and 1 number')
      .required('Password is a required field'),
    termOfService: Yup.bool()
      .oneOf([true], 'Terms of Service must be checked')
      .required(),
  }),
  //END OF VALIDATION SCHEMA
  handleSubmit(values, { setStatus, resetForm }) {
    // console.log(values);
    axios.post('https://reqres.in/api/users', values).then(res => {
      console.log('HTTP POST response: ', res);
      setStatus(res.data);
      resetForm();
    });
  },
})(Form);

export default FormikUserForm;
