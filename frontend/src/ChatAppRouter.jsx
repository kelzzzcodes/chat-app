import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Home, Login, Signup } from './_root/pages'
import RootLayout from './_root/RootLayout'
import RequireAuth from './routes/RequireAuth'
import ExclusiveRoute from './routes/ExclusiveRoute'

const ChatAppRouter = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<ExclusiveRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default ChatAppRouter
