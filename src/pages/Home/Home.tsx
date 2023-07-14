import React from 'react';
import * as Styled from './styled';
import { Page, Text } from '../../components';
import InvitationForm from './InvitationForm/InvitationForm';
import { invitationService } from '../../services';
import { InvitationPostModel } from '../../models/invitation.model';
import AllDone from './AllDone/AllDone';
import ModalFormLayout from '../../components/ModalFormLayout/ModalFormLayout';

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
      setInvitationFormOpen(false);
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
          <ModalFormLayout title="Request an invite" onModalClosed={onCloseInvitationForm}>
            <InvitationForm onSend={onSendInvitation} />
          </ModalFormLayout>
        )}
        {isAllDoneOpen && (
          <ModalFormLayout title="All done!" onModalClosed={onCloseAllDone}>
            <AllDone onClick={onCloseAllDone} />
          </ModalFormLayout>
        )}
      </Styled.Content>
    </Page>
  );
};

export default Home;
