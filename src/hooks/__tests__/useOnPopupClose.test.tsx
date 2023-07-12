import { fireEvent, renderHook } from '@testing-library/react';
import { useOnPopupClose } from '../useOnPopupClose';

describe('useOnPopupClose', () => {
  const mockAction = jest.fn();

  const ref = {
    current: {
      contains: jest.fn()
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } as any;

  test('should execute an action after an ESC key is pressed', () => {
    const { rerender } = renderHook(() => useOnPopupClose(ref, mockAction));
    rerender();

    fireEvent.keyDown(document, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27
    });

    expect(mockAction).toHaveBeenCalled();
  });

  test('should execute an action after a mousedown is pressed', () => {
    jest.spyOn(ref.current, 'contains').mockReturnValue(false);

    const { rerender } = renderHook(() => useOnPopupClose(ref, mockAction));
    rerender();

    fireEvent.mouseDown(document);

    expect(mockAction).toHaveBeenCalled();
  });
});
