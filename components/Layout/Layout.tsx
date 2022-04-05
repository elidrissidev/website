import React from 'react'

import Header from './Header'
import Footer from './Footer'

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Contact Me', href: 'mailto:mohamed@elidrissi.dev' },
]

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <main className="px-8 pb-20 mx-auto max-w-6xl md:px-10">{children}</main>
      <Footer navLinks={navLinks} />
    </>
  )
}

export default Layout
