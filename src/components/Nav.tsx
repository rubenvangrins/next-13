'use client';

import React from 'react';

import Link from 'next/link';
import styled from 'styled-components';

export interface NavInterface {
  menuItems: {
    id: string
    label: string
    uri: string
  }[]
}

export default function Nav({ menuItems }: NavInterface) {
  return (
    <StyledUL>
      {menuItems.map(({ id, label, uri }) => (
        <li key={id}>
          <Link href={uri}>{label}</Link>
        </li>
      ))}
    </StyledUL>
  );
}

const StyledUL = styled.ul`
  display: flex;
  column-gap: 1rem;
`;
