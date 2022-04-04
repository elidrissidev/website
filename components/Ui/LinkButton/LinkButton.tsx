import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'bg-cyan-800 text-white hover:bg-teal-600',
}

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants
  Icon?: React.ReactNode
}

function LinkButton({
  variant = 'primary',
  Icon,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={clsx(
        'inline-flex items-stretch text-xs tracking-widest uppercase',
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
}

export default LinkButton
