import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import useConversation from '../zustand/useConversation'
import axios from 'axios'

const useGetMessages = () => {
  const [loading, setLoading] = useState()
  const { messages, setMessages, selectedConversation } = useConversation()

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true)
      try {
        const url = `/api/messages/${selectedConversation._id}`

        const response = await axios.get(url)

        const responseData = response.data

        if (responseData.error) {
          throw new Error(responseData.error)
        }
        setMessages(responseData)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setLoading(false)
      }
    }
    if (selectedConversation?._id) getMessages()
  }, [selectedConversation?._id, setMessages])
  return { loading, messages }
}

export default useGetMessages
