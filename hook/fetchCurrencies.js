import { useState, useEffect } from 'react'
import axios from 'axios'

const fetchCurrencies = () => {
  const apiKey = '<rapid api key>'
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest`,
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host':
        'currency-conversion-and-exchange-rates.p.rapidapi.com',
    },
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      console.log('fetch')
      const response = await axios.request(options)
      setData(response.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      console.log(error)
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return { data, isLoading, error, refetch }
}

export default fetchCurrencies
