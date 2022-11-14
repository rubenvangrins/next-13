'use client';

import React, { forwardRef } from 'react';

interface RichtTextInterface {
  children: string,
  className?: string,
}

type RefType = HTMLDivElement;

const Richtext = forwardRef<RefType, RichtTextInterface>((props, ref?) => {
  const { children, className } = props;

  return (
    <div
      className={`richtext ${className}`}
      ref={ref}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
});

Richtext.displayName = 'SharedRichtext';
export default Richtext;
