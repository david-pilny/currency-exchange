import { useState, useEffect } from 'react'
import axios from 'axios'

const fetchNews = (date) => {
  const apiKey = '<key>'
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const options = {
    method: 'GET',
    url: `https://reuters-business-and-financial-news.p.rapidapi.com/article-date/${date}`,
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com',
    },
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
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

export default fetchNews
