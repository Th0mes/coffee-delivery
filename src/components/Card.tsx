import { PlusSmallIcon, MinusSmallIcon } from '@heroicons/react/20/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { Tag } from './Tag'

export const Card = ({
  title,
  description,
  price,
  tags,
  image,
  quantity,
}: Coffee) => (
  <div className="flex h-80 w-64 flex-col items-center justify-center rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl bg-slate-100 p-6">
    <img
      src={image}
      alt={title}
      className="relative bottom-10 h-32 w-32 bg-red-100"
    />

    <div className="flex gap-4">
      {tags.map((tag, id) => (
        <Tag key={id} title={tag} />
      ))}
    </div>

    <h2 className="font-extrabold">{title}</h2>
    <p className="text-center text-gray-500">{description}</p>

    <div className="grid w-full grid-cols-5">
      <p className="col-span-2 text-sm">
        R$ <span className="text-2xl font-extrabold">{price}</span>
      </p>
      <div className="col-span-3 grid grid-cols-3 items-center justify-between gap-2">
        <div className="col-span-2 flex h-full items-center justify-between rounded bg-slate-300">
          <button onClick={() => alert('Decrease coffee')}>
            <MinusSmallIcon className="h-6 w-6 text-purple" />
          </button>
          <input
            type="text"
            className="w-1/3 bg-transparent text-center"
            value={quantity}
          />
          <button onClick={() => alert('Increase coffee')}>
            <PlusSmallIcon className="h-6 w-6 text-purple" />
          </button>
        </div>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-dark"
          onClick={() => alert('Add to cart')}
        >
          <ShoppingCartIcon className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  </div>
)
