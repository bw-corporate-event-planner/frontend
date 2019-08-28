import React, { useState, useEffect } from "react";
import { withFormik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";



const OnboardForm = ({ values, touched, errors, status }) => {
  

  return (
<>
          <FormikForm>
          {/* {console.log('USERS in RETURN', users)} */}
          <Field type="text" name="name" placeholder="User Name" />
          {touched.name && errors.name && <p className="error">{errors.name}</p>}
    
          <Field type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && <p className="error">{errors.email}</p>}
    
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
          )}
    
          <label>
            I have read and agree to the Terms of Service
            <Field type="checkbox" name="tos" checked={values.tos} />
          </label>
          {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
    
          <button type="submit">Submit!</button>
        </FormikForm>
        
</>   
  );
};

const FormikOnboardForm = withFormik({
  mapPropsToValues({ username, email, password, tos }) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("userName is a required field"),
    email: Yup.string()
      .email("Input a valid email")
      .required("Email is a required field"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is a required field"),
    tos: Yup.boolean().oneOf([true], "Must accept Terms of Service")
  }),

  handleSubmit(values, { setStatus } ) {
    // console.log('Values in handleSubmit', values);
    axios
      .post("https://egge-corporate-ep.herokuapp.com/api/login", values)
      .then(response => {
        console.log("RESPONSE", response);
        setStatus(response.data)
      })
      .catch(error => {
        console.log("ERROR", error);
      });
  }
})(OnboardForm);

export default FormikOnboardForm;