import { useSelector } from 'react-redux';

const useParametricSelector = (endpoint) => {
    const isLoading = useSelector(({data}) => data.meta?.[endpoint]?.loading || false);
    const response = useSelector(({data}) => data.meta?.[endpoint]?.response || null);

    return { isLoading, response };
};

export default useParametricSelector;