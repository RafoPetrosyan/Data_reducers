import { useSelector } from 'react-redux';

const useParametricSelector = (endpoint) => {
    const isLoading = useSelector(({dataReducer}) =>
        dataReducer.meta?.[endpoint]?.loading || false);
    const response = useSelector(({dataReducer}) =>
        dataReducer.meta?.[endpoint]?.response || null);

    return { isLoading, response };
};

export default useParametricSelector;