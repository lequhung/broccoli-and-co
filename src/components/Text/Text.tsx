import React from 'react';
import * as Styled from './styled';

interface Props {
  children: React.ReactElement | string;
}

const Text: React.FC<Props> = ({ children }) => {
  return <Styled.Text>{children}</Styled.Text>;
};

export default Text;
