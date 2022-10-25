import { useEffect, useRef } from "react";

const useMount = (callback) => {
    const ref = useRef(false);

    useEffect(() => {
        if (ref.current) return;

        callback();
        ref.current = true;
    }, []);
};

export default useMount;