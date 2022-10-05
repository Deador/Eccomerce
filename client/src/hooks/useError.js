import {useState} from "react";

export const useFetching = (callback) => {
    const [err, setError] = useState("")
    const fetching = async () => {
        try {
            await callback();
        } catch (e) {
            setError(e.message)
        }
    };
    return [err, fetching]
}
