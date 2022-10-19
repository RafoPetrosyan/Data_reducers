import {useFormik} from "formik";
import {useDispatch} from "react-redux";

import validationSchema from "lib/yupLocalised/scheme/signIn";

import {makeAction} from "state/concepts/makeAction";
import {USER_SIGN_IN} from "state/concepts/session/types";

function useContainer() {
    const dispatch = useDispatch();

    fetch('https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJOwg_06VPwokRYv534QaPC8g&key=AIzaSyDYemdkE3Aj5rKGUbe3k5nESe55-pzxgzc')
        .then((response) => response.json())
        .then((data) => console.log('7777777777777777777777777777', data));

    const onSubmit = (values) => {
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
    }
}

export default useContainer;