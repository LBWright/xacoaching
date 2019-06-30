import { useEffect, useState } from 'react'
import axios from 'axios'

// Make this more reusable by adding resource id parameter
// eventually make add query string object or array param
const useData = ({ resource, id }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    let url = `/api/${resource}`

    if (id) {
        url += `/${id}`
    }

    useEffect(() => {
        const executeQuery = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url)
                setLoading(false)
                setData(response.data)
            } catch (err) {
                setLoading(false)
                setError(err)
                console.log(err)
            }
        }
        executeQuery()
    }, [url])
    return [data, loading, error]
}

export default useData
