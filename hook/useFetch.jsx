import { useState, useEffect } from 'react'
import axios from 'axios'

const rapidApiKey = ""

const useFetch = (endpoint, query) => {

    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState(false)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
            'X-RapidAPI-Key': '6a00472daemsh20bdf861085d6b0p1114bejsn715b6ce2c8d3',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };


    const fetchData = async () => {
        setisLoading(true)
        try {
          await axios.request(options).then((res) => {
                if (res.data.data.length > 0) {
                    setData(res.data.data)
                    setisLoading(false)
                }
            });
        } catch (e) {
            setError(true)
        } finally {
            setisLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setisLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }

}

export default useFetch;
