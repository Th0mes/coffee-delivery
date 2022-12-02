import * as z from 'zod'

export const CheckoutFormSchema = z.object({
  zipCode: z.string({
    required_error: 'precisa',
  }),
  street: z.string(),
  number: z.number(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string().max(2),
  paymentMethod: z.string(),
})
