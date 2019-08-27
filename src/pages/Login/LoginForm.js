import React, { useEffect, useState } from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import {Paper} from '@material-ui/core';




import {LoginStyles}  from './FormStyles';


const LoginForm = ({ errors, touched, values, handleSubmit, status, props}) => {

    const style = LoginStyles();

    // hook keeps track of login information 
    const [login, setLogin] = useState();

    // update login if change has occured 
    useEffect(() => {
        if (status) {
            setLogin([...login, status])
        }
    }, [status]); 

    return(
        <div className="master-container">
            <Paper className={style.background}>
                <h1>Sign In</h1>

                <Form className={style.container}>
                    
                    {/* name */}
                    <Field 
                        type="text" 
                        name="username" 
                        placeholder="Userame"
                        className={style.textField}
                    />
                    {touched.name && errors.name && ( <p className="error">{errors.name}</p> )}


                    {/* password */}
                    <Field 
                        type="text" 
                        name="password" 
                        placeholder="Password" 
                        className={style.textField}
                    />
                    {touched.name && errors.name && <p className="error">{errors.name}</p>}

                    <button type="submit" className={style.button}>Submit</button>
                </Form>
            </Paper>
        </div>
    );
};

// using formik 
const FormikLoginForm = withFormik({
    
    // making sure each prop has a default value if given value is undefined 
    mapPropsToValues({ username, password }) {
      return {
        username: username || "CorporateEventPlanner",
        password: password || "success"
      };
    },
    
    // use yup to enforce input requirements 
    // validationSchema: Yup.object().shape({
    //     username: Yup
    //     .string()
    //     .required("Please Enter Your Name"),
    //     password: Yup
    //     .string()
    //     .required("Please Enter Your Password"),
    // }),
    
    // update values and set status 
    handleSubmit(values, formik) {
        console.log(formik);
    

        // resetForm(); 
    }

})(LoginForm); 
    
export default FormikLoginForm;
