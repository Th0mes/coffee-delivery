import { Header } from './'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className={`mx-auto flex h-screen w-screen max-w-screen-xl flex-col`}>
      <Header className="relative" />
      <main className="h-full w-full">
        <Outlet />
      </main>

      <header></header>
    </div>
  )
}
