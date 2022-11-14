import React from 'react';

import Richtext from '../../shared/Richtext';

export default function Text(data: { body: string}) {
  const { body } = data;

  return (
    <Richtext>{body}</Richtext>
  );
}
