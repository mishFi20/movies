import { useState } from 'react';

function useRequest(request) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  async function showData() {
    try {
      setLoading(true)
      setError(false)
      const response = await request()
      setData(response)
      return response
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return {
    error,
    loading,
    data,
    showData
  }
}

export default useRequest;