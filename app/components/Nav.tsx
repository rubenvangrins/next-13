import React from 'react';

import Link from 'next/link';

import { fetchAPI } from '../../lib/fetch-client';
import { getMenu } from '../../lib/query/pages.data';

interface NavInterface {
  menuItems: {
    nodes: {
      id: string
      label: string
      uri: string
    }[]
  }
}

export const revalidate = 1;

export default async function Nav() {
  const { menuItems } = await fetchAPI(getMenu, { id: 'PRIMARY' }) as NavInterface;

  return (
    <ul>
      {menuItems.nodes.map(({ id, label, uri }) => (
        <li key={id}>
          <Link href={uri}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
