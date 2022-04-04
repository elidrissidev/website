import React from 'react'

function IconDownArrows(props: React.SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" {...props}>
      <g fill="none" fillRule="evenodd" stroke="currentColor">
        <path d="M0 9l8 4 8-4" />
        <path opacity=".5" d="M0 5l8 4 8-4" />
        <path opacity=".25" d="M0 1l8 4 8-4" />
      </g>
    </svg>
  )
}

export default IconDownArrows
