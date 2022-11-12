import { useEffect } from "react";
import {useDispatch} from "react-redux";
import {clearDataReducer} from "state/data/actions";

const useMount = (callback) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearDataReducer());
        callback();
    }, []);
};

export default useMount;