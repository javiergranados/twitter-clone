import { v4 as uuidv4 } from 'uuid'
import { buttons } from '../../constants'

function ButtonPanel() {
  return (
    <div className="flex justify-between mt-3 text-twitterGray">
      {buttons.map(button => (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 transition-colors duration-300 cursor-pointer fill-current hover:text-twitterBlue"
          key={uuidv4()}
        >
          {button}
        </svg>
      ))}
    </div>
  )
}

export default ButtonPanel
