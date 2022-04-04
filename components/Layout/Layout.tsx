import React from 'react'

import Header from './Header'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-8 mx-auto max-w-6xl md:px-10">{children}</main>
    </>
  )
}

export default Layout
