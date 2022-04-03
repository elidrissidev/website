import React from 'react'

import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-8 mx-auto md:px-10 xl:max-w-6xl">{children}</main>
    </>
  )
}

export default Layout
