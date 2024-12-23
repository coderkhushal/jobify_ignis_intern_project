"use client"
import { useState, useEffect, useCallback } from 'react'
import axios, { AxiosResponse } from 'axios'

export default function useQuery<T>(url: string, params?: Record<string, string>) {
  const [data, setData] = useState<T>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleError = (error: any) => {
    setError(error.response?.data.err)
    setLoading(false)
  }

  // this function is calling useCallback to stop an infinite loop since it is in the dependency array of useEffect
  const runQuery = useCallback(() => {
    const handleSuccess = (res: AxiosResponse<T>) => {
      setData(res.data)
      setLoading(false)
    }

    setLoading(true)
    axios.get<T>(url,{ params: params}).then(handleSuccess).catch(handleError)
  }, [url])

  useEffect(() => {
    runQuery()
  }, [runQuery])

  return { data, loading, error, refetch: runQuery }
}
