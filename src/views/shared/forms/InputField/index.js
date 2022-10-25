import React from "react";
import PropTypes from 'prop-types';
import { useField } from "formik";

const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props.field.name);

    return (
        <div>
            <label>{label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    )
};

InputField.defaultProps = {
    label: '',
    field: {},
};

InputField.propTypes = {
    field: PropTypes.shape(),
    label: PropTypes.string,
};

export default InputField;