import axios from 'axios'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

const useLogout = () => {
  const [loading, setLoading] = useState()
  const { authUser, setAuthUser } = useAuthContext()

  const logout = async () => {
    setLoading(true)
    try {
      const url = '/api/auth/logout'

      const response = await axios.post(url)
      const responseData = response.data

      if (responseData.error) {
        throw new Error(responseData.error)
      }

      localStorage.removeItem('chat-user')
      setAuthUser(null)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, logout }
}

export default useLogout
