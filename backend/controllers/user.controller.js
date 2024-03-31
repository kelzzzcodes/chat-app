import User from '../models/user.model.js'

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id

    //  find all users in the database except the user that is logged in. That way you won't see your user profile on the sidebar so you can't send message to yourself
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select('-password')

    res.status(200).json(filteredUsers)
  } catch (error) {
    console.error('Error in getUsersForSidebar:', error.message)
    res.status(500).json({ error: 'Internal server error ' })
  }
}
