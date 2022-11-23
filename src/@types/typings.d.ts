type Tag = 'Tradicional' | 'Especial' | 'Com leite' | 'Alcoólico' | 'Gelado'

interface Coffee {
  title: string
  description: string
  price: number
  quantity: number
  tags: string[]
  image: string
}
