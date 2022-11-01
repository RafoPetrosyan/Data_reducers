import Account from "lib/account";
import history from "utils/browserHistory";
import {useDispatch} from "react-redux";

import {USER_SIGN_OUT} from "state/concepts/session/types";
import {makeAction} from "state/concepts/makeAction";
import {showModal} from "state/modal/action";

function useContainer() {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        Account.delete();
        dispatch(makeAction(USER_SIGN_OUT));
        history.replace('/login');
    }

    const showExampleModal = () => {
        dispatch(showModal({modalType: 'EXAMPLE_MODAL', modalProps: {title: 'Example modal'}}));
    }

    return {
        handleSignOut,
        showExampleModal,
    }
}

export default useContainer;