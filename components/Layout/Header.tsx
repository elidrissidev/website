import { useRouter } from 'next/router'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import clsx from 'clsx'

import { IconHamburger, IconClose } from '@/components/Icons'

type HeaderProps = {
  navLinks: { title: string; href: string }[]
}

function Header({ navLinks }: HeaderProps) {
  const { pathname } = useRouter()
  return (
    <header className="flex justify-end p-8 mx-auto md:px-10 xl:max-w-6xl md:pt-16 md:pb-12">
      <nav
        className="hidden space-x-10 md:flex text-zinc-800"
        aria-label="Primary navigation"
      >
        {navLinks.map(nav => (
          <Link key={nav.title} href={nav.href} passHref>
            <a
              className={clsx('block text-xs tracking-widest uppercase', {
                'text-teal-600': pathname === nav.href,
              })}
              aria-current={pathname === nav.href ? 'page' : undefined}
            >
              {nav.title}
            </a>
          </Link>
        ))}
      </nav>
      <Menu
        as="nav"
        className="relative md:hidden"
        aria-label="Mobile navigation"
      >
        {({ open }) => (
          <>
            <Menu.Button className="flex justify-center items-center w-6 h-6 focus:outline-none focus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-600">
              <span className="sr-only">Toggle navigation menu</span>
              {open ? (
                <IconClose aria-hidden="true" />
              ) : (
                <IconHamburger aria-hidden="true" />
              )}
            </Menu.Button>
            <Menu.Items className="absolute right-0 z-10 py-4 mt-6 w-52 text-center text-white bg-zinc-800 focus:outline-none">
              {navLinks.map(nav => (
                <Menu.Item key={nav.title}>
                  {({ active }) => (
                    <Link href={nav.href} passHref>
                      <a
                        className={clsx(
                          'block p-4 text-xs tracking-widest uppercase',
                          { 'bg-zinc-700': active }
                        )}
                        aria-current={
                          pathname === nav.href ? 'page' : undefined
                        }
                      >
                        {nav.title}
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </>
        )}
      </Menu>
    </header>
  )
}

export default Header
