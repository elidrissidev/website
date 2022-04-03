import Image from 'next/image'
import { useRouter } from 'next/router'
import { Menu } from '@headlessui/react'
import clsx from 'clsx'

import IconHamburger from '@/assets/icons/hamburger.svg'
import IconClose from '@/assets/icons/close.svg'

const navigation = [
  { title: 'Home', href: '/' },
  { title: 'Portfolio', href: '#portfolio' },
  { title: 'Contact Me', href: '#contact' },
]

function Header() {
  const { pathname } = useRouter()
  return (
    <header className="flex justify-end p-8 mx-auto md:px-10 xl:max-w-6xl md:pt-16 md:pb-12">
      <div className="hidden space-x-10 md:flex text-zinc-800">
        {navigation.map(nav => (
          <a
            key={nav.title}
            href={nav.href}
            className={clsx('block text-xs tracking-widest uppercase', {
              'text-teal-600': pathname === nav.href,
            })}
            aria-current={pathname === nav.href ? 'page' : undefined}
          >
            {nav.title}
          </a>
        ))}
      </div>
      <Menu as="div" className="relative md:hidden">
        {({ open }) => (
          <>
            <Menu.Button className="flex justify-center items-center w-6 h-6 focus:outline-none focus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-600">
              <span className="sr-only">Toggle navigation menu</span>
              <Image
                src={open ? IconClose : IconHamburger}
                alt=""
                unoptimized
              />
            </Menu.Button>
            <Menu.Items className="absolute right-0 z-10 py-4 mt-6 w-52 text-center text-white bg-zinc-800 focus:outline-none">
              {navigation.map(nav => (
                <Menu.Item key={nav.title}>
                  {({ active }) => (
                    <a
                      href={nav.href}
                      className={clsx(
                        'block p-4 text-xs tracking-widest uppercase',
                        { 'bg-zinc-700': active }
                      )}
                      aria-current={pathname === nav.href ? 'page' : undefined}
                    >
                      {nav.title}
                    </a>
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