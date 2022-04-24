import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchReq = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
        }
        fetchReq()
    }, [url])
    return{ data }
}