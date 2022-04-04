import React from 'react'

function IconHamburger(props: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="13" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
      </g>
    </svg>
  )
}

export default IconHamburger
