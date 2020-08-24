import { useCallback } from "react"
import { useHttp } from "./http.hook"
import { useSuccess } from './success.hook'
import { useError } from "./error.hook"

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export const usePost = (link, body) => {
    toast.configure({
        autoClose: 3000,
        draggable: true
    })

    const { loading, request } = useHttp()
    const successMessage = useSuccess()
    const errorMessage = useError()

    const postData = useCallback(async () => {
        try {
            const data = await request(`http://188.120.255.68:18080/api/${link}`, "POST", ...body)
            successMessage(data.message)
        } catch (e) {
            errorMessage('Данные введены неверно!')
        }
    }, [request])

    return { loading, postData }
}
