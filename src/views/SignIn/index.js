// import React from 'react';
// import { Field, Form, FormikProvider } from "formik";
//
// import InputField from "views/shared/forms/InputField";
//
// import useContainer from "./hook";
// import "./style.scss";
//
// const SignIn = () => {
//     const { formik } = useContainer();
//
//     return (
//         <div className='signIn'>
//            <div className="forms">
//                <FormikProvider value={formik}>
//                    <Form onSubmit={formik.handleSubmit}>
//                        <Field name="login" type="text" label="Login" component={InputField} />
//                        <Field name="password" type="password" label="Password" component={InputField} />
//                        <button type="submit">Submit</button>
//                    </Form>
//                </FormikProvider>
//            </div>
//         </div>
//     )
// };
//
// export default SignIn;


import React from 'react';
import {FormikProvider} from "formik";
import {Input, Form} from "antd";

import InputFiledWithAntd from "views/shared/forms/InputFiledWithAntd";

import useContainer from "./hook";
import "./style.scss";
import 'antd/dist/antd.min.css';

const SignIn = () => {
    const { formik } = useContainer();

    return (
        <div className='signIn'>
            <div className="forms">
                <Form onFinish={formik.handleSubmit}>
                    <FormikProvider value={formik}>
                        <InputFiledWithAntd name="login" label="Login" className="signInInputs" />
                        <InputFiledWithAntd
                            name="password"
                            label="Password"
                            className="signInInputs"
                            formItemClassName="formItem"
                            asComponent={Input.Password}
                        />
                        <button type="submit">Submit</button>
                    </FormikProvider>
                </Form>
            </div>
        </div>
    )
};

export default SignIn;