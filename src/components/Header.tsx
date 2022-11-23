import { Logo } from '../assets'

import { MapPinIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-8">
      <Logo />
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-md bg-purple-light p-2">
          <MapPinIcon className="h-6 w-6 text-purple" />
          <span className="text-purple-dark">São Paulo, SP</span>
        </div>
        <div className="rounded-md bg-yellow-light p-2">
          <ShoppingCartIcon className="h-6 w-6 text-yellow-dark" />
        </div>
      </div>
    </header>
  )
}
