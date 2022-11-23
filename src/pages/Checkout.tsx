import { Layout, CartItem } from '../components'

import {
  CurrencyDollarIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline'

export const Checkout = () => {
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-8">
        <section className="col-span-2 space-y-4">
          <h1 className="text-lg font-extrabold">Complete seu pedido</h1>
          <div className="space-y-4">
            <div className="rounded-md bg-slate-100 p-8"></div>
            <div className="space-y-8 rounded-md bg-slate-100 p-8">
              <div className="flex gap-x-2">
                <CurrencyDollarIcon className="h-8 w-8 text-purple" />
                <div>
                  <h2 className="text-xl">Pagamento</h2>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between space-x-8">
                {[
                  { Icon: CreditCardIcon, title: 'Cartão de crédito' },
                  { Icon: BuildingLibraryIcon, title: 'Cartão de débito' },
                  { Icon: BanknotesIcon, title: 'Dinheiro' },
                ].map(({ Icon, title }) => (
                  <div className="flex w-full items-center rounded-lg bg-slate-200 p-4 uppercase">
                    <Icon className="mr-4 h-6 w-6 text-purple" /> {title}
                  </div>
                ))}
              </div>
            </div>
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
