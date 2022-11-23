import { TrashIcon } from '@heroicons/react/24/outline'

type CartItemProps = Omit<Coffee, 'tags' | 'description'>

export const CartItem = ({ title, price, quantity, image }: CartItemProps) => (
  <div className="flex justify-between">
    <div className="flex items-center gap-4">
      <img src={image} alt={title} className="h-16 w-16 bg-purple-light" />
      <div className="space-y-2">
        <h2>{title}</h2>
        <div className="flex gap-2">
          <button className="flex items-center rounded bg-slate-200 p-2 text-sm uppercase">
            Counter
          </button>
          <button className="flex items-center rounded bg-slate-200 p-2 text-sm uppercase">
            <TrashIcon className="mr-2 h-4 w-4 text-purple" /> Remover
          </button>
        </div>
      </div>
    </div>
    <p className="flex h-full flex-col justify-self-start text-sm font-extrabold">
      {new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency',
      }).format(price)}
    </p>
  </div>
)
