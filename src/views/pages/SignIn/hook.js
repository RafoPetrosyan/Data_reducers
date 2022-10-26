import {useFormik} from "formik";
import {useDispatch} from "react-redux";

import validationSchema from "lib/yupLocalised/scheme/signIn";

import {makeAction} from "state/concepts/makeAction";
import {USER_SIGN_IN} from "state/concepts/session/types";
import {signInUserEndpoint} from "state/concepts/session/endpoints";
import useParametricSelector from "hooks/useParametricSelector";

function useContainer() {
    const dispatch = useDispatch();
    const { endpoint } = signInUserEndpoint;
    const { isLoading } = useParametricSelector(endpoint);

    const onSubmit = (values) => {
        console.log(values)
        dispatch(makeAction(USER_SIGN_IN, values));
    };

    /**
     * Formik initialization
     */
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema,
        onSubmit,
    });

    return {
        formik,
        isLoading,
    }
}

export default useContainer;