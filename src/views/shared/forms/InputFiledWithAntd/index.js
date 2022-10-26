import React from "react";
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { useField } from "formik";

const InputFiledWithAntd = ({ label, name, placeholder, formItemClassName, asComponent: Component, ...props }) => {
    const [field, meta] = useField(name);
    const hasError = meta.touched && meta.error;
    const Error = hasError ? <div className="error">{meta.error}</div> : undefined;

    return (
        <Form.Item
            className={formItemClassName}
            label={<span>{label}</span>}
            htmlFor={name}
            validateStatus={hasError && 'error'}
            help={Error}
        >
            <Component id={name} placeholder={placeholder} {...field} {...props} />
        </Form.Item>
    );
};

InputFiledWithAntd.defaultProps = {
    label: undefined,
    placeholder: undefined,
    formItemClassName: undefined,
    asComponent: Input,
};

InputFiledWithAntd.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
    formItemClassName: PropTypes.string,
    asComponent: PropTypes.elementType,
};

export default InputFiledWithAntd;
