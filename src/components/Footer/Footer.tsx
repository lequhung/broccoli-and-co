import React from 'react';
import * as Styled from './styled';

const Footer: React.FC = () => {
  return (
    <Styled.Container>
      Made with &hearts; in Melbourne.
      <span>&copy; 2016 Broccoli &amp; Co. All rights reserved.</span>
    </Styled.Container>
  );
};

export default Footer;
