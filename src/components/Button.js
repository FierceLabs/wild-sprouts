"use client"

import React from "react"
import UniversalLink from "./UniversalLink"

export default function Button({ href, className, button, onClick, children }) {
  return (
    <>
      {button ? (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      ) : (
        <UniversalLink to={href}>
          <div className={className}>{children}</div>
        </UniversalLink>
      )}
    </>
  )
}
