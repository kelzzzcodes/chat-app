import React from 'react'
import LogoutButton from './LogoutButton'
import { useAuthContext } from '../../../context/AuthContext'
import SearchInput from './SearchInput'

const Header = () => {
  const { authUser: isAuthenticated } = useAuthContext()

  const [firstName, lastName] = isAuthenticated.fullName.split(' ')

  const initials = `${firstName.charAt(0).toUpperCase()}.${lastName
    .charAt(0)
    .toUpperCase()}`

  return (
    <div className="sticky top-0 z-50 flex flex-col gap-1 h-[30%]">
      <div className="bg-neutral flex items-center justify-between p-2">
        <div className="avatar items-center btn btn-ghost">
          <div className=" w-10 rounded-full">
            <img src={isAuthenticated.profilePic} />
          </div>
          <span className="ml-1"> {initials}</span>
        </div>
        <div className=" flex items-center">
          <LogoutButton />
        </div>
      </div>
      <SearchInput />

      <div className="divider px-3"></div>
    </div>
  )
}

export default Header
