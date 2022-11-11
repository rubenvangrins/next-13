'use client';

import React, { forwardRef } from 'react';

import styled from 'styled-components';

import { minTablet, mobileVW, desktopVW, maxTablet } from '../styles/vars';

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
    <StyledRichtext
      className={`richtext ${className}`}
      ref={ref}
      dangerouslySetInnerHTML={{ __html: children }}
      desktopMargin={desktopMargin}
      mobileMargin={mobileMargin}
    />
  );
});

Richtext.displayName = 'SharedRichtext';
export default Richtext;

interface RichtextProps {
  desktopMargin?: [number, number, number, number];
  mobileMargin?: [number, number, number, number];
}

const StyledRichtext = styled.div<RichtextProps>`
  margin: ${({ desktopMargin, mobileMargin }) => desktopMargin && !mobileMargin && `${mobileVW(desktopMargin[0])} ${mobileVW(desktopMargin[1])} ${mobileVW(desktopMargin[2])} ${mobileVW(desktopMargin[3])}`};

  ${maxTablet} {
    margin: ${({ mobileMargin }) => mobileMargin && `${mobileVW(mobileMargin[0])} ${mobileVW(mobileMargin[1])} ${mobileVW(mobileMargin[2])} ${mobileVW(mobileMargin[3])}`};
  }

  ${minTablet} {
    margin: ${({ desktopMargin }) => desktopMargin && `${desktopVW(desktopMargin[0])} ${desktopVW(desktopMargin[1])} ${desktopVW(desktopMargin[2])} ${desktopVW(desktopMargin[3])}`};
  }

  p, ul, ol, blockquote, h3 {
    margin-bottom: ${mobileVW(24)};

    ${minTablet} {
      margin-bottom: ${desktopVW(24)};
    }
  }

  p + h3 {
    margin-top: ${mobileVW(80)};

    ${minTablet} {
      margin-top: ${desktopVW(64)};
    }
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    display: flex;
    flex-direction: column;

    ${maxTablet} {
      padding-left: ${mobileVW(24)};
    }

    ${minTablet} {
      row-gap: ${desktopVW(24)};
    }
  }

  ol {
    list-style: decimal;
  }

  strong {
    font-weight: bold;
  }

  *:last-child,
  * *:last-child {
    margin-bottom: 0;
  }
`;
