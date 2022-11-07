import React from 'react';

export default function Text(data: { body: string}) {
  const { body } = data;

  return (
    <div>{body}</div>
  );
}
