import React from 'react'
import { Header } from './'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-col">
      <Header />
      {children}
    </div>
  )
}
