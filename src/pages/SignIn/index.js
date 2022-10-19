import React from 'react';
import { Field, Form, FormikProvider } from "formik";

import InputField from "shared/forms/InputField";

import useContainer from "./hook";
import "./style.scss";

const SignIn = () => {
    const { formik } = useContainer();
    return (
        <div className='signIn'>
           <div className="forms">
               <FormikProvider value={formik}>
                   <Form onSubmit={formik.handleSubmit}>
                       <Field name="login" type="text" label="Login" component={InputField} />
                       <Field name="password" type="password" label="Password" component={InputField} />
                       <button type="submit">Submit</button>
                   </Form>
               </FormikProvider>
           </div>
        </div>
    )
}

export default SignIn;