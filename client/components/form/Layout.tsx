import { ReactNode } from 'react'

interface LayoutProps {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <main>{children}</main>
    </div>
  )
}

export default Layout
