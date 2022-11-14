import { useSelector } from 'react-redux';

const useParametricSelector = (endpoint) => ({
    isLoading: useSelector(({data}) => data?.[endpoint]?.loading || false),
    response: useSelector(({data}) => data?.[endpoint]?.response || null),
    error: useSelector(({data}) => data?.[endpoint]?.error || null),
});

export default useParametricSelector;