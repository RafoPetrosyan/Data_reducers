import Account from "lib/account";
import history from "utils/browserHistory";
import {useDispatch, useSelector} from "react-redux";

import {FETCH_USERS_LIST_REQUEST, USER_SIGN_OUT} from "state/concepts/session/types";
import {fetchUsersListEndpoint} from "state/concepts/session/endpoints";
import {makeAction} from "state/concepts/makeAction";
import {showModal} from "state/modal/action";
import useParametricSelector from "hooks/useParametricSelector";
import useMount from "hooks/useMount";

function useContainer() {
    const dispatch = useDispatch();
    const {dataCount, usersList} = useSelector(({session}) => session.usersList);
    const { endpoint } = fetchUsersListEndpoint;
    const { isLoading, response, error } = useParametricSelector(endpoint);

    const handleSignOut = () => {
        Account.delete();
        dispatch(makeAction(USER_SIGN_OUT));
        history.replace('/login');
    }

    const showExampleModal = () => {
        dispatch(showModal({modalType: 'EXAMPLE_MODAL', modalProps: {title: 'Example modal'}}));
    }

    const getUsersList = () => {
        dispatch(makeAction(FETCH_USERS_LIST_REQUEST))
    };

    useMount(getUsersList)

    return {
        handleSignOut,
        showExampleModal,
        usersList,
        dataCount,
        isLoading,
        response,
        error,
    }
}

export default useContainer;