"use client"

import Link from "next/link"
import React from "react"

// Universal link component that handles both internal and external links
const UniversalLink = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  // Check if link is internal (starts with /)
  const internal = /^\/(?!\/)/.test(to)

  // Use Next.js Link for internal links, and <a> for external
  if (internal) {
    return (
      <Link href={to} {...other}>
        {children}
      </Link>
    )
  }

  return (
    <div className="link-parent">
      <a href={to} target="_blank" rel="noopener noreferrer" {...other}>
        {children}
      </a>
    </div>
  )
}

UniversalLink.defaultProps = {
  activeClassName: "link-active",
  className: "link",
}

export default UniversalLink
