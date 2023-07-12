import React from 'react';
import * as Styled from './styled';
import { Body, Footer, Header } from '../index';

interface Props {
  children: React.ReactElement;
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <Styled.Container>
      <Header></Header>
      <Body>{children}</Body>
      <Footer></Footer>
    </Styled.Container>
  );
};

export default Page;
