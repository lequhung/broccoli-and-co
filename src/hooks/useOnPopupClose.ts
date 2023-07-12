import React, { RefObject } from 'react';
import { KeyboardKey } from '../constants/keyboardKeys.enum';

export const useOnPopupClose = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event?: KeyboardEvent | MouseEvent) => void
): void => {
  React.useEffect(() => {
    const keyDownListener = (event: KeyboardEvent): void => {
      if (event.key === KeyboardKey.ESC) {
        handler(event);
      }
    };

    const mouseDownListener = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener('keydown', keyDownListener);
    document.addEventListener('mousedown', mouseDownListener);
    return () => {
      document.removeEventListener('keydown', keyDownListener);
      document.removeEventListener('mousedown', mouseDownListener);
    };
  }, [ref, handler]);
};
