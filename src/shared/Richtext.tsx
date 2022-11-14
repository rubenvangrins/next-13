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

  return (
    <div
      className={`richtext ${className}`}
      ref={ref}
      dangerouslySetInnerHTML={{ __html: children }}
      style={{
        '--desktop-margin-top': desktopMargin ? desktopMargin[0] : 0,
        '--desktop-margin-right': desktopMargin ? desktopMargin[1] : 0,
        '--desktop-margin-bottom': desktopMargin ? desktopMargin[2] : 0,
        '--desktop-margin-left': desktopMargin ? desktopMargin[3] : 0,
        '--mobile-margin-top': mobileMargin ? mobileMargin[0] : 0,
        '--mobile-margin-right': mobileMargin ? mobileMargin[1] : 0,
        '--mobile-margin-bottom': mobileMargin ? mobileMargin[2] : 0,
        '--mobile-margin-left': mobileMargin ? mobileMargin[3] : 0,
      }}
    />
  );
});

Richtext.displayName = 'SharedRichtext';
export default Richtext;
