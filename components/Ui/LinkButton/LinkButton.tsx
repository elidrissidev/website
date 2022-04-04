import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'bg-cyan-800 text-white hover:bg-teal-600 focus:ring-teal-800',
  secondary:
    'bg-white text-zinc-800 border border-zinc-800 hover:bg-zinc-800 hover:text-white focus:ring-zinc-800',
}

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants
  Icon?: React.ReactNode
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ variant = 'primary', Icon, className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={clsx(
        'inline-flex items-stretch text-xs tracking-widest uppercase focus:outline-none focus:ring focus:ring-opacity-50',
        variants[variant],
        className
      )}
      {...props}
    >
      {Icon && (
        <span className="p-4 bg-black bg-opacity-20" aria-hidden="true">
          {Icon}
        </span>
      )}
      <span className="px-8 py-4">{children}</span>
    </a>
  )
)

LinkButton.displayName = 'LinkButton'

export default LinkButton
