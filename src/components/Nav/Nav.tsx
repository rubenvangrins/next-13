'use client';

import React from 'react';

import Link from 'next/link';

import styles from './Nav.module.scss';

export interface NavInterface {
  menuItems: {
    id: string
    label: string
    uri: string
  }[]
}

export default function Nav({ menuItems }: NavInterface) {
  return (
    <ul className={styles.nav}>
      {menuItems.map(({ id, label, uri }) => (
        <li key={id}>
          <Link href={uri}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
