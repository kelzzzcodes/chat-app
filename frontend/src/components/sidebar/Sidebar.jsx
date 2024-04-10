import React from 'react'
import { Conversations, Header } from './ui'

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 h-full">
      <Header />

        <Conversations />
     
    </div>
  )
}

export default Sidebar
