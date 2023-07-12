import React from 'react';
import * as Styled from './styled';
import { Modal, Page, Text } from '../../components';
import InvitationForm from './InvitationForm/InvitationForm';
import { invitationService } from '../../services';
import { InvitationPostModel } from '../../models/invitation.model';
import AllDone from './AllDone/AllDone';

const Home: React.FC = () => {
  const [isInvitationFormOpen, setInvitationFormOpen] = React.useState(false);
  const [isAllDoneOpen, setAllDoneOpen] = React.useState(false);

  const onOpenInvitationForm = React.useCallback(() => {
    setInvitationFormOpen(true);
  }, []);
  const onCloseInvitationForm = React.useCallback(() => {
    setInvitationFormOpen(false);
  }, []);
  const onCloseAllDone = React.useCallback(() => {
    setAllDoneOpen(false);
  }, []);
  const onSendInvitation = React.useCallback((payload: InvitationPostModel) => {
    return invitationService.postInvitation(payload).then(() => {
      setAllDoneOpen(true);
    });
  }, []);

  React.useEffect(() => {
    return () => {
      setInvitationFormOpen(false);
      setAllDoneOpen(false);
    };
  }, []);

  return (
    <Page>
      <Styled.Content>
        <Styled.Heading>
          A better way
          <span>to enjoy every day.</span>
        </Styled.Heading>
        <Text>Be the first to know when we launch.</Text>
        <Styled.RequestButton id="btnRequestAnInvite" type="button" onClick={onOpenInvitationForm}>
          Request an invite
        </Styled.RequestButton>
        {isInvitationFormOpen && (
          <Modal onClose={onCloseInvitationForm}>
            <InvitationForm onClose={onCloseInvitationForm} onSend={onSendInvitation} />
          </Modal>
        )}
        {isAllDoneOpen && (
          <Modal onClose={onCloseAllDone}>
            <AllDone onClose={onCloseAllDone} />
          </Modal>
        )}
      </Styled.Content>
    </Page>
  );
};

export default Home;
