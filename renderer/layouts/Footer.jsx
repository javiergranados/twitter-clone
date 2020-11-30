import Link from 'next/link'
import { useRouter } from 'next/router'
import { selectedMenuIcons, menuIcons } from '../constants/icons'

function Footer() {
  const router = useRouter()

  const renderIcon = name => {
    const selected = router.pathname === name
    return (
      <Link href={name}>
        <a className="flex items-center justify-center w-1/4 py-3 cursor-default">
          <svg
            viewBox="0 0 24 24"
            className={`cursor-pointer fill-current text-twitter${
              (selected && 'Blue') || 'Gray'
            } w-7 h-7 hover:text-twitterBlue`}
          >
            {(selected && selectedMenuIcons[name]) || menuIcons[name]}
          </svg>
        </a>
      </Link>
    )
  }

  return (
    <footer className="flex border-t border-twitterGray">
      {renderIcon('/home')}
      {renderIcon('/search')}
      {renderIcon('/notifications')}
      {renderIcon('/messages')}
    </footer>
  )
}

export default Footer
