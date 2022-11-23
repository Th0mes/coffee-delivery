type Tag = 'Tradicional' | 'Especial' | 'Com leite' | 'Alcoólico' | 'Gelado'

interface Coffee {
  image: string
  tags: string[]
  title: string
  description: string
  price: string
  quantity: number
}
