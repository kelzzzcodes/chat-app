import { Navigate, Outlet } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const ExclusiveRoute = () => {
  const { authUser: isAuthenticated } = useAuthContext()

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />
}

export default ExclusiveRoute
