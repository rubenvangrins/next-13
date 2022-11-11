// @ts-nocheck
import React from 'react';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function useStyledComponentsRegistry() {
  const [styledComponentsStyleSheet] = React.useState(
    () => new ServerStyleSheet(),
  );

  const styledComponentsFlushEffect = () => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    // Alternatively, you can use `styledComponentsStyleSheet.seal()`
    // But when using Suspense boundaries, the styles should be cleared:
    styledComponentsStyleSheet.instance.clearTag();
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{styles}</>;
  };

  function StyledComponentsRegistry({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children as React.ReactElement}
      </StyleSheetManager>
    );
  }

  return [StyledComponentsRegistry, styledComponentsFlushEffect] as const;
}
