import { Layout, Tag, Card } from '../components'

import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { Coffee } from '../assets'
import { useState } from 'react'
import { useCoffeeStore } from '../hooks/useCoffeeStore'

interface ItemInterface {
  text: string
  color: string
  Icon: React.ReactElement
}

const Item = ({ Icon, color, text }: ItemInterface) => (
  <div className="flex gap-4">
    <div className={`${color} rounded-full p-2 text-white`}>{Icon}</div>
    <p>{text}</p>
  </div>
)

const ItemsData: ItemInterface[][] = [
  [
    {
      Icon: <ShoppingCartIcon className="h-4 w-4" />,
      color: 'bg-yellow-dark',
      text: 'Compra simples e segura',
    },
    {
      Icon: <ShoppingCartIcon className="h-4 w-4" />,
      color: 'bg-yellow',
      text: 'Entrega rápida e rastreada',
    },
  ],
  [
    {
      Icon: <ShoppingCartIcon className="h-4 w-4" />,
      color: 'bg-purple-dark',
      text: 'Embalagem mantém o café intacto',
    },
    {
      Icon: <ShoppingCartIcon className="h-4 w-4" />,
      color: 'bg-purple',
      text: 'O café chega fresquinho até você',
    },
  ],
]

const TagsData: Tag[] = [
  'Tradicional',
  'Especial',
  'Com leite',
  'Alcoólico',
  'Gelado',
]

export const Home = () => {
  const { filteredTags, addFilteredTags, removeFilteredTags } = useCoffeeStore()

  function handleFilteredTags(tag: Tag) {
    if (filteredTags.includes(tag)) {
      removeFilteredTags(tag)
    } else {
      addFilteredTags(tag)
    }
  }

  return (
    <Layout>
      <section className="grid grid-cols-5 items-center py-12">
        <div className="col-span-3 space-y-16">
          <div className="space-y-8">
            <h1 className="text-5xl font-extrabold">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-lg">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="grid grid-cols-2">
            {ItemsData.map((group, groupId) => (
              <div key={groupId} className="flex flex-col gap-4">
                {group.map(({ Icon, color, text }, itemId) => (
                  <Item key={itemId} Icon={Icon} color={color} text={text} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <img src={Coffee} alt="Coffee" />
        </div>
      </section>
      <section className="flex flex-col">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">Nossos cafés</h1>
          <div className="flex items-center space-x-4">
            {TagsData.map((tag: Tag) => (
              <Tag
                key={tag}
                title={tag}
                pointer
                outline={!filteredTags.includes(tag)}
                onClick={() => handleFilteredTags(tag)}
              />
            ))}
          </div>
        </div>
        <div className="grid w-full grid-cols-4 justify-items-center gap-y-12">
          {filteredTags.length > 0 ? (
            <>
              {[
                {
                  tags: ['Tradicional'],
                },
                {
                  tags: ['Tradicional'],
                },
                {
                  tags: ['Tradicional'],
                },
              ]
                // .filter(({ tags }) =>
                //   tags.some((x) => x.includes(filteredTags))
                // )
                // .filter(({ tags }) =>
                //   filteredTags.some((x) => x.includes(tags))
                // )
                .map((coffee, id) => (
                  <Card
                    key={id}
                    image={''}
                    tags={coffee.tags}
                    title={'Expresso Tradicional'}
                    description={
                      'O tradicional café feito com água quente e grãos moídos'
                    }
                    price={9.9}
                    quantity={1}
                  />
                ))}
            </>
          ) : (
            <>
              {[
                {
                  tags: ['Tradicional'],
                },
                {
                  tags: ['Tradicional'],
                },
                {
                  tags: ['Tradicional'],
                },
              ].map((coffee, id) => (
                <Card
                  key={id}
                  image={''}
                  tags={coffee.tags}
                  title={'Expresso Tradicional'}
                  description={
                    'O tradicional café feito com água quente e grãos moídos'
                  }
                  price={9.9}
                  quantity={1}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </Layout>
  )
}
