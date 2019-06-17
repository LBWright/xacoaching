import { useEffect, useState } from 'react'
import axios from 'axios'

const useMany = resource => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const executeQuery = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`/api/${resource}`)
                setLoading(false)
                setData(response.data)
            } catch (err) {
                setLoading(false)
                setError(err)
                console.log(err)
            }
        }
        executeQuery()
    }, [resource])
    return [data, loading, error]
}

export default useMany
