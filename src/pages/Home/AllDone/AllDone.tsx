import React from 'react';
import { Button, Text } from '../../../components';
import * as Styled from './styled';

interface Props {
  onClick: () => void;
}

const AllDone: React.FC<Props> = ({ onClick }) => {
  return (
    <Styled.Container>
      <Text>
        <>
          You will be one of the first to experience
          <span>Broccoli & Co. when we launch.</span>
        </>
      </Text>
      <Button id="btnOk" type="button" onClick={onClick}>
        Ok
      </Button>
    </Styled.Container>
  );
};

export default AllDone;
