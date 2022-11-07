import React from 'react';

import Link from 'next/link';

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

const fetchNavigation = async () => {
  const result = await fetch('http://next13.gwst13.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: getMenu,
      variables: {
        id: 'PRIMARY',
      },
    }),
    next: {
      revalidate: 10,
    },
  });

  const { data } = await result.json();

  return data;
};

export default async function Nav() {
  const { menuItems: { nodes: menuItems } } = await fetchNavigation() as NavInterface;

  return (
    <ul>
      {menuItems.map(({ id, label, uri }) => (
        <li key={id}>
          <Link href={uri}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
