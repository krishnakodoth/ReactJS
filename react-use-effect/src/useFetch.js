import { useEffect, useState, useRef, useLayoutEffect } from 'react'

const useCallbackRef = (callBack) => {
    const callBackRef = useRef(callBack);
    useLayoutEffect(() => {
        callBackRef.current = callBack;
    }, [callBack]);

    return callBackRef;
}

export const useFetch = (options) => {
    const [data, setdata] = useState(null);
    const savedOnSuccess = useCallbackRef(options.onSuccess);
    useEffect(() => {
        let isCancelled = false;
        console.log("useFetch useEffect");
        if (options.url) {
            fetch(options.url)
                .then((response) => response.json())
                .then((data) => {
                    if (!isCancelled) {
                        // options.onSuccess();
                        savedOnSuccess.current();
                        setdata(data);
                    }
                });
            return () => {
                isCancelled = true;
            }
        }
    }, [options.url, savedOnSuccess]);
    return {
        data
    }
}
