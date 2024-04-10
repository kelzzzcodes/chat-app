import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation'

import notificationSound from '../assets/sounds/notifications.mp3'
const useListenMessages = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages } = useConversation()

  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      newMessage.shouldShake = true
      const sound = new Audio(notificationSound)
      sound.play()
      setMessages([...messages, newMessage])
    })
    return () => socket?.off('newMessage')
  }, [setMessages, socket, messages])
}

export default useListenMessages
