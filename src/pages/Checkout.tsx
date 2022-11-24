import { Children, useState } from 'react'

import { Layout, CartItem, Input } from '../components'

import {
  CurrencyDollarIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  BanknotesIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { patterns } from '../utils/patterns'

interface PaymentMethodsProps {
  id: string
  title: string
  Icon: (
    props: React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  ) => JSX.Element
}

const PaymentMethods: PaymentMethodsProps[] = [
  { id: 'creditCard', title: 'Cartão de crédito', Icon: CreditCardIcon },
  { id: 'debitCard', title: 'Cartão de débito', Icon: BuildingLibraryIcon },
  { id: 'money', title: 'Dinheiro', Icon: BanknotesIcon },
]

const CheckoutCard = ({
  title,
  description,
  Icon,
  iconColor,
  children,
  ...props
}: {
  title: string
  description: string
  Icon: (
    props: React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
      titleId?: string | undefined
    }
  ) => JSX.Element
  iconColor: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div className="space-y-8 rounded-md bg-slate-100 p-8">
    <div className="flex gap-x-2">
      <Icon className={`h-8 w-8 ${iconColor}`} />
      <div>
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    <div {...props}>{children}</div>
  </div>
)

export const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('')

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-8">
        <section className="col-span-2 space-y-4">
          <h1 className="text-lg font-extrabold">Complete seu pedido</h1>
          <div className="space-y-4">
            <CheckoutCard
              title="Endereço de Entrega"
              description="Informe o endereço onde deseja receber seu pedido"
              Icon={MapPinIcon}
              iconColor="text-yellow-dark"
              className="grid grid-cols-3 grid-rows-4 gap-4 overflow-hidden"
            >
              <Input placeholder="CEP" mask={patterns.CEP} />
              <Input placeholder="Rua" className="col-span-3 row-start-2" />
              <Input placeholder="Número" className="row-start-3" />
              <Input
                placeholder="Complemento"
                optional
                className="col-span-2 row-start-3"
              />
              <Input placeholder="Bairro" className="row-start-4" />
              <div className="col-span-2 row-start-4 grid grid-cols-6 gap-4">
                <Input placeholder="Cidade" className="col-span-4" />
                <Input placeholder="UF" className="col-span-2" maxLength={2} />
              </div>
            </CheckoutCard>
            <CheckoutCard
              title="Pagamento"
              description="O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar"
              Icon={CurrencyDollarIcon}
              iconColor="text-purple"
              className="flex items-center justify-between space-x-8"
            >
              {PaymentMethods.map(({ id, title, Icon }) => (
                <div
                  key={id}
                  className={`flex w-full cursor-pointer items-center rounded-lg p-4 uppercase transition-transform ${
                    paymentMethod === id
                      ? 'scale-105 border border-purple bg-purple-light'
                      : 'bg-slate-200'
                  }`}
                  onClick={() => setPaymentMethod(id)}
                >
                  <Icon className="mr-4 h-6 w-6 text-purple" /> {title}
                </div>
              ))}
            </CheckoutCard>
          </div>
        </section>
        <section className="space-y-4">
          <h1 className="text-lg font-extrabold">Cafés selecionados</h1>
          <div className="space-y-6 rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl bg-slate-100 p-8">
            {Array.from(Array(3)).map(() => (
              <>
                <CartItem
                  title={'Expresso Tradicional'}
                  image={''}
                  price={9.9}
                  quantity={1}
                />
                <div className="h-0.5 w-full gap-4 rounded bg-gray-200" />
              </>
            ))}
            <div>
              {[
                { title: 'Total de itens', value: 29.7 },
                { title: 'Entrega', value: 3.5 },
                { title: 'Total', value: 33.2, total: true },
              ].map(({ title, value, total }, id) => (
                <div
                  key={id}
                  className={`flex items-center justify-between space-y-2 ${
                    total && 'text-lg font-extrabold'
                  }`}
                >
                  <h3>{title}</h3>
                  <p>
                    {new Intl.NumberFormat('pt-BR', {
                      currency: 'BRL',
                      style: 'currency',
                    }).format(value)}
                  </p>
                </div>
              ))}
            </div>
            <button className="w-full rounded bg-yellow py-3 text-center uppercase text-white">
              Confirmar pedido
            </button>
          </div>
        </section>
      </div>
    </Layout>
  )
}
