import { useEffect, useState } from "react"

const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedVaue] = useState(value);
    
    useEffect(() => {
        const id = setTimeout(() => {
            console.log('Setting new timeout')
            setDebouncedVaue(value)
        }, delay);

        return () => {
            console.log('Clearing new timeout')
            clearTimeout(id)
        }

    }, [value, delay])

    return debouncedValue;
}

export default useDebounce;