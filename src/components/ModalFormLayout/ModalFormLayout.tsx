import React from 'react';
import * as Styled from './styled';
import Modal from '../Modal/Modal';

interface Props {
  title: string | React.ReactElement;
  onModalClosed: () => void;
  width?: string;
  children: React.ReactElement;
}

const ModalFormLayout: React.FC<Props> = ({ title, onModalClosed, width = '410px', children }) => {
  return (
    <Modal onClose={onModalClosed}>
      <Styled.Container width={width}>
        <Styled.Close>
          <button onClick={onModalClosed}>&#x2715;</button>
        </Styled.Close>
        <h1>{title}</h1>
        <Styled.Separator />
        <Styled.Content>{children}</Styled.Content>
      </Styled.Container>
    </Modal>
  );
};

export default ModalFormLayout;
