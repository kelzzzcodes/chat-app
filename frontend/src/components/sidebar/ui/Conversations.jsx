import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../../hooks/useGetConversation'
import { getRandomEmoji } from '../../../utils/emojis'

const Conversations = () => {
  const { loading, conversations } = useGetConversation()
  console.log('conversations:', conversations)
  return (
    <div className="px-4 py-8 h-[70%] flex flex-col  overflow-y-scroll">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  )
}

export default Conversations
