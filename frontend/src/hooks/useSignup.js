import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'
// import { useAuthContext } from '../context/AuthContext'

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    })
    if (!success) return

    setLoading(true)
    try {
      const url = '/api/auth/signup'
      const data = { fullName, username, password, confirmPassword, gender }

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
  return { signup, loading }
}

export default useSignup

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill all the fields')
    return false
  }

  if (password !== confirmPassword) {
    toast.error('Passwords do not match')
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters')
    return false
  }
  return true
}
