import React from 'react'
import Link from 'next/link'

export default function Nav() {
  return (
    <ul>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about-dark">About</Link></li>
      <li><Link href="/about">404</Link></li>
    </ul>
  )
}