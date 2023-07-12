import React from 'react';
import * as Styled from './styled';
import { Overlay } from '../../theme/styles';
import { useOnPopupClose } from '../../hooks/useOnPopupClose';

interface Props {
  onClose: () => void;
  children: React.ReactElement;
}

const Modal: React.FC<Props> = ({ onClose, children }) => {
  const modalContainerRef = React.useRef<HTMLDivElement>(null);

  useOnPopupClose(modalContainerRef, onClose);

  return (
    <>
      <Styled.Container ref={modalContainerRef}>{children}</Styled.Container>
      <Overlay />
    </>
  );
};

export default Modal;
