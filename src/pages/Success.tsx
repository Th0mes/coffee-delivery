import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Info } from '../components'
import { DeliveryMan } from '../assets'

const InfosData: InfoInterface[] = [
  {
    Icon: <ShoppingCartIcon className="h-4 w-4" />,
    color: 'bg-purple',
    text: (
      <>
        Entrega em{' '}
        <span className="font-bold">Rua João Daniel Martinelli, 102</span>
        <br />
        Farrapos - Porto Alegre, RS
      </>
    ),
  },
  {
    Icon: <ShoppingCartIcon className="h-4 w-4" />,
    color: 'bg-yellow',
    text: (
      <>
        Previsão de entrega
        <br />
        <span className="font-bold">20 min - 30 min </span>
      </>
    ),
  },
  {
    Icon: <ShoppingCartIcon className="h-4 w-4" />,
    color: 'bg-yellow-dark',
    text: (
      <>
        Pagamento na entrega
        <br />
        <span className="font-bold">Cartão de Crédito</span>
      </>
    ),
  },
]

export const Success = () => {
  return (
    <div className="flex h-full flex-col justify-center space-y-10">
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold text-yellow-dark">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-lg">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>

      <div className="grid grid-cols-2 items-center">
        <div className="rounded-box relative h-full w-full bg-gradient-to-br from-yellow-dark to-purple-dark p-0.5">
          <div className="rounded-box flex h-full w-full flex-col items-start justify-center space-y-6 bg-white p-10">
            {InfosData.map(({ text, color, Icon }, id) => (
              <Info key={id} text={text} color={color} Icon={Icon} />
            ))}
          </div>
        </div>

        <div className="mx-auto">
          <DeliveryMan />
        </div>
      </div>
    </div>
  )
}
