import React from 'react';

import Link from 'next/link';

interface NavInterface {
  menuItems: {
    nodes: {
      id: string
      label: string
      uri: string
    }[]
  }
}

export default function Nav({ menuItems }: NavInterface) {
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
