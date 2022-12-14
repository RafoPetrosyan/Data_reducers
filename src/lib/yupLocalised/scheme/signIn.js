import yup from 'lib/yupLocalised';

import {MAX_INPUT_LENGTH} from "constanst/globals";

const validationSchema = yup.object().shape({
    login: yup.string().max(MAX_INPUT_LENGTH).required(),
    password: yup.string().required(),
});

export default validationSchema;
