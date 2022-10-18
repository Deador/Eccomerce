import {useState} from "react";

export const useFetching = (callback) => {
    const [err, setError] = useState("");
    const [loader, setLoader] = useState(false)
    const fetching = async () => {
        try {
            setLoader(true);
            await callback();
        } catch (e) {
            setError(e.message)
        } finally {
            setLoader(false);
        }
    };
    return [err, fetching, loader];
}
