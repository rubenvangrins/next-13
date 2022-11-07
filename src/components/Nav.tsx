import React from 'react';

import Link from 'next/link';

export interface NavInterface {
  menuItems: {
    id: string
    label: string
    uri: string
  }[]
}

export default function Nav({ menuItems }: NavInterface) {
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
