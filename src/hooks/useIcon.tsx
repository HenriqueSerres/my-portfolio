import { IconType } from 'react-icons'
import { myIcons } from '../lib/icons'

// interface interProject {
//   name: string
//   img: string
//   description: string
//   url: string
//   tools: string[]
//   git: string
// }

export const useIcon = (img: string) => {
  const iconMatch = myIcons.find((icon: IconType) => icon.toString() === img)
  return iconMatch
}
