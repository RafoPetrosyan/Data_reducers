import { useSelector } from 'react-redux';

const useParametricSelector = (endpoint) => {
    const isLoading = useSelector(({data}) => data?.[endpoint]?.loading || false);
    const response = useSelector(({data}) => data?.[endpoint]?.response || null);
    const error = useSelector(({data}) => data?.[endpoint]?.error || null);

    return { isLoading, response, error };
};

export default useParametricSelector;