import { useState, useCallback, useEffect } from "react"
import { useHttp } from "./http.hook"

export const useGet = (link) => {
    const { loading, request } = useHttp()
    const [result, setResult] = useState({result: {content: []}})

    const getData = useCallback(async () => {
        try {
            const fetched = await request(`http://188.120.255.68:18080/api/${link}`, "GET", null)
            setResult(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        getData()
    }, [getData])

    return { loading, result }
}
