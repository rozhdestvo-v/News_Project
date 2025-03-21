import axios from "axios"
import { useEffect, useState } from "react"
import { INewsResponse } from "./types"


const api = axios.create({
  baseURL: 'https://newsapi.org/v2'
})

export const useNews = () => {
  const [data, setData] = useState<INewsResponse>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<unknown>('')
  const [refetchVar, setRefetchVar] = useState(false)

  const refetch = () => {
    setRefetchVar(!refetchVar)
  }

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true)
      try {
        const response = await api.get('/top-headlines?country=us&apiKey=752e520fa046426bac534b4d6fa3f420')
        setData(response.data)
        setIsLoading(false)
      } catch (err) {
        setError(err)
        setIsLoading(false)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
  }, [refetchVar])

  return {data, isLoading, error, refetch}
}