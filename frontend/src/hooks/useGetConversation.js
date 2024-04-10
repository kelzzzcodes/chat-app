import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetConversation = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true)
      try {
        const url = '/api/users'
        const response = await axios.get(url)
        const responseData = response.data
        console.log(responseData)
        if (responseData.error) {
          throw new Error(responseData.error)
        }

        setConversations(responseData)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    getConversations()
  }, [])

  return { loading, conversations }
}

export default useGetConversation
