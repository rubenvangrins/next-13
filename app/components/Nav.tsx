import React from 'react'
import Link from 'next/link'
import { getMenu } from '../../lib/query/pages.data'
import { fetchAPI } from '../../lib/fetch-client'

interface NavInterface {
  menuItems: {
    nodes: {
      id: string
      label: string
      uri: string
    }[]
  }
}

const Nav = async () => {
  const { menuItems } = await fetchAPI(getMenu, {id: 'PRIMARY'}) as NavInterface

  return (
    <ul>
      {menuItems.nodes.map(({ id, label, uri }) => (
        <li key={id}>
          <Link href={uri}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav