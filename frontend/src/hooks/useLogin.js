import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'
import axios from 'axios'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const login = async ({ username, password }) => {
    const success = handleInputErrors({ username, password })
    if (!success) return

    setLoading(true)
    try {
      const url = '/api/auth/login'
      const data = { username, password }

      const response = await axios.post(url, data)

      const responseData = response.data

      if (responseData.error) {
        throw new Error(responseData.error)
      }

      localStorage.setItem('chat-user', JSON.stringify(responseData))
      setAuthUser(responseData)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, login }
}

export default useLogin

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error('Please fill in all fields')
    return false
  }

  return true
}
