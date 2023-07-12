import React from 'react';
import { Button, Text } from '../../../components';
import * as Styled from './styled';

interface Props {
  onClose: () => void;
}

const AllDone: React.FC<Props> = ({ onClose }) => {
  return (
    <Styled.Container>
      <h1>All done!</h1>
      <Styled.Separator />
      <Styled.Content>
        <Text>
          <>
            You will be one of the first to experience
            <span>Broccoli & Co. when we launch.</span>
          </>
        </Text>
      </Styled.Content>
      <Button id="btnOk" type="button" onClick={onClose}>
        Ok
      </Button>
    </Styled.Container>
  );
};

export default AllDone;
