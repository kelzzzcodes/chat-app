import React, { useState } from 'react'
import toast from 'react-hot-toast'
import useConversation from '../zustand/useConversation'
import axios from 'axios'

const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversation()

  const sendMessage = async ({ message }) => {
    setLoading(true)
    try {
      const url = `/api/messages/send/${selectedConversation._id}`
      const data = { message }

      const response = await axios.post(url, data)

      const responseData = response.data

      if (responseData.error) {
        throw new Error(responseData.error)
      }
      setMessages([...messages, responseData])
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, sendMessage }
}

export default useSendMessage
