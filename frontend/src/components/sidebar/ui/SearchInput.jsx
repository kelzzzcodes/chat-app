import { useState } from 'react'
import toast from 'react-hot-toast'
import { IoSearchSharp } from 'react-icons/io5'
import useConversation from '../../../zustand/useConversation'
import useGetConversation from '../../../hooks/useGetConversation'

//  try and make the search return a list of all users with that occurence of the search so that once you click on it it will take you to you and the users chat . this means you will need to create a drop down below the search input to list the searched users 

const SearchInput = () => {
  const [search, setSearch] = useState('')

  const { setSelectedConversation } = useConversation()

  const { conversations } = useGetConversation()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    if (search.length < 3) {
      return toast.error('Search term must be at least 3 characters long')
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase()),
    )

    if (conversation) {
      setSelectedConversation(conversation)
      setSearch('')
    } else toast.error('No such user found!')
  }

  return (
    <form className=" flex items-center gap-2 px-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  )
}

export default SearchInput
