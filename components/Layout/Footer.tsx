import { IconGithub, IconLinkedin, IconTwitter } from '@/components/Icons'

type FooterProps = {
  navLinks: { title: string; href: string }[]
}

function Footer({ navLinks }: FooterProps) {
  return (
    <footer className="bg-zinc-800">
      <div className="flex flex-col items-center max-w-6xl px-8 mx-auto space-y-10 md:px-10 md:space-y-0 py-14 md:py-7 md:flex-row">
        <nav
          className="flex flex-col items-center space-y-8 text-white md:flex-1 md:flex-row md:space-y-0 md:space-x-10"
          aria-label="Footer navigation"
        >
          {navLinks.map(nav => (
            <a
              key={nav.title}
              href={nav.href}
              className="block text-xs tracking-widest uppercase"
            >
              {nav.title}
            </a>
          ))}
        </nav>
        <ul
          className="flex items-center space-x-4 text-white list-none"
          aria-label="Social links"
        >
          <li>
            <a
              href="https://github.com/elidrissidev"
              className="hover:text-teal-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">GitHub</span>
              <IconGithub aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/elidrissidev"
              className="hover:text-teal-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">Twitter</span>
              <IconTwitter aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/elidrissidev"
              className="hover:text-teal-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="sr-only">LinkedIn</span>
              <IconLinkedin aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
