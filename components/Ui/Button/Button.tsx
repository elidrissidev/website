import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: 'bg-cyan-800 text-white hover:bg-teal-600',
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  Icon?: React.ReactNode
}

function Button({
  type = 'button',
  variant = 'primary',
  Icon,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        'flex items-stretch text-xs tracking-widest uppercase',
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
    </button>
  )
}

export default Button
