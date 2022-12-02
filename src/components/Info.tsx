import { ReactNode } from 'react'

export const Info = ({ Icon, color, text }: InfoInterface) => (
  <div className="flex items-center gap-4">
    <div className={`${color} rounded-full p-2 text-white`}>{Icon}</div>
    <p>{text}</p>
  </div>
)
