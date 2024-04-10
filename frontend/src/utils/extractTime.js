export const extractTime = (isoDateString) => {
  const date = new Date(isoDateString)
  const hours = date.getHours()
  const minutes = date.getMinutes()

  // Determine if it's AM or PM
  const amPm = hours >= 12 ? 'pm' : 'am'

  // Convert hours from 24-hour format to 12-hour format
  const formattedHours = hours % 12 || 12

  // Pad minutes with leading zero if needed
  const formattedMinutes = String(minutes).padStart(2, '0')

  // Construct the time string with AM or PM
  const timeWithAmPm = `${formattedHours}:${formattedMinutes} ${amPm}`

  return timeWithAmPm
}
