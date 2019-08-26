import React from 'react'; 
import { Form, Field, withFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';


const LoginForm = ({ errors, touched, values, status }) => {


    return (
        <div>
            <h1>Corporate Event Planner: Please Login</h1>
            <Form>
                <div>
                    <Field type="text" name="email" placeholder="email" />
                    {touched.name && errors.name && <p className="name-login">{errors.name}</p>}
                </div>
                <div>
                    <Field type="password" name="password" placeholder="password" />
                    {touched.password && errors.name && <p className="passsword-login">{errors.password}</p>}
                </div>

                <button type="submit">Login</button>
            </Form>
        </div>

    );
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ email, password, }) {
        return{
            email : email || "",
            password : password || "",
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please Fill In Your Email"),
        password: Yup.string().required("Please Enter Your Password")
    })
})(LoginForm)

export default LoginForm;