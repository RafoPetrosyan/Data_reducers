import Account from "lib/account";
import history from "utils/browserHistory";
import {useDispatch} from "react-redux";

import {USER_SIGN_OUT} from "state/concepts/session/types";
import {makeAction} from "state/concepts/makeAction";

function useContainer() {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        Account.delete();
        dispatch(makeAction(USER_SIGN_OUT));
        history.replace('/login');
    }

    return {
        handleSignOut,
    }
}

export default useContainer;