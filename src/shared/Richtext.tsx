'use client';

import React, { forwardRef } from 'react';

interface RichtTextInterface {
  children: string,
  className?: string,
  /** desktopMargin: [top, right, bottom, left]. */
  desktopMargin?: [number, number, number, number]
  /** mobileMargin: [top, right, bottom, left]. */
  mobileMargin?: [number, number, number, number]
}

type RefType = HTMLDivElement;

const Richtext = forwardRef<RefType, RichtTextInterface>((props, ref?) => {
  const { children, className, desktopMargin, mobileMargin } = props;

  console.log(desktopMargin, mobileMargin);

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
