import React from 'react';
import * as Styled from './styled';

interface Props {
  children: React.ReactElement;
}

const Body: React.FC<Props> = ({ children }) => {
  return <Styled.Body>{children}</Styled.Body>;
};

export default Body;
