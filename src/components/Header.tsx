import { Link } from 'react-router-dom'

import { Logo } from '../assets'

import { MapPinIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

export const Header = (props: React.HTMLAttributes<HTMLElement>) => {
  return (
    <header className="flex items-center justify-between py-8">
      <Link to="/">
        <Logo />
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-md bg-purple-light p-2">
          <MapPinIcon className="h-6 w-6 text-purple" />
          <span className="text-purple-dark">São Paulo, SP</span>
        </div>
        <Link to="/checkout">
          <div className="relative rounded-md bg-yellow-light p-2">
            <ShoppingCartIcon className="h-6 w-6 text-yellow-dark" />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-dark text-sm text-white">
              3
            </span>
          </div>
        </Link>
      </div>
    </header>
  )
}
