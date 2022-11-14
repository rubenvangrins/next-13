import { createRef, MutableRefObject } from 'react';

export const useMultipleRefs = (length: number) => {
  const refs = Array.from({ length }, () => createRef() as MutableRefObject<any>);

  return refs;
};
